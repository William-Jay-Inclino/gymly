import { Module, Global } from '@nestjs/common';
import { AuditLogsService } from './audit-logs.service';

@Global()
@Module({
    providers: [AuditLogsService],
    exports: [AuditLogsService], 
})
export class AuditLogsModule {}