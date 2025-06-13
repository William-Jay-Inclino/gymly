import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanInput } from './dto/create-plan.input';
import { UpdatePlanInput } from './dto/update-plan.input';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { User } from '../user/entities/user.entity';
import { DB_TABLE } from '../libs/common-types';
import { Prisma } from 'apps/gymly/prisma/generated/client';
import { LIMIT } from '../limit/enums/limit.enums';

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

            const plan_limit = await this.validate_plan_limit({
                gym_id: createPlanInput.gym_id,
            }, tx as Prisma.TransactionClient);

            if(!plan_limit.success) {
                throw new Error(plan_limit.msg);
            }

            const created = await tx.plan.create({
                data: {...createPlanInput, created_by: metadata.current_user.username},
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

    private async validate_plan_limit(payload: {
        gym_id: string
    }, tx: Prisma.TransactionClient): Promise<{
        success: boolean;
        msg: string;
    }> {

        const { gym_id } = payload;

        const plan_count = await this.prisma.plan.count({
            where: { gym_id },
        });

        // Get the member limit for this gym
        const limit = await tx.gymLimit.findUnique({
            where: {
                gym_id_limit_id: {
                    gym_id: gym_id,
                    limit_id: LIMIT.PLAN_LIMIT,
                },
            },
        });

        if (limit) {

            if (plan_count >= limit.value) {
                return {
                    success: false,
                    msg: `Plan limit reached. You can only have ${limit.value} plans.`,
                };
            } else {
                return {
                    success: true,
                    msg: `Plan limit is ${limit.value}. You can create more plans.`,
                };
            }
        } else {
            return {
                success: false,
                msg: `Plan Limit not found for gym: ${gym_id}. Please contact support.`,
            };
        }
        
    }
}