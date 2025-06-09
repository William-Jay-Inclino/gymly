import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from 'apps/gymly/prisma/generated/client';
import { UpdatePasswordInput } from './dto/update-password.input';
import { MutationUserResponse } from './entities/user.response.entity';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async findByUsername(username: string): Promise<User> {
        return this.prisma.user.findUnique({
            where: { username },
        });
    }

    async findById(user_id: string) {
        return this.prisma.user.findUnique({
            where: { id: user_id },
            select: {
                id: true,
                username: true,
                role: true,
                gyms: {
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

    async updatePassword(input: UpdatePasswordInput): Promise<MutationUserResponse> {
        const { user_id, current_password, new_password } = input;

        const user = await this.prisma.user.findUnique({ where: { id: user_id } });
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

        const updatedUser = await this.prisma.user.update({
            where: { id: user_id },
            data: { password: new_password },
        });

        return {
            success: true,
            msg: 'Password updated successfully',
        };
    }

    async reset_password(payload: { user_id: string, password: string }): Promise<MutationUserResponse> {
        const { user_id, password } = payload;

        const user = await this.prisma.user.findUnique({ where: { id: user_id } });
        if (!user) {
            return {
                success: false,
                msg: 'User not found',
                data: null,
            };
        }

        await this.prisma.user.update({
            where: { id: user_id },
            data: { password },
        });

        return {
            success: true,
            msg: 'Password has been reset successfully',
        };
    }

}