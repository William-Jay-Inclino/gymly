import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GymStaff } from './entities/gym-staff.entity';
import { CreateGymStaffInput } from './dto/create-gym-staff.input';
import { MutationGymStaffResponse } from './entities/gym-staff.response.entity';
import { UserService } from '../user/user.service';
import { Prisma, Role } from 'apps/gymly/prisma/generated/client';
import { UpdateGymStaffInput } from './dto/update-gym-staff.input';
import { LIMIT } from '../limit/enums/limit.enums';
import { User } from '../user/entities/user.entity';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { DB_TABLE } from '../libs/common-types';

@Injectable()
export class GymStaffService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly userService: UserService,
        private readonly audit: AuditLogsService,
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

    async create(input: CreateGymStaffInput, metadata: {
        ip_address: string,
        device_info: any,
        current_user: User,
    }): Promise<MutationGymStaffResponse> {

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
                email: input.email, 
            }, tx as Prisma.TransactionClient);
    
            // Create user
            const user = await tx.user.create({
                data: {
                    email: input.email,
                    username: username,
                    firstname: input.firstname,
                    lastname: input.lastname,
                    password: input.password, 
                    role: Role.GYM_STAFF,
                    contact_number: input.contact_number,
                    created_by: metadata.current_user.username,
                },
            });
    
            // Create gym staff
            const gymStaff = await tx.gymStaff.create({
                data: {
                    user_id: user.id,
                    gym_id: input.gym_id,
                    created_by: metadata.current_user.username,
                },
                include: {
                    user: true,
                },
            });

            await this.audit.createAuditEntry({
                gym_id: input.gym_id,
                username: metadata.current_user.username,
                table: DB_TABLE.GYM_STAFF,
                action: 'CREATE-GYM-STAFF',
                reference_id: gymStaff.id.toString(),
                metadata: gymStaff,
                ip_address: metadata.ip_address,
                device_info: metadata.device_info
            }, tx as unknown as Prisma.TransactionClient)
    
            return {
                success: true,
                msg: 'Gym staff created successfully',
                data: gymStaff,
            };

        })

    }

    async update(input: UpdateGymStaffInput, metadata: {
        ip_address: string,
        device_info: any,
        current_user: User,
    }): Promise<MutationGymStaffResponse> {

        return await this.prisma.$transaction(async (tx) => {

            const existingGymStaff = await tx.gymStaff.findUnique({
                where: { user_id: input.user_id },
                include: {
                    user: true,
                },
            })

            if(!existingGymStaff) {
                return {
                    success: false,
                    msg: 'Gym staff not found',
                };
            }

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

            await this.audit.createAuditEntry({
                gym_id: gymStaff.gym_id,
                username: metadata.current_user.username,
                table: DB_TABLE.GYM_STAFF,
                action: 'UPDATE-GYM-STAFF',
                reference_id: gymStaff.id.toString(),
                metadata: {
                    'old_value': existingGymStaff,
                    'new_value': gymStaff,
                },
                ip_address: metadata.ip_address,
                device_info: metadata.device_info
            }, tx as unknown as Prisma.TransactionClient)

            return {
                success: true,
                msg: 'Gym staff updated successfully',
                data: gymStaff,
            };

        });

    }


    async delete(user_id: string, metadata: {
        current_user: User,
        ip_address: string,
        device_info: any,
    }): Promise<MutationGymStaffResponse> {

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

            const deleted = await tx.user.delete({
                where: { id: user_id },
                select: {
                    gym_staff: {
                        include: {
                            user: true,
                        },
                    },
                },
            });

            await this.audit.createAuditEntry({
                gym_id: deleted.gym_staff.gym_id,
                username: metadata.current_user.username,
                table: DB_TABLE.GYM_STAFF,
                action: 'DELETE-GYM-STAFF',
                reference_id: deleted.gym_staff.id.toString(),
                metadata: deleted.gym_staff,
                ip_address: metadata.ip_address,
                device_info: metadata.device_info
            }, tx as unknown as Prisma.TransactionClient)

            return {
                success: true,
                msg: 'Gym staff deleted successfully',
            };

        });

    }

    
}
