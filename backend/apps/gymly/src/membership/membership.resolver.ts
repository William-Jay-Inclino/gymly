import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MembershipService } from './membership.service';
import { Membership } from './entities/membership.entity';
import { CreateMembershipInput } from './dto/create-membership.input';

@Resolver(() => Membership)
export class MembershipResolver {
  constructor(private readonly membershipService: MembershipService) {}

  @Mutation(() => Membership)
  createMembership(@Args('createMembershipInput') createMembershipInput: CreateMembershipInput) {
    return this.membershipService.create(createMembershipInput);
  }

  @Query(() => [Membership], { name: 'membership' })
  findAll() {
    return this.membershipService.findAll();
  }

  @Query(() => Membership, { name: 'membership' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.membershipService.findOne(id);
  }

  @Mutation(() => Membership)
  removeMembership(@Args('id', { type: () => Int }) id: number) {
    return this.membershipService.remove(id);
  }
}
