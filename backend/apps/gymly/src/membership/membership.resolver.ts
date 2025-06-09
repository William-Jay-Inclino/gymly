import { Resolver, Mutation, Args, Query, ResolveField, Int, Parent } from '@nestjs/graphql';
import { MembershipService } from './membership.service';
import { Membership } from './entities/membership.entity';
import { CreateMembershipInput } from './dto/create-membership.input';
import { computeNumberOfDays, computeNumberOfDaysLeft } from '../libs/dates';
import { MutationMembershipResponse } from './entities/membership.response.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => Membership)
export class MembershipResolver {
    constructor(private readonly membershipService: MembershipService) {}

    @Mutation(() => MutationMembershipResponse)
    async create_membership(
        @Args('input') input: CreateMembershipInput
    ) {
        console.log('create_membership');
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

    @ResolveField(() => Int)
    async days_left(@Parent() membership: Membership): Promise<number> {
        return computeNumberOfDaysLeft(new Date(membership.start_date), new Date(membership.end_date));
    }

    @Query(() => Int)
    async total_active_memberships(
        @Args('gym_id') gym_id: string
    ): Promise<number> {
        return this.membershipService.get_total_active_memberships(gym_id);
    }

    @Query(() => [Membership])
    async get_upcoming_membership_expirations(
        @Args('gym_id') gym_id: string
    ) {
        return this.membershipService.get_upcoming_membership_expirations(gym_id);
    }

    @Mutation(() => MutationMembershipResponse)
    async set_is_reminded(
        @Args('membership_id') membership_id: string,
        @Args('is_reminded', { type: () => Boolean }) is_reminded: boolean
    ) {
        return this.membershipService.set_is_reminded(membership_id, is_reminded);
    }

}