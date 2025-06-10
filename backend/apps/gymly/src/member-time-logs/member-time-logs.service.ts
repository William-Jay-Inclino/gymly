import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { startOfDay, endOfDay } from 'date-fns';
import { MutationMemberTimeLogResponse } from './entities/member-time-log.response.entity';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { User } from '../user/entities/user.entity';
import { DB_TABLE } from '../libs/common-types';
import { Prisma } from 'apps/gymly/prisma/generated/client';

@Injectable()
export class MemberTimeLogsService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly audit: AuditLogsService,
    ) {}

    async find_time_logs(payload: {
        gym_id?: string | null,
        checked_in_at?: Date | null,
        member_id?: string | null
    }) {
        const { gym_id, checked_in_at, member_id } = payload;

        return this.prisma.memberTimeLogs.findMany({
            where: {
                ...(gym_id && { gym_id }),
                ...(member_id && { member_id }),
                ...(checked_in_at && {
                    checked_in_at: {
                        gte: startOfDay(checked_in_at),
                        lte: endOfDay(checked_in_at),
                    }
                }),
            },
            include: {
                member: true
            },
            orderBy: { checked_in_at: 'desc' }
        });
    }

    async log_check_in(
        input: { 
            member_id: string; 
            gym_id: string;
            membership_ids: string[]; 
            recorded_by?: string 
        }, 
        metadata: {
            ip_address: string;
            device_info: any;
            current_user: User; 
        }
    ): Promise<MutationMemberTimeLogResponse> {
        const { member_id, gym_id, membership_ids, recorded_by } = input;

        return await this.prisma.$transaction(async (tx) => {
            try {
                const has_active_membership = await this.has_active_membership(tx as Prisma.TransactionClient, member_id);
                if (!has_active_membership) {
                    return {
                        success: false,
                        msg: 'Member has no active membership'
                    };
                }

                await this.decrement_sessions_and_deactivate(tx as Prisma.TransactionClient, membership_ids);

                const created = await this.create_time_log(tx as Prisma.TransactionClient, {
                    member_id,
                    gym_id,
                    recorded_by
                });

                await this.link_memberships_to_log(tx as Prisma.TransactionClient, created.id, membership_ids);

                await this.create_audit(tx as Prisma.TransactionClient, input, metadata, created);

                return {
                    success: true,
                    msg: 'Successfully logged time',
                    data: created
                };

            } catch (error) {
                throw error;
            }
        });
    }

    async get_total_checked_in_today(gym_id: string): Promise<number> {
        const today = new Date();
        const count = await this.prisma.memberTimeLogs.count({
            where: {
                gym_id,
                checked_in_at: {
                    gte: startOfDay(today),
                    lte: endOfDay(today),
                },
            },
        });
        return count;
    }

    async get_member_logs_by_month(payload: { 
        year: number; 
        month: number; 
        member_id: string;
        gym_id: string;
    }) {
        const { year, month, member_id, gym_id } = payload;
        const start = new Date(year, month - 1, 1, 0, 0, 0, 0);
        const end = new Date(year, month, 0, 23, 59, 59, 999);

        return this.prisma.memberTimeLogs.findMany({
            where: {
                member_id,
                gym_id,
                checked_in_at: {
                    gte: start,
                    lte: end,
                },
            },
            orderBy: { checked_in_at: 'asc' },
        });
    }

    async get_all_attendance_by_date(payload: { date: Date; gym_id: string }) {
        const { date, gym_id } = payload;
        return this.prisma.memberTimeLogs.findMany({
            where: {
                gym_id,
                checked_in_at: {
                    gte: startOfDay(date),
                    lte: endOfDay(date),
                },
            },
            include: {
                member: true,
                memberships: {
                    select: {
                        membership: {
                            select: {
                                plan_name: true
                            }
                        }
                    }
                }
            },
            orderBy: { checked_in_at: 'asc' },
        });
    }

    private async has_active_membership(tx: Prisma.TransactionClient, member_id: string) {
        return tx.membership.findFirst({
            where: {
                is_active: true,
                member_id,
            }
        });
    }

    private async decrement_sessions_and_deactivate(tx: Prisma.TransactionClient, membership_ids: string[]) {
        for (const membership_id of membership_ids ?? []) {
            const membership = await tx.membership.findUnique({
                where: { id: membership_id }
            });
            if (membership && membership.sessions_left !== null && membership.sessions_left > 0) {
                const updated = await tx.membership.update({
                    where: { id: membership_id },
                    data: { sessions_left: { decrement: 1 } }
                });
                if (updated.sessions_left === 0) {
                    await tx.membership.update({
                        where: { id: membership_id },
                        data: { is_active: false }
                    });
                }
            }
        }
    }

    private async create_time_log(
        tx: Prisma.TransactionClient,
        params: { member_id: string; gym_id: string; recorded_by?: string }
    ) {
        return tx.memberTimeLogs.create({
            data: {
                member_id: params.member_id,
                gym_id: params.gym_id,
                checked_in_at: new Date(),
                recorded_by: params.recorded_by ?? 'system',
            },
            include: {
                member: true
            }
        });
    }

    private async link_memberships_to_log(
        tx: Prisma.TransactionClient,
        member_time_log_id: number,
        membership_ids: string[]
    ) {
        for (const membership_id of membership_ids ?? []) {
            await tx.memberTimeLogsMembership.create({
                data: {
                    member_time_log_id,
                    membership_id,
                }
            });
        }
    }

    private async create_audit(
        tx: Prisma.TransactionClient,
        input: any,
        metadata: any,
        created: any
    ) {
        await this.audit.createAuditEntry({
            gym_id: input.gym_id,
            username: metadata.current_user.username,
            table: DB_TABLE.MEMBER_TIME_LOG,
            action: 'LOG-CHECK-IN',
            reference_id: created.id.toString(),
            metadata: created,
            ip_address: metadata.ip_address,
            device_info: metadata.device_info
        }, tx as unknown as Prisma.TransactionClient);
    }

}