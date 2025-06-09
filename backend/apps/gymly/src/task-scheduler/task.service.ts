import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { endOfDay, startOfDay } from 'date-fns';

@Injectable()
export class TaskService {
    private readonly logger = new Logger(TaskService.name);

    constructor(private readonly prisma: PrismaService) {}

    // Runs every day at 2:00 AM
    @Cron(CronExpression.EVERY_DAY_AT_2AM)
    async deactivate_expired_memberships() {
        this.logger.log('Running daily membership deactivation task...');

        const current_date = new Date();

        // 1. Deactivate memberships where end_date is today
        const result_end_date = await this.prisma.membership.updateMany({
            where: {
                end_date: {
                    not: null,
                    gte: startOfDay(current_date),
                    lte: endOfDay(current_date),
                },
                is_active: true,
            },
            data: {
                is_active: false,
            },
        });

        // 2. Deactivate memberships where sessions_left is 0
        const result_sessions = await this.prisma.membership.updateMany({
            where: {
                sessions_left: 0,
                is_active: true,
            },
            data: {
                is_active: false,
            },
        });

        this.logger.log(
            `Deactivated memberships: by end_date=${result_end_date.count}, by sessions_left=0=${result_sessions.count}`,
        );
    }
}