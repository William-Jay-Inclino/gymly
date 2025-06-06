import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMemberInput } from './dto/create-member.input';
import { MutationMemberResponse } from './entities/member.response.entity';
import { Member, Prisma } from 'apps/gymly/prisma/generated/client';
import { addDays } from 'date-fns';

@Injectable()
export class MemberService {

    constructor(private readonly prisma: PrismaService) {}

    async find_all(payload: { gym_id: string }): Promise<Member[]> {
        return this.prisma.member.findMany({
            where: {
                memberships: {
                    some: {
                        gym_id: payload.gym_id,
                        is_active: true, 
                    },
                },
            },
            orderBy: {
                created_at: 'desc',
            }
        });
    }

    async create(data: CreateMemberInput): Promise<MutationMemberResponse> {
        return await this.prisma.$transaction(async (tx) => {

            // Validate plans
            if (!data.plan.plan_ids || data.plan.plan_ids.length === 0) {
                throw new BadRequestException('At least one plan_id is required');
            }

            // Create the member
            const member = await tx.member.create({
                data: {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    contact_number: data.contact_number,
                    created_by: 'system',
                },
            });

            // Update total member
            await this.update_gym_stats({
                gym_id: data.plan.gym_id,
                increment_member: true,
            }, tx as Prisma.TransactionClient);

            // For each plan_id, create a membership and update stats for analytics
            for (const plan_id of data.plan.plan_ids) {
                const plan = await tx.plan.findUnique({
                    where: { id: plan_id },
                });
                if (!plan) {
                    throw new BadRequestException(`Plan not found: ${plan_id}`);
                }

                const startDate = new Date();
                let endDate: Date | null = null;
                let sessionsLeft: number | null = null;

                if (plan.num_of_days != null) {
                    endDate = addDays(startDate, plan.num_of_days); 
                }
                if (plan.num_of_sessions != null) {
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


    private async update_gym_stats(payload: {
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

    private async update_revenue(payload: {
        gym_id: string, 
        amount: number,
        year: number,
        month: number,
    }, tx: Prisma.TransactionClient) {
        const { gym_id, amount, year, month } = payload;

        await tx.revenue.upsert({
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

    private async update_membership_count(payload: {
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
