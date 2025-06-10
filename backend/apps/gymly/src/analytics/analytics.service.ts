import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { eachDayOfInterval, endOfDay, endOfMonth, startOfDay, startOfMonth } from 'date-fns';
import { MonthlyAttendance } from './entities/monthly-attendance.entity';
import { Prisma } from 'apps/gymly/prisma/generated/client';

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

    async getAllMemberships(params: { gym_id: string, year?: number, month?: number }) {
        const { gym_id, year, month } = params;

        let dateFilter = {};
        if (year && month) {
            const start = startOfMonth(new Date(year, month - 1));
            const end = endOfMonth(start);
            dateFilter = {
                start_date: {
                    gte: start,
                    lte: end,
                },
            };
        }

        return this.prisma.membership.findMany({
            where: {
                gym_id,
                ...dateFilter,
            },
            include: {
                member: {
                    select: {
                        id: true,
                        firstname: true,
                        lastname: true,
                    },
                },
            },
            orderBy: [
                { start_date: 'desc' }
            ],
        });
    }

    async getMembershipsByDay(params: { gym_id: string, date: string }) {
        const { gym_id, date } = params;
        // date should be in 'YYYY-MM-DD' format
        const day = new Date(date);
        const start = startOfDay(day);
        const end = endOfDay(day);

        return this.prisma.membership.findMany({
            where: {
                gym_id,
                start_date: {
                    gte: start,
                    lte: end,
                },
            },
            include: {
                member: {
                    select: {
                        id: true,
                        firstname: true,
                        lastname: true,
                    },
                },
            },
            orderBy: [
                { start_date: 'desc' }
            ],
        });
    }

    async update_gym_stats(payload: {
        gym_id: string,
        amount?: Prisma.Decimal,
        increment_member?: boolean,
    }, tx: Prisma.TransactionClient) {
        const { gym_id, amount, increment_member } = payload;

        await tx.gymStats.upsert({
            where: { gym_id },
            update: {
                ...(amount && { total_revenue: { increment: amount } }),
                ...(increment_member && { total_members: { increment: 1 } }),
            },
            create: {
                gym_id,
                total_revenue: amount ?? 0,
                total_members: increment_member ? 1 : 0,
            },
        });
    }

    async update_revenue(payload: {
        gym_id: string,
        amount: Prisma.Decimal,
        year: number,
        month: number,
    }, tx: Prisma.TransactionClient) {
        const { gym_id, amount, year, month } = payload;

        await tx.revenue.upsert({
            where: {
                gym_id_year_month: {
                    gym_id,
                    year,
                    month,
                },
            },
            update: {
                amount: { increment: amount },
            },
            create: {
                gym_id,
                year,
                month,
                amount,
            },
        });
    }

    async update_membership_count(payload: {
        gym_id: string,
        year: number,
        month: number,
    }, tx: Prisma.TransactionClient) {
        const { gym_id, year, month } = payload;

        await tx.membershipCount.upsert({
            where: {
                gym_id_year_month: {
                    gym_id,
                    year,
                    month,
                },
            },
            update: {
                count: { increment: 1 },
            },
            create: {
                gym_id,
                year,
                month,
                count: 1,
            },
        });
    }
    
}