import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMembershipInput } from './dto/create-membership.input';
import { MutationMembershipResponse } from './entities/membership.response.entity';
import { endOfDay, startOfDay } from 'date-fns';

@Injectable()
export class MembershipService {

    constructor(private readonly prisma: PrismaService) {}

    async create_membership(payload: { input: CreateMembershipInput }): Promise<MutationMembershipResponse> {
        const { input } = payload;

        return await this.prisma.$transaction(async (tx) => {
            // 1. Validate plans
            if (!input.plan_ids || input.plan_ids.length === 0) {
                throw new BadRequestException('At least one plan_id is required');
            }

            const createdMemberships = [];

            // 2. For each plan_id, create a membership
            for (const plan_id of input.plan_ids) {
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
                    endDate = new Date(startDate);
                    endDate.setDate(endDate.getDate() + plan.num_of_days);
                }
                if (plan.num_of_sessions != null) {
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
                });

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

}