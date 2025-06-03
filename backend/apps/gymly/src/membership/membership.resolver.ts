import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { MembershipService } from './membership.service';
import { Membership } from './entities/membership.entity';
import { CreateMembershipInput } from './dto/create-membership.input';

@Resolver(() => Membership)
export class MembershipResolver {
    constructor(private readonly membershipService: MembershipService) {}

    @Mutation(() => Membership)
    async create_membership(
        @Args('input') input: CreateMembershipInput
    ) {
        return this.membershipService.create_membership({ input });
    }

    @Query(() => [Membership])
    async memberships(
        @Args('member_id') member_id: string
    ) {
        return this.membershipService.get_memberships({ member_id });
    }
}