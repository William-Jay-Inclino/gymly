import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMembershipInput } from './dto/create-membership.input';
import { MutationMembershipResponse } from './entities/membership.response.entity';
import { addDays, endOfDay, startOfDay } from 'date-fns';
import { MemberService } from '../member/member.service';
import { Prisma } from 'apps/gymly/prisma/generated/client';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { User } from '../user/entities/user.entity';
import { DB_TABLE } from '../libs/common-types';

@Injectable()
export class MembershipService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly memberService: MemberService,
        private readonly audit: AuditLogsService,
    ) {}

    async create_membership(payload: {
        input: CreateMembershipInput,
        metadata: {
            ip_address: string,
            device_info: any,
            current_user: User, 
        }
    }): Promise<MutationMembershipResponse> {
        const { input, metadata } = payload;

        return await this.prisma.$transaction(async (tx) => {
            // 1. Validate plans
            if (!input.plans || input.plans.length === 0) {
                throw new BadRequestException('At least one plan is required');
            }

            const createdMemberships = [];

            // 2. For each plan, create a membership
            for (const planObj of input.plans) {
                const plan = await tx.plan.findUnique({
                    where: { id: planObj.plan_id },
                });
                if (!plan) {
                    throw new BadRequestException(`Plan not found: ${planObj.plan_id}`);
                }

                const startDate = new Date(planObj.start_date);
                let endDate: Date | null = null;
                let sessionsLeft: number | null = null;

                if (plan.num_of_days != null) {
                    endDate = addDays(startDate, plan.num_of_days);
                }

                // Use sessions_left from input if it is defined (even if 0), otherwise use plan default
                if (Object.prototype.hasOwnProperty.call(planObj, 'sessions_left')) {
                    sessionsLeft = planObj.sessions_left;
                } else if (plan.num_of_sessions != null) {
                    sessionsLeft = plan.num_of_sessions;
                }

                const membership = await tx.membership.create({
                    data: {
                        member_id: input.member_id,
                        gym_id: input.gym_id,
                        start_date: startDate,
                        end_date: endDate,
                        created_by: 'system',
                        ...(sessionsLeft !== null && { sessions_left: sessionsLeft }),
                        plan_name: plan.name,
                        plan_description: plan.description,
                        amount_paid: plan.price,
                    },
                    include: {
                        member: true,
                    },
                });

                await this.audit.createAuditEntry({
                    gym_id: input.gym_id,
                    username: metadata.current_user.username,
                    table: DB_TABLE.MEMBERSHIP,
                    action: 'CREATE-MEMBERSHIP',
                    reference_id: membership.id,
                    metadata: membership,
                    ip_address: metadata.ip_address,
                    device_info: metadata.device_info
                }, tx as unknown as Prisma.TransactionClient)

                createdMemberships.push(membership);

                // --- Update stats for analytics ---
                const now = new Date();
                const year = now.getFullYear();
                const month = now.getMonth() + 1;

                
                await this.memberService.update_gym_stats({
                    gym_id: input.gym_id,
                    amount: plan.price.toNumber ? plan.price.toNumber() : Number(plan.price),
                }, tx as Prisma.TransactionClient)

                await this.memberService.update_revenue({
                    gym_id: input.gym_id,
                    amount: plan.price.toNumber ? plan.price.toNumber() : Number(plan.price),
                    year,
                    month,
                }, tx as Prisma.TransactionClient);

                await this.memberService.update_membership_count({
                    gym_id: input.gym_id,
                    year,
                    month,
                }, tx as Prisma.TransactionClient);
            }

            return {
                success: true,
                msg: 'Membership(s) created successfully',
                data: createdMemberships,
            };
        });
    }

    async get_memberships(payload: { member_id: string, only_active?: boolean }) {
        return await this.prisma.membership.findMany({
            where: {
                member_id: payload.member_id,
                ...(payload.only_active ? { is_active: true } : {}),
            },
            orderBy: {
                start_date: 'desc',
            }
        });
    }

    async get_total_memberships_today(gym_id: string): Promise<number> {
        const today = new Date();
        const count = await this.prisma.membership.count({
            where: {
                gym_id,
                created_at: {
                    gte: startOfDay(today),
                    lte: endOfDay(today),
                },
            },
        });
        return count;
    }

    async get_total_active_memberships(gym_id: string): Promise<number> {
        const count = await this.prisma.membership.count({
            where: {
                gym_id,
                is_active: true,
            },
        });
        return count;
    }

    async get_upcoming_membership_expirations(gym_id: string) {
        const now = new Date();
        const threeDaysFromNow = addDays(startOfDay(now), 3);

        return this.prisma.membership.findMany({
            where: {
                gym_id,
                OR: [
                    {
                        // Expiring within 3 days (end_date logic)
                        end_date: {
                            not: null,
                            gt: now,
                            lte: threeDaysFromNow,
                        },
                        // Only exclude sessions_left if end_date is defined
                        sessions_left: null,
                    },
                    {
                        // Sessions left <= 3 and > 0 (sessions_left logic)
                        sessions_left: {
                            not: null,
                            lte: 3,
                            gt: 0,
                        },
                        // Only exclude end_date if sessions_left is defined
                        end_date: null,
                    },
                ],
            },
            include: {
                member: true,
            },
            orderBy: [
                { end_date: "asc" },
                { sessions_left: "asc" }
            ]
        });
    }

    async set_is_reminded(
        membership_id: string, 
        is_reminded: boolean,
        metadata: {
            ip_address: string,
            device_info: any,
            current_user: User,
        }
    ): Promise<MutationMembershipResponse> {
        try {

            return await this.prisma.$transaction(async (tx) => {

                const updated = await tx.membership.update({
                    where: { id: membership_id },
                    data: { is_reminded },
                });
    
                await this.audit.createAuditEntry({
                    gym_id: updated.gym_id,
                    username: metadata.current_user.username,
                    table: DB_TABLE.MEMBERSHIP,
                    action: 'UPDATE-REMINDER-STATUS',
                    reference_id: updated.id,
                    metadata: updated,
                    ip_address: metadata.ip_address,
                    device_info: metadata.device_info
                }, tx as unknown as Prisma.TransactionClient)
    
                return {
                    success: true,
                    msg: 'Membership reminder status updated successfully',
                };

            })

        } catch (error) {
            return {
                success: false,
                msg: 'Failed to update membership reminder status',
            };
        }
    }

}