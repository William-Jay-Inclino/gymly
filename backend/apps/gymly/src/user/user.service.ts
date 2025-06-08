import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from 'apps/gymly/prisma/generated/client';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async findOne(payload: { username: string }): Promise<User> {
        const { username } = payload;
        return this.prisma.user.findUnique({
            where: { username },
        });
    }

}