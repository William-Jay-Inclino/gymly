import { Injectable } from '@nestjs/common';
import { CreateMembershipInput } from './dto/create-membership.input';

@Injectable()
export class MembershipService {
  create(createMembershipInput: CreateMembershipInput) {
    return 'This action adds a new membership';
  }

  findAll() {
    return `This action returns all membership`;
  }

  findOne(id: number) {
    return `This action returns a #${id} membership`;
  }

  remove(id: number) {
    return `This action removes a #${id} membership`;
  }
}
