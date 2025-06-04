import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMemberInput } from './dto/create-member.input';
import { MutationMemberResponse } from './entities/member.response.entity';

@Injectable()
export class MemberService {

    constructor(private readonly prisma: PrismaService) {}

    async find_all() {
        return this.prisma.member.findMany({
            orderBy: {
                created_at: 'desc',
            }
        });
    }

    async create(data: CreateMemberInput): Promise<MutationMemberResponse> {
        return await this.prisma.$transaction(async (tx) => {
            // 1. Validate plans
            if (!data.plan.plan_ids || data.plan.plan_ids.length === 0) {
                throw new BadRequestException('At least one plan_id is required');
            }

            // 2. Create the member
            const member = await tx.member.create({
                data: {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    contact_number: data.contact_number,
                    created_by: 'system',
                },
            });

            // 3. For each plan_id, create a membership
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
                    endDate = new Date(startDate);
                    endDate.setDate(endDate.getDate() + plan.num_of_days);
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
            }

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
