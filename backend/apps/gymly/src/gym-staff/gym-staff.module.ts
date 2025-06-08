import { Module } from '@nestjs/common';
import { GymStaffService } from './gym-staff.service';
import { GymStaffResolver } from './gym-staff.resolver';
import { UserService } from '../user/user.service';

@Module({
  providers: [GymStaffResolver, GymStaffService, UserService],
  exports: [GymStaffService],
})
export class GymStaffModule {}
