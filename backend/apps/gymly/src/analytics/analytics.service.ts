import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { eachDayOfInterval, endOfMonth } from 'date-fns';
import { MonthlyAttendance } from './entities/monthly-attendance.entity';

@Injectable()
export class AnalyticsService {
    constructor(private readonly prisma: PrismaService) {}

    async getGymStats(payload: { gym_id: string }) {
        return this.prisma.gymStats.findUnique({
            where: { gym_id: payload.gym_id },
        });
    }

    async getRevenue(payload: { gym_id: string, year?: number, month?: number }) {
        // If year and month are provided, fetch for that period; otherwise, fetch all for the gym
        if (payload.year && payload.month) {
            return this.prisma.revenue.findUnique({
                where: {
                    gym_id_year_month: {
                        gym_id: payload.gym_id,
                        year: payload.year,
                        month: payload.month,
                    },
                },
            });
        }
        return this.prisma.revenue.findMany({
            where: { gym_id: payload.gym_id },
            orderBy: [{ year: 'desc' }, { month: 'desc' }],
        });
    }

    async getMembershipCount(payload: { gym_id: string, year?: number, month?: number }) {
        // If year and month are provided, fetch for that period; otherwise, fetch all for the gym
        if (payload.year && payload.month) {
            return this.prisma.membershipCount.findUnique({
                where: {
                    gym_id_year_month: {
                        gym_id: payload.gym_id,
                        year: payload.year,
                        month: payload.month,
                    },
                },
            });
        }
        return this.prisma.membershipCount.findMany({
            where: { gym_id: payload.gym_id },
            orderBy: [{ year: 'desc' }, { month: 'desc' }],
        });
    }

    async getMonthlyAttendanceCalendar(payload: { gym_id: string, year: number, month: number }): Promise<MonthlyAttendance[]> {
        const { gym_id, year, month } = payload;
        const start = new Date(year, month - 1, 1);
        const end = endOfMonth(start);

        // Get all logs for the month (dates are already filtered/converted by prisma middleware)
        const logs: { checked_in_at: string | Date }[] = await this.prisma.memberTimeLogs.findMany({
            where: {
                gym_id,
                checked_in_at: {
                    gte: start,
                    lte: end,
                },
            },
            select: {
                checked_in_at: true,
            },
        });

        // Count attendance per day (checked_in_at is already a string 'YYYY-MM-DDTHH:mm:ss.sssZ')
        const attendanceMap: Record<string, number> = {};
        for (const log of logs) {
            // If checked_in_at is a string, just slice; if Date, convert to string
            const day = typeof log.checked_in_at === 'string'
                ? log.checked_in_at.slice(0, 10)
                : log.checked_in_at.toISOString().slice(0, 10);
            attendanceMap[day] = (attendanceMap[day] || 0) + 1;
        }

        // Build calendar data for each day of the month
        const days = eachDayOfInterval({ start, end }).map(date => {
            const dayStr = date.toISOString().slice(0, 10);
            return {
                date: dayStr,
                count: attendanceMap[dayStr] || 0,
            };
        });

        return days;
    }
    
}