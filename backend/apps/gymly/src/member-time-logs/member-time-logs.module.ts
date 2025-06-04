import { Module } from '@nestjs/common';
import { MemberTimeLogsResolver } from './member-time-logs.resolver';
import { MemberTimeLogsService } from './member-time-logs.service';

@Module({
  providers: [MemberTimeLogsResolver, MemberTimeLogsService]
})
export class MemberTimeLogsModule {}