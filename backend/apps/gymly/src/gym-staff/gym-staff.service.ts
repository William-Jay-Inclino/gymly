import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GymStaff } from './entities/gym-staff.entity';
import { CreateGymStaffInput } from './dto/create-gym-staff.input';
import { MutationGymStaffResponse } from './entities/gym-staff.response.entity';
import { UserService } from '../user/user.service';
import { Prisma, Role } from 'apps/gymly/prisma/generated/client';
import { UpdateGymStaffInput } from './dto/update-gym-staff.input';
import { LIMIT } from '../limit/enums/limit.enums';

@Injectable()
export class GymStaffService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly userService: UserService,
    ) {}

    async find_all(payload: { gym_id: string }) {
        
        const { gym_id } = payload;

        return await this.prisma.gymStaff.findMany({
            where: {
                gym_id,
            },
            select: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        firstname: true,
                        lastname: true,
                        contact_number: true,
                    }
                }
            },
            orderBy: {
                created_at: 'desc',
            }
        });
    }

    async create(input: CreateGymStaffInput): Promise<MutationGymStaffResponse> {

        return await this.prisma.$transaction(async (tx) => {

            const limit = await tx.gymLimit.findUnique({
                where: {
                    id: LIMIT.STAFF_LIMIT,
                    gym_id: input.gym_id,
                },
            })

            if(limit) {
                const count_gym_staff = await tx.gymStaff.count({
                    where: {
                        gym_id: input.gym_id,
                    },
                })

                if(count_gym_staff >= limit.value) {
                    return {
                        success: false,
                        msg: `Gym staff limit reached. You can only have ${limit.value} gym staff for this gym.`,
                    };
                }

            }
            
            // Use the helper function to generate a unique username
            const username = await this.userService.generateUniqueUsername({
                firstname: input.firstname, 
                lastname: input.lastname
            }, tx as Prisma.TransactionClient);
    
            // Create user
            const user = await tx.user.create({
                data: {
                    username,
                    firstname: input.firstname,
                    lastname: input.lastname,
                    password: input.password, 
                    role: Role.GYM_STAFF,
                    contact_number: input.contact_number,
                    created_by: 'system',
                },
            });
    
            // Create gym staff
            const gymStaff = await tx.gymStaff.create({
                data: {
                    user_id: user.id,
                    gym_id: input.gym_id,
                    created_by: 'system',
                },
                include: {
                    user: true,
                },
            });
    
            return {
                success: true,
                msg: 'Gym staff created successfully',
                data: gymStaff,
            };

        })

    }

    async update(input: UpdateGymStaffInput): Promise<MutationGymStaffResponse> {

        return await this.prisma.$transaction(async (tx) => {

            // Update user
            const user = await tx.user.update({
                where: { id: input.user_id },
                data: {
                    firstname: input.firstname,
                    lastname: input.lastname,
                    contact_number: input.contact_number,
                },
            });

            const gymStaff = await tx.gymStaff.findUnique({
                where: { user_id: input.user_id },
                include: {
                    user: true,
                },
            })

            return {
                success: true,
                msg: 'Gym staff updated successfully',
                data: gymStaff,
            };

        });

    }


    async delete(user_id: string): Promise<MutationGymStaffResponse> {

        return await this.prisma.$transaction(async (tx) => {

            const has_gym = await tx.gym.findFirst({
                where: { owner_id: user_id }
            })

            if(has_gym) {
                return {
                    success: false,
                    msg: 'Cannot delete gym staff with existing gyms. Please transfer ownership or delete the gyms first.',
                };
            }

            await tx.user.delete({
                where: { id: user_id },
            });

            return {
                success: true,
                msg: 'Gym staff deleted successfully',
            };

        });

    }

    
}
