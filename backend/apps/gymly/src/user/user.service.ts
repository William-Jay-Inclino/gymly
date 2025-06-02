import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { PrismaService } from '../prisma/prisma.service';
import { User as UserEntity } from './entities/user.entity';
import { Role } from 'apps/gymly/prisma/generated/client';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async createUser(data: CreateUserInput): Promise<UserEntity> {
        let membershipsData = undefined;

        if (data.membership) {
            const plan = await this.prisma.plan.findUnique({
                where: { id: data.membership.plan_id },
            });
            if (!plan) {
                throw new Error('Plan not found');
            }

            const startDate = new Date();
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + plan.num_of_days);

            membershipsData = {
                create: {
                    gym_id: data.membership.gym_id,
                    plan_id: data.membership.plan_id,
                    start_date: startDate,
                    end_date: endDate,
                    is_active: true,
                    is_paid: true,
                },
            };
        }

        const createdUser =  await this.prisma.user.create({
            data: {
                firstname: data.firstname,
                middlename: data.middlename,
                lastname: data.lastname,
                email: data.email,
                password_hash: data.password, // Hash in production!
                role: data.role,
                is_active: true,
                memberships: membershipsData,
            },
            include: {
                memberships: true,
            },
        })

        return createdUser as unknown as UserEntity;
    }

    async getMembersByGym(gymId: string): Promise<UserEntity[]> {
        
        const members = await this.prisma.user.findMany({
            where: {
                memberships: {
                    some: {
                        gym_id: gymId,
                    },
                },
                role: Role.MEMBER, 
            },
            include: {
                memberships: true,
            },
        });

        return members as unknown as UserEntity[];

    }


}