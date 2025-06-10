import { Module } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MembershipResolver } from './membership.resolver';
import { AnalyticsModule } from '../analytics/analytics.module';
@Module({
  imports: [AnalyticsModule],
  providers: [MembershipResolver, MembershipService],
  exports: [MembershipService],
})
export class MembershipModule {}
