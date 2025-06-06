import { Resolver, Mutation, Args, Query, ResolveField, Int, Parent } from '@nestjs/graphql';
import { MembershipService } from './membership.service';
import { Membership } from './entities/membership.entity';
import { CreateMembershipInput } from './dto/create-membership.input';
import { computeNumberOfDays } from '../libs/dates';
import { MutationMembershipResponse } from './entities/membership.response.entity';

@Resolver(() => Membership)
export class MembershipResolver {
    constructor(private readonly membershipService: MembershipService) {}

    @Mutation(() => MutationMembershipResponse)
    async create_membership(
        @Args('input') input: CreateMembershipInput
    ) {
        return this.membershipService.create_membership({ input });
    }

    @Query(() => [Membership])
    async memberships(
        @Args('member_id') member_id: string,
        @Args('only_active', { type: () => Boolean, nullable: true }) only_active?: boolean
    ) {
        return this.membershipService.get_memberships({ member_id, only_active });
    }

    @Query(() => Int)
    async total_memberships_today(
        @Args('gym_id') gym_id: string
    ): Promise<number> {
        return this.membershipService.get_total_memberships_today(gym_id);
    }

    @ResolveField(() => Int)
    async num_of_days(@Parent() membership: Membership): Promise<number> {
        return computeNumberOfDays(new Date(membership.start_date), new Date(membership.end_date));
    }

    @Query(() => Int)
    async total_active_memberships(
        @Args('gym_id') gym_id: string
    ): Promise<number> {
        return this.membershipService.get_total_active_memberships(gym_id);
    }

}