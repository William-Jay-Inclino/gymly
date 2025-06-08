import { Module } from '@nestjs/common';
import { GymLimitResolver } from './gym-limit.resolver';
import { GymLimitService } from './gym-limit.service';

@Module({
  providers: [GymLimitResolver, GymLimitService],
})
export class GymLimitModule {}
