import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanInput } from './dto/create-plan.input';
import { UpdatePlanInput } from './dto/update-plan.input';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { User } from '../user/entities/user.entity';
import { DB_TABLE } from '../libs/common-types';
import { Prisma } from 'apps/gymly/prisma/generated/client';

@Injectable()
export class PlanService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly audit: AuditLogsService,
    ) {}

    async find_all(gym_id: string) {
        return this.prisma.plan.findMany({
            where: { gym_id },
            orderBy: {
                name: 'asc',
            }
        });
    }

    async create(createPlanInput: CreatePlanInput, metadata: {
        ip_address: string;
        device_info: any;
        current_user: User; 
    }) {

        return await this.prisma.$transaction(async (tx) => {

            const created = await tx.plan.create({
                data: {...createPlanInput, created_by: 'system'},
            });

            await this.audit.createAuditEntry({
                gym_id: createPlanInput.gym_id,
                username: metadata.current_user.username,
                table: DB_TABLE.PLAN,
                action: 'CREATE-PLAN',
                reference_id: created.id,
                metadata: created,
                ip_address: metadata.ip_address,
                device_info: metadata.device_info
            }, tx as unknown as Prisma.TransactionClient)

            return created

        })

    }

    async update(
        id: string, 
        updatePlanInput: UpdatePlanInput,
        metadata: {
            ip_address: string;
            device_info: any;
            current_user: User;
        }
    ) {

        return await this.prisma.$transaction(async (tx) => {

            const existingPlan = await tx.plan.findUnique({
                where: { id },
            });

            if(!existingPlan) {
                throw new Error('Plan not found');
            }

            const updated = await tx.plan.update({
                where: { id },
                data: updatePlanInput,
            });

            await this.audit.createAuditEntry({
                gym_id: updated.gym_id,
                username: metadata.current_user.username,
                table: DB_TABLE.PLAN,
                action: 'UPDATE-PLAN',
                reference_id: updated.id,
                metadata: {
                    'old_value': existingPlan,
                    'new_value': updated,
                },
                ip_address: metadata.ip_address,
                device_info: metadata.device_info
            }, tx as unknown as Prisma.TransactionClient)

            return updated

        })

    }

    async delete(id: string, metadata: {
        ip_address: string;
        device_info: any;
        current_user: User;
    }) {

        return await this.prisma.$transaction(async (tx) => {

            const deleted = await tx.plan.delete({
                where: { id },
            });

            await this.audit.createAuditEntry({
                gym_id: deleted.gym_id,
                username: metadata.current_user.username,
                table: DB_TABLE.PLAN,
                action: 'DELETE-PLAN',
                reference_id: deleted.id,
                metadata: deleted,
                ip_address: metadata.ip_address,
                device_info: metadata.device_info
            }, tx as unknown as Prisma.TransactionClient)

            return deleted

        })

    }
}