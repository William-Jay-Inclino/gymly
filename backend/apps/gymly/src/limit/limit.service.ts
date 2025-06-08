import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LimitService {

    constructor(private readonly prisma: PrismaService) {}

    async find_all() {
        return this.prisma.limit.findMany({
            orderBy: {
                id: 'asc',
            }
        });
    }

}
