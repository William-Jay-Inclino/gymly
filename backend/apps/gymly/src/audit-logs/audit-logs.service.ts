import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuditLogsInput } from './dto/audit-logs.input';
import { Prisma } from 'apps/gymly/prisma/generated/client';

@Injectable()
export class AuditLogsService {
    private readonly logger = new Logger(AuditLogsService.name); 

    constructor(private readonly prisma: PrismaService) { }

    async createAuditEntry(payload: CreateAuditLogsInput, tx?: Prisma.TransactionClient): Promise<void> {
        try {
            const { gym_id, ...rest } = payload;

            const data: Prisma.AuditCreateInput = {
                ...rest,
                ...(gym_id ? { gym: { connect: { id: gym_id } } } : {})
            };

            if (tx) {
                await tx.audit.create({ data });
            } else {
                await this.prisma.audit.create({ data });
            }
        } catch (error) {
            this.logger.error('Error creating audit entry', error);
        }
    }
}