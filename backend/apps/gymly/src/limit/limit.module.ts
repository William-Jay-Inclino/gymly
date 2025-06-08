import { Module } from '@nestjs/common';
import { LimitResolver } from './limit.resolver';
import { LimitService } from './limit.service';

@Module({
  providers: [LimitResolver, LimitService],
})
export class LimitModule {}
