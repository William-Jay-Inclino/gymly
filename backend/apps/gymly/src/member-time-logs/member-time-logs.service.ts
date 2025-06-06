import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { startOfDay, endOfDay, format } from 'date-fns';
import { MutationMemberTimeLogResponse } from './entities/member-time-log.response.entity';
import { Prisma } from 'apps/gymly/prisma/generated/client';

@Injectable()
export class MemberTimeLogsService {

    constructor(private readonly prisma: PrismaService) {}

    async findTimeLogs(params: {
        gym_id?: string | null,
        checked_in_at?: Date | null,
        member_id?: string | null
    }) {
        const { gym_id, checked_in_at, member_id } = params;

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

    async logCheckIn(input: { 
        member_id: string; 
        gym_id: string;
        membership_ids: string[]; 
        recorded_by?: string 
    }): Promise<MutationMemberTimeLogResponse> {

        const { member_id, gym_id, membership_ids, recorded_by } = input

        return await this.prisma.$transaction(async(tx) => {
            try {
                const has_active_membership = await tx.membership.findFirst({
                    where: {
                        is_active: true,
                        member_id,
                    }
                })

                if(!has_active_membership) {
                    return {
                        success: false,
                        msg: 'Member has no active membership'
                    }
                }

                // Decrement sessions_left for each membership_id if sessions_left is not null and > 0
                for (const membership_id of membership_ids ?? []) {
                    const membership = await tx.membership.findUnique({
                        where: { id: membership_id }
                    });
                    if (membership && membership.sessions_left !== null && membership.sessions_left > 0) {
                        await tx.membership.update({
                            where: { id: membership_id },
                            data: { sessions_left: { decrement: 1 } }
                        });
                    }
                }

                const created = await tx.memberTimeLogs.create({
                    data: {
                        member_id,
                        gym_id,
                        checked_in_at: new Date(),
                        recorded_by: recorded_by ?? 'system',
                    },
                    include: {
                        member: true
                    }
                });

                // Call updateAttendanceStats here
                await this.updateAttendanceStats(gym_id, tx as Prisma.TransactionClient);

                return {
                    success: true,
                    msg: 'Successfully logged time',
                    data: created
                }

            } catch (error) {
                throw error
            }
        })
    }

    async updateAttendanceStats(gym_id: string, tx: Prisma.TransactionClient) {
        // Get current day of week (e.g., 'Mon', 'Tue', ...)
        const dayOfWeek = format(new Date(), 'EEE'); // 'Mon', 'Tue', etc.

        // Fetch current stats or create if not exists
        const stats = await tx.attendanceStats.upsert({
            where: { gym_id },
            update: {},
            create: {
                gym_id,
                average_per_day: {},
                total_all_time: 0,
            },
        });

        // Prepare new average_per_day object
        const avgPerDay = { ...(stats.average_per_day as Record<string, number> ?? {}) };
        avgPerDay[dayOfWeek] = (avgPerDay[dayOfWeek] ?? 0) + 1;

        // Update stats
        await tx.attendanceStats.update({
            where: { gym_id },
            data: {
                total_all_time: { increment: 1 },
                average_per_day: avgPerDay,
            },
        });
    }

    async getTotalCheckedInToday(gym_id: string): Promise<number> {
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

}
