import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMembershipInput } from './dto/create-membership.input';
import { MutationMembershipResponse } from './entities/membership.response.entity';
import { addDays, endOfDay, startOfDay } from 'date-fns';
import { MemberService } from '../member/member.service';
import { Prisma } from 'apps/gymly/prisma/generated/client';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { User } from '../user/entities/user.entity';
import { DB_TABLE } from '../libs/common-types';
import { AnalyticsService } from '../analytics/analytics.service';
import { LIMIT } from '../limit/enums/limit.enums';

@Injectable()
export class MembershipService {
    
    private readonly logger = new Logger(MembershipService.name);

    constructor(
        private readonly prisma: PrismaService,
        private readonly analytics: AnalyticsService,
        private readonly audit: AuditLogsService,
    ) {}

    async create_membership(payload: {
        input: CreateMembershipInput,
        metadata: {
            ip_address: string,
            device_info: any,
            current_user: { id: string, username: string },
        }
    }): Promise<MutationMembershipResponse> {
        const { input, metadata } = payload;

        return await this.prisma.$transaction(async (tx) => {
            // Validate member
            const member = await tx.member.findUnique({
                where: { id: input.member_id },
            });
            if (!member) {
                throw new BadRequestException(`Member not found: ${input.member_id}`);
            }

            const can_create = await this.validate_membership_limit({
                gym_id: input.gym_id,
                member_id: input.member_id,
            }, tx as Prisma.TransactionClient);


            if(!can_create.success) {
                return {
                    success: false,
                    msg: can_create.msg,
                }
            }

            const createdMemberships = [];

            for (const planInput of input.plans) {
                // Validate plan
                const plan = await tx.plan.findUnique({
                    where: { id: planInput.plan_id },
                });
                if (!plan) {
                    throw new BadRequestException(`Plan not found: ${planInput.plan_id}`);
                }

                // Compute dates and sessions
                const startDate = planInput.start_date ? new Date(planInput.start_date) : new Date();
                let endDate: Date | null = null;
                let sessionsLeft: number | null = null;

                if (plan.num_of_days != null) {
                    endDate = addDays(startDate, plan.num_of_days);
                }
                if (planInput.sessions_left !== undefined && planInput.sessions_left !== null) {
                    sessionsLeft = planInput.sessions_left;
                } else if (plan.num_of_sessions != null) {
                    sessionsLeft = plan.num_of_sessions;
                }

                // Create membership
                const membership = await tx.membership.create({
                    data: {
                        member_id: input.member_id,
                        gym_id: input.gym_id,
                        start_date: startDate,
                        end_date: endDate,
                        created_by: metadata.current_user.username,
                        is_active: true,
                        is_reminded: false,
                        ...(sessionsLeft !== null && { sessions_left: sessionsLeft }),
                        plan_name: plan.name,
                        plan_description: plan.description,
                        amount_paid: plan.price, // Decimal
                    },
                });

                // --- Update analytics ---
                const amount = plan.price;
                const year = startDate.getFullYear();
                const month = startDate.getMonth() + 1;

                // Update total revenue
                await this.analytics.update_gym_stats({
                    gym_id: input.gym_id,
                    amount,
                }, tx as Prisma.TransactionClient);

                // Update revenue for the specific month and year
                await this.analytics.update_revenue({
                    gym_id: input.gym_id,
                    amount,
                    year,
                    month,
                }, tx as Prisma.TransactionClient);

                // Update membership count for the specific month and year
                await this.analytics.update_membership_count({
                    gym_id: input.gym_id,
                    year,
                    month,
                }, tx as Prisma.TransactionClient);

                // Audit log
                await this.audit.createAuditEntry({
                    gym_id: input.gym_id,
                    username: metadata.current_user.username,
                    table: DB_TABLE.MEMBERSHIP,
                    action: 'CREATE-MEMBERSHIP',
                    reference_id: membership.id,
                    metadata: membership,
                    ip_address: metadata.ip_address,
                    device_info: metadata.device_info,
                }, tx as Prisma.TransactionClient);

                createdMemberships.push(membership);
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
                start_date: {
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

    private async validate_membership_limit(payload: {
        gym_id: string, member_id: string
    }, tx: Prisma.TransactionClient): Promise<{
        success: boolean,
        msg: string
    }> {
        
        const { gym_id, member_id } = payload;

        const membership_count = await tx.membership.count({
            where: {
                gym_id,
                member_id,
                is_active: true,
            },
        });
        

        // Get the member limit for this gym
        const limit = await tx.gymLimit.findUnique({
            where: {
                gym_id_limit_id: {
                    gym_id: gym_id,
                    limit_id: LIMIT.MEMBERSHIP_PER_MEMBER_LIMIT,
                },
            },
        });


        if (limit) {

            if (membership_count >= limit.value) {
                return {
                    success: false,
                    msg: `Membership limit reached. You can only have ${limit.value} memberships.`,
                };
            } else {
                return {
                    success: true,
                    msg: `Membership limit is within range. You can create more memberships.`,
                };
            }

        } else {
            return {
                success: false,
                msg: `Membership Limit not found for gym: ${gym_id}. Please contact support.`,
            };
        }

        
    }

}