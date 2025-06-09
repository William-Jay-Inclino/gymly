import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMemberInput } from './dto/create-member.input';
import { MutationMemberResponse } from './entities/member.response.entity';
import { Member, Prisma } from 'apps/gymly/prisma/generated/client';
import { addDays } from 'date-fns';
import { LIMIT } from '../limit/enums/limit.enums';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { DB_TABLE } from '../libs/common-types';

@Injectable()
export class MemberService {

    constructor(
        private readonly prisma: PrismaService,
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
            }

            // Create the member
            const member = await tx.member.create({
                data: {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    contact_number: data.contact_number,
                    created_by: 'system',
                },
                include: {
                    memberships: true,
                },
            });

            await this.audit.createAuditEntry({
                gym_id: data.plan.gym_id,
                username: metadata.current_user.username,
                table: DB_TABLE.MEMBER,
                action: 'CREATE-MEMBER',
                reference_id: member.id,
                metadata: member,
                ip_address: metadata.ip_address,
                device_info: metadata.device_info
            }, tx as unknown as Prisma.TransactionClient)

            // Update total member
            await this.update_gym_stats({
                gym_id: data.plan.gym_id,
                increment_member: true,
            }, tx as Prisma.TransactionClient);

            // For each plan, create a membership and update stats for analytics
            for (const planObj of data.plan.plans) {
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

                // Priority: use sessions_left from input if present (even if 0), else use plan default
                if (Object.prototype.hasOwnProperty.call(planObj, 'sessions_left')) {
                    sessionsLeft = planObj.sessions_left;
                } else if (plan.num_of_sessions != null) {
                    sessionsLeft = plan.num_of_sessions;
                }

                await tx.membership.create({
                    data: {
                        member_id: member.id,
                        gym_id: data.plan.gym_id,
                        start_date: startDate,
                        end_date: endDate,
                        created_by: 'system',
                        ...(sessionsLeft !== null && { sessions_left: sessionsLeft }),
                        plan_name: plan.name,
                        plan_description: plan.description,
                        amount_paid: plan.price,
                    },
                });

                // --- Update stats ---
                const now = new Date();
                const year = now.getFullYear();
                const month = now.getMonth() + 1;

                // Update total revenue
                await this.update_gym_stats({
                    gym_id: data.plan.gym_id,
                    amount: plan.price.toNumber ? plan.price.toNumber() : Number(plan.price),
                }, tx as Prisma.TransactionClient);

                // Update revenue for the specific month and year (Used in analytics)
                await this.update_revenue({
                    gym_id: data.plan.gym_id,
                    amount: plan.price.toNumber ? plan.price.toNumber() : Number(plan.price),
                    year,
                    month,
                }, tx as Prisma.TransactionClient);

                // Update membership count for the specific month and year (Used in analytics)
                await this.update_membership_count({
                    gym_id: data.plan.gym_id,
                    year,
                    month,
                }, tx as Prisma.TransactionClient);
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

    async update_gym_stats(payload: {
        gym_id: string, 
        amount?: number,
        increment_member?: boolean,
    }, tx: Prisma.TransactionClient) {
        const { gym_id, amount, increment_member } = payload;

        await tx.gymStats.upsert({
            where: { gym_id },
            update: {
                ...(amount && { total_revenue: { increment: amount } }),
                ...(increment_member && { total_members: { increment: 1 } }),
            },
            create: {
                gym_id,
                total_revenue: amount ?? 0,
                total_members: increment_member ? 1 : 0,
            },
        });
    }

    async update_revenue(payload: {
        gym_id: string, 
        amount: number,
        year: number,
        month: number,
    }, tx: Prisma.TransactionClient) {
        const { gym_id, amount, year, month } = payload;

        const x = await tx.revenue.upsert({
            where: {
                gym_id_year_month: {
                    gym_id,
                    year,
                    month,
                },
            },
            update: {
                amount: { increment: amount },
            },
            create: {
                gym_id,
                year,
                month,
                amount,
            },
        });

    }

    async update_membership_count(payload: {
        gym_id: string, 
        year: number,
        month: number,
    }, tx: Prisma.TransactionClient) {
        const { gym_id, year, month } = payload;

        await tx.membershipCount.upsert({
            where: {
                gym_id_year_month: {
                    gym_id,
                    year,
                    month,
                },
            },
            update: {
                count: { increment: 1 },
            },
            create: {
                gym_id,
                year,
                month,
                count: 1,
            },
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
