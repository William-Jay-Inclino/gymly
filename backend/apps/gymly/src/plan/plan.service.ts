import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanInput } from './dto/create-plan.input';
import { UpdatePlanInput } from './dto/update-plan.input';

@Injectable()
export class PlanService {

    constructor(private readonly prisma: PrismaService) {}

    async find_all(gym_id: string) {
        return this.prisma.plan.findMany({
            where: { gym_id },
            orderBy: {
                name: 'asc',
            }
        });
    }

    async create(createPlanInput: CreatePlanInput) {
        return this.prisma.plan.create({
            data: {...createPlanInput, created_by: 'system'},
        });
    }

    async update(id: string, updatePlanInput: UpdatePlanInput) {
        return this.prisma.plan.update({
            where: { id },
            data: updatePlanInput,
        });
    }

    async delete(id: string) {
        return this.prisma.plan.delete({
            where: { id },
        });
    }
}