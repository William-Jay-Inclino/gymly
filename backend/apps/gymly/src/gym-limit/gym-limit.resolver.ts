import { Resolver, Query, Args } from '@nestjs/graphql';
import { GymLimit } from './entities/gym-limit.entity';
import { GymLimitService } from './gym-limit.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => GymLimit)
export class GymLimitResolver {
    constructor(private readonly gymLimitService: GymLimitService) {}

    @Query(() => [GymLimit])
    async gym_limits(
        @Args('gym_id', { type: () => String }) gym_id: string
    ) {
        return this.gymLimitService.find_all(gym_id);
    }

    @Query(() => GymLimit, { nullable: true })
    async gym_limit(
        @Args('gym_id', { type: () => String }) gym_id: string,
        @Args('limit_id', { type: () => Number }) limit_id: number
    ) {
        return this.gymLimitService.get_limit({ gym_id, limit_id });
    }
}