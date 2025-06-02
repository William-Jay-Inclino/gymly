import { Module } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MembershipResolver } from './membership.resolver';

@Module({
  providers: [MembershipResolver, MembershipService],
})
export class MembershipModule {}
