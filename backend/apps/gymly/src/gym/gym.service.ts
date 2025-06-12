import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { CreateGymInput } from './dto/create-gym.input';
import { MutationGymResponse } from './entities/gym.response.entity';
import { DB_TABLE } from '../libs/common-types';
import { Prisma } from 'apps/gymly/prisma/generated/client';
import { UpdateGymInput } from './dto/update-gym.input';

@Injectable()
export class GymService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly audit: AuditLogsService,
    ) {}

    async create_gym(
        create_gym_input: CreateGymInput,
        metadata: {
            ip_address: string;
            device_info: any;
            current_user: { id: string, username: string };
        }
    ): Promise<MutationGymResponse> {
        return await this.prisma.$transaction(async (tx) => {
            // 1. Create the gym
            const created_gym = await tx.gym.create({
                data: {
                    owner_id: create_gym_input.owner_id,
                    name: create_gym_input.name,
                    location: create_gym_input.location,
                    created_by: metadata.current_user.username,
                },
            });

            // 2. Create the plans if provided
            if (create_gym_input.plans && create_gym_input.plans.length > 0) {
                await tx.plan.createMany({
                    data: create_gym_input.plans.map(plan => ({
                        gym_id: created_gym.id,
                        name: plan.name,
                        description: plan.description,
                        price: plan.price,
                        num_of_days: plan.num_of_days,
                        num_of_sessions: plan.num_of_sessions,
                        created_by: metadata.current_user.username,
                    })),
                });
            }

            // 3. Audit log
            await this.audit.createAuditEntry({
                gym_id: created_gym.id,
                username: metadata.current_user.username,
                table: DB_TABLE.GYM,
                action: 'CREATE-GYM',
                reference_id: created_gym.id,
                metadata: created_gym,
                ip_address: metadata.ip_address,
                device_info: metadata.device_info,
            }, tx as Prisma.TransactionClient);

            return {
                success: true,
                msg: 'Gym created successfully',
                data: created_gym,
            };
        });
    }

    async update_gym(
        id: string,
        update_gym_input: UpdateGymInput,
        metadata: {
            ip_address: string;
            device_info: any;
            current_user: { id: string, username: string };
        }
    ): Promise<MutationGymResponse> {
        return await this.prisma.$transaction(async (tx) => {
            const existing_gym = await tx.gym.findUnique({
                where: { id },
            });

            if (!existing_gym) {
                return {
                    success: false,
                    msg: 'Gym not found',
                    data: null,
                };
            }

            const updated_gym = await tx.gym.update({
                where: { id },
                data: {
                    ...update_gym_input,
                },
            });

            await this.audit.createAuditEntry({
                gym_id: updated_gym.id,
                username: metadata.current_user.username,
                table: DB_TABLE.GYM,
                action: 'UPDATE-GYM',
                reference_id: updated_gym.id,
                metadata: {
                    old_value: existing_gym,
                    new_value: updated_gym,
                },
                ip_address: metadata.ip_address,
                device_info: metadata.device_info,
            }, tx as Prisma.TransactionClient);

            return {
                success: true,
                msg: 'Gym updated successfully',
                data: updated_gym,
            };
        });
    }

    async delete_gym(
        id: string,
        metadata: {
            ip_address: string;
            device_info: any;
            current_user: { id: string, username: string };
        }
    ): Promise<MutationGymResponse> {
        return await this.prisma.$transaction(async (tx) => {
            const deleted_gym = await tx.gym.delete({
                where: { id },
            });

            await this.audit.createAuditEntry({
                gym_id: deleted_gym.id,
                username: metadata.current_user.username,
                table: DB_TABLE.GYM,
                action: 'DELETE-GYM',
                reference_id: deleted_gym.id,
                metadata: deleted_gym,
                ip_address: metadata.ip_address,
                device_info: metadata.device_info,
            }, tx as Prisma.TransactionClient);

            return {
                success: true,
                msg: 'Gym deleted successfully',
                data: deleted_gym,
            };
        });
    }
}