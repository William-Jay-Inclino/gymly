import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMemberInput } from './dto/create-member.input';
import { MutationMemberResponse } from './entities/member.response.entity';
import { Member, Prisma } from 'apps/gymly/prisma/generated/client';
import { addDays } from 'date-fns';
import { LIMIT } from '../limit/enums/limit.enums';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { DB_TABLE } from '../libs/common-types';
import { AnalyticsService } from '../analytics/analytics.service';

@Injectable()
export class MemberService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly analytics: AnalyticsService,
        private readonly audit: AuditLogsService,
    ) {}

    async find_all(payload: { gym_id: string }): Promise<Member[]> {
        return this.prisma.member.findMany({
            where: {
                memberships: {
                    some: {
                        gym_id: payload.gym_id,
                    },
                },
            },
            orderBy: {
                created_at: 'desc',
            }
        });
    }

    async create(data: CreateMemberInput, metadata: {
        ip_address: string,
        device_info: any,
        current_user: { id: string, username: string },
    }): Promise<MutationMemberResponse> {
        return await this.prisma.$transaction(async (tx) => {
            // Validate plans
            if (!data.plan.plans || data.plan.plans.length === 0) {
                throw new BadRequestException('At least one plan is required');
            }

            // Get the member limit for this gym
            const limit = await tx.gymLimit.findUnique({
                where: {
                    gym_id_limit_id: {
                        gym_id: data.plan.gym_id,
                        limit_id: LIMIT.MEMBER_LIMIT,
                    },
                },
            });

            if (limit) {
                // Count unique members for this gym (based on memberships)
                const uniqueMembers = await tx.membership.findMany({
                    where: {
                        gym_id: data.plan.gym_id,
                    },
                    select: {
                        member_id: true,
                    },
                    distinct: ['member_id'],
                });
                const count_members = uniqueMembers.length;

                if (count_members >= limit.value) {
                    return {
                        success: false,
                        msg: `Member limit reached. You can only have ${limit.value} members.`,
                    };
                }
            } else {
                return {
                    success: false,
                    msg: `Limit not found for gym: ${data.plan.gym_id}. Please contact support.`,
                };
            }

            // Create the member
            const member = await tx.member.create({
                data: {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    contact_number: data.contact_number,
                    created_by: metadata.current_user.username,
                },
            });

            // Audit log for member creation
            await this.audit.createAuditEntry({
                gym_id: data.plan.gym_id,
                username: metadata.current_user.username,
                table: DB_TABLE.MEMBER,
                action: 'CREATE-MEMBER',
                reference_id: member.id,
                metadata: member,
                ip_address: metadata.ip_address,
                device_info: metadata.device_info
            }, tx as Prisma.TransactionClient);

            // Update total member count
            await this.analytics.update_gym_stats({
                gym_id: data.plan.gym_id,
                increment_member: true,
            }, tx as Prisma.TransactionClient);

            // For each plan, create a membership and update stats for analytics
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1;
            const createdMemberships = [];

            for (const planObj of data.plan.plans) {
                const plan = await tx.plan.findUnique({
                    where: { id: planObj.plan_id },
                });
                if (!plan) {
                    throw new BadRequestException(`Plan not found: ${planObj.plan_id}`);
                }

                const startDate = planObj.start_date ? new Date(planObj.start_date) : new Date();
                let endDate: Date | null = null;
                let sessionsLeft: number | null = null;

                if (plan.num_of_days != null) {
                    endDate = addDays(startDate, plan.num_of_days); 
                }

                // Priority: use sessions_left from input if present (even if 0), else use plan default
                if (Object.prototype.hasOwnProperty.call(planObj, 'sessions_left')) {
                    sessionsLeft = planObj.sessions_left;
                } else if (plan.num_of_sessions != null) {
                    sessionsLeft = plan.num_of_sessions;
                }

                const membership = await tx.membership.create({
                    data: {
                        member_id: member.id,
                        gym_id: data.plan.gym_id,
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

                // --- Update stats ---
                const amount = plan.price;

                // Update total revenue
                await this.analytics.update_gym_stats({
                    gym_id: data.plan.gym_id,
                    amount,
                }, tx as Prisma.TransactionClient);

                // Update revenue for the specific month and year (Used in analytics)
                await this.analytics.update_revenue({
                    gym_id: data.plan.gym_id,
                    amount,
                    year,
                    month,
                }, tx as Prisma.TransactionClient);

                // Update membership count for the specific month and year (Used in analytics)
                await this.analytics.update_membership_count({
                    gym_id: data.plan.gym_id,
                    year,
                    month,
                }, tx as Prisma.TransactionClient);

                // Audit log for membership creation
                await this.audit.createAuditEntry({
                    gym_id: data.plan.gym_id,
                    username: metadata.current_user.username,
                    table: DB_TABLE.MEMBERSHIP,
                    action: 'CREATE-MEMBERSHIP',
                    reference_id: membership.id,
                    metadata: membership,
                    ip_address: metadata.ip_address,
                    device_info: metadata.device_info
                }, tx as Prisma.TransactionClient);

                createdMemberships.push(membership);
            }

            // Fetch the created member with memberships
            const created = await tx.member.findUnique({
                where: { id: member.id },
                include: { memberships: true },
            });

            return {
                success: true,
                msg: 'Member created successfully',
                data: created,
            };
        });
    }

    async is_member_active(memberId: string): Promise<boolean> {
        // A member is active if they have at least one active membership
        const activeMembership = await this.prisma.membership.findFirst({
            where: {
                member_id: memberId,
                is_active: true,
            },
        });
        return !!activeMembership;
    }

}
