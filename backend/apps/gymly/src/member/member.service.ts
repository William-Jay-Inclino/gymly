import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMemberInput } from './dto/create-member.input';

@Injectable()
export class MemberService {

    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.member.findMany();
    }

    async create(data: CreateMemberInput) {
        return await this.prisma.$transaction(async (tx) => {
            // 1. Get the plan to compute end_date
            const plan = await tx.plan.findUnique({
                where: { id: data.plan.plan_id },
            });
            if (!plan) {
                throw new BadRequestException('Plan not found');
            }

            // 2. Compute start_date and end_date
            const startDate = new Date();
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + plan.num_of_days);

            // 3. Create the member with membership in one call
            const member = await tx.member.create({
                data: {
                    firstname: data.firstname,
                    middlename: data.middlename,
                    lastname: data.lastname,
                    contact_number: data.contact_number,
                    created_by: 'system',
                    memberships: {
                        create: {
                            gym: { connect: { id: data.plan.gym_id } },
                            plan: { connect: { id: data.plan.plan_id } },
                            start_date: startDate,
                            end_date: endDate,
                            amount_paid: plan.price,
                            created_by: 'system',
                        },
                    },
                },
                include: {
                    memberships: true,
                },
            });

            return member;
        });
    }

}
