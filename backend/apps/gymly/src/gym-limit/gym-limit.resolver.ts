import { Resolver, Query, Args } from '@nestjs/graphql';
import { GymLimit } from './entities/gym-limit.entity';
import { GymLimitService } from './gym-limit.service';

@Resolver(() => GymLimit)
export class GymLimitResolver {
    constructor(private readonly gymLimitService: GymLimitService) {}

    @Query(() => [GymLimit])
    async gym_limits(
        @Args('gym_id', { type: () => String }) gym_id: string
    ) {
        return this.gymLimitService.find_all(gym_id);
    }
}