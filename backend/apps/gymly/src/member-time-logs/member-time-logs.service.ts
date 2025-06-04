import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { startOfDay, endOfDay } from 'date-fns';

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
            orderBy: { checked_in_at: 'desc' }
        });
    }

    async logCheckIn(input: { member_id: string; gym_id: string; recorded_by?: string }) {
        return this.prisma.memberTimeLogs.create({
            data: {
                member_id: input.member_id,
                gym_id: input.gym_id,
                checked_in_at: new Date(),
                recorded_by: input.recorded_by ?? 'system',
            },
        });
    }

}
