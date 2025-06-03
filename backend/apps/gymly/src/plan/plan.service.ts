import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlanService {

    constructor(private readonly prisma: PrismaService) {}

    async find_all() {
        return this.prisma.plan.findMany({
            orderBy: {
                name: 'asc',
            }
        });
    }

}
