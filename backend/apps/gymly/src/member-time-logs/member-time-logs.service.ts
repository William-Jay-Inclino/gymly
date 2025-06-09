import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { startOfDay, endOfDay, endOfMonth, eachDayOfInterval } from 'date-fns';
import { MutationMemberTimeLogResponse } from './entities/member-time-log.response.entity';

@Injectable()
export class MemberTimeLogsService {

    constructor(private readonly prisma: PrismaService) {}

    async findTimeLogs(payload: {
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
                        // Decrement sessions_left
                        const updated = await tx.membership.update({
                            where: { id: membership_id },
                            data: { sessions_left: { decrement: 1 } }
                        });

                        // If sessions_left is now 0, set is_active to false
                        if (updated.sessions_left === 0) {
                            await tx.membership.update({
                                where: { id: membership_id },
                                data: { is_active: false }
                            });
                        }
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

    async getCalendarData(year: number, month: number) {
        const firstDayOfMonth = new Date(year, month - 1, 1);
        const lastDayOfMonth = new Date(year, month, 0);

        const daysInMonth = lastDayOfMonth.getDate();
        const calendarData = Array(daysInMonth).fill(0);

        const attendanceCounts = await this.prisma.memberTimeLogs.findMany({
            where: {
                checked_in_at: {
                    gte: firstDayOfMonth,
                    lte: lastDayOfMonth,
                },
            },
            select: {
                checked_in_at: true,
            },
        });

        attendanceCounts.forEach((attendance) => {
            const day = attendance.checked_in_at.getDate();
            calendarData[day - 1]++;
        });

        return calendarData;
    }

    async getMemberLogsByMonth(payload: { 
        year: number; 
        month: number; 
        member_id: string;
        gym_id: string;
    }) {
        const { year, month, member_id, gym_id } = payload;
        // JS months are 0-based, so month-1 for start, month for end
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

}
