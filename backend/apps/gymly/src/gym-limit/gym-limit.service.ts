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
            include: {
                limit: {
                   select: {
                        id: true,
                        name: true,
                   } 
                }  
            },
            orderBy: {
                limit_id: 'asc',
            }
        });
    }

    async get_limit(payload: { gym_id: string, limit_id: number }) {
        const { gym_id, limit_id } = payload;

        return this.prisma.gymLimit.findUnique({
            where: {
                gym_id_limit_id: {
                    gym_id,
                    limit_id
                }
            },
            select: {
                value: true
            }
        });
    }

}
