import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from 'apps/gymly/prisma/generated/client';

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
                username: true,
                gyms: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        });
    }

}