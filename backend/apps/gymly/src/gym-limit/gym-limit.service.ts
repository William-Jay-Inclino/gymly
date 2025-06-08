import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GymLimitService {

    constructor(private readonly prisma: PrismaService) {}

    async find_all(gym_id: string) {
        return this.prisma.gymLimit.findMany({
            where: {
                gym_id
            },
            orderBy: {
                limit_id: 'asc',
            }
        });
    }

}
