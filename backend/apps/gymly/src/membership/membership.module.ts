import { Module } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MembershipResolver } from './membership.resolver';
import { MemberModule } from '../member/member.module'
@Module({
  imports: [MemberModule],
  providers: [MembershipResolver, MembershipService],
  exports: [MembershipService],
})
export class MembershipModule {}
