import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from 'apps/gymly/prisma/generated/client';
import { UpdatePasswordInput } from './dto/update-password.input';
import { MutationUserResponse } from './entities/user.response.entity';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { DB_TABLE } from '../libs/common-types';
import { User as UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly audit: AuditLogsService,
    ) {}

    async findByUsername(username: string): Promise<UserEntity> {
        return this.prisma.user.findUnique({
            where: { username },
            include: {
                gym_staff: true,
                gym: true,
            }
        }) as unknown as UserEntity;
    }

    async findById(user_id: string) {
        return this.prisma.user.findUnique({
            where: { id: user_id },
            select: {
                id: true,
                username: true,
                role: true,
                gym: {
                    select: {
                        id: true,
                        name: true,
                    }
                },
                gym_staff: {
                    select: {
                        gym: {
                            select: {
                                id: true,
                                name: true,
                            }
                        }
                    }
                }
            }
        });
    }

    async generateUniqueUsername(payload: {
        firstname: string, 
        lastname: string
    }, tx: Prisma.TransactionClient): Promise<string> {

        const { firstname, lastname } = payload;

        const names = firstname.trim().split(' ');
        const firstInitial = names[0][0].toLowerCase();
        const lastInitial = names[1]?.[0]?.toLowerCase() || '';
        const baseUsername = lastInitial
            ? `${firstInitial}${lastInitial}.${lastname.trim().toLowerCase()}`
            : `${firstInitial}.${lastname.trim().toLowerCase()}`;

        let username = baseUsername;
        let counter = 1;
        while (await tx.user.findUnique({ where: { username } })) {
            username = `${baseUsername}${counter}`;
            counter++;
        }
        return username;
    }

    async updatePassword(input: UpdatePasswordInput, metadata: {
        ip_address: string,
        device_info: any,
        current_user: UserEntity,
    }): Promise<MutationUserResponse> {
        const { user_id, current_password, new_password } = input;

        return await this.prisma.$transaction(async (tx) => {
    
            const user = await tx.user.findUnique({ where: { id: user_id } });
            if (!user) {
                return {
                    success: false,
                    msg: 'User not found',
                    data: null,
                };
            }
    
            if (user.password !== current_password) {
                return {
                    success: false,
                    msg: 'Current password is incorrect',
                };
            }
    
            const updatedUser = await tx.user.update({
                where: { id: user_id },
                data: { password: new_password },
            });

            await this.audit.createAuditEntry({
                username: metadata.current_user.username,
                table: DB_TABLE.USER,
                action: 'UPDATE-PASSWORD',
                reference_id: updatedUser.id,
                ip_address: metadata.ip_address,
                device_info: metadata.device_info
            }, tx as unknown as Prisma.TransactionClient)

            return {
                success: true,
                msg: 'Password updated successfully',
            };

        })
    }

    async reset_password(payload: { user_id: string, password: string }, metadata: {
        ip_address: string,
        device_info: any,
        current_user: UserEntity,
    }): Promise<MutationUserResponse> {
        const { user_id, password } = payload;

        return await this.prisma.$transaction(async (tx) => {

            const user = await this.prisma.user.findUnique({ where: { id: user_id } });
            if (!user) {
                return {
                    success: false,
                    msg: 'User not found',
                    data: null,
                };
            }
    
            const updated = await this.prisma.user.update({
                where: { id: user_id },
                data: { password },
            });
            
            await this.audit.createAuditEntry({
                username: metadata.current_user.username,
                table: DB_TABLE.USER,
                action: 'RESET-PASSWORD',
                reference_id: updated.id,
                ip_address: metadata.ip_address,
                device_info: metadata.device_info
            }, tx as unknown as Prisma.TransactionClient)
    
            return {
                success: true,
                msg: 'Password has been reset successfully',
            };

        })

    }

}