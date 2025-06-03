import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMembershipInput } from './dto/create-membership.input';

@Injectable()
export class MembershipService {

    constructor(private readonly prisma: PrismaService) {}

    async create_membership(payload: { input: CreateMembershipInput }) {
        const { input } = payload;

        return await this.prisma.$transaction(async (tx) => {
            // 1. Get the plan to compute end_date or sessions_left
            const plan = await tx.plan.findUnique({
                where: { id: input.plan_id },
            });
            if (!plan) {
                throw new BadRequestException('Plan not found');
            }

            // 2. Compute start_date and end_date (if by days)
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

            // 3. Create the membership
            const membership = await tx.membership.create({
                data: {
                    member_id: input.member_id,
                    gym_id: input.gym_id,
                    plan_id: input.plan_id,
                    start_date: startDate,
                    end_date: endDate,
                    amount_paid: plan.price,
                    created_by: 'system',
                    ...(sessionsLeft !== null && { sessions_left: sessionsLeft }),
                },
                include: {
                    plan: true,
                },
            });

            return membership;
        });
    }

    async get_memberships(payload: { member_id: string }) {
        return await this.prisma.membership.findMany({
            where: { member_id: payload.member_id },
            include: {
                plan: true,
            },
        });
    }
}