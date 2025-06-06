import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
    constructor(private readonly prisma: PrismaService) {}

    async getGymStats(payload: { gym_id: string }) {
        return this.prisma.gymStats.findUnique({
            where: { gym_id: payload.gym_id },
        });
    }

    async getAttendanceStats(payload: { gym_id: string }) {
        return this.prisma.attendanceStats.findUnique({
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
}