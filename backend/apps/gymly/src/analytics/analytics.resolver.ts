import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { AnalyticsService } from './analytics.service';
import { GymStats } from './entities/gym-stats.entity';
import { Revenue } from './entities/revenue.entity';
import { MembershipCount } from './entities/membership-count.entity';

@Resolver()
export class AnalyticsResolver {
    constructor(private readonly analyticsService: AnalyticsService) {}

    @Query(() => GymStats, { nullable: true })
    async gymStats(@Args('gym_id') gym_id: string) {
        return this.analyticsService.getGymStats({ gym_id });
    }

    @Query(() => [Revenue])
    async revenues(
        @Args('gym_id') gym_id: string,
        @Args('year', { type: () => Int, nullable: true }) year?: number,
        @Args('month', { type: () => Int, nullable: true }) month?: number,
    ) {
        const result = await this.analyticsService.getRevenue({ gym_id, year, month });
        return Array.isArray(result) ? result : result ? [result] : [];
    }

    @Query(() => [MembershipCount])
    async membershipCounts(
        @Args('gym_id') gym_id: string,
        @Args('year', { type: () => Int, nullable: true }) year?: number,
        @Args('month', { type: () => Int, nullable: true }) month?: number,
    ) {
        const result = await this.analyticsService.getMembershipCount({ gym_id, year, month });
        return Array.isArray(result) ? result : result ? [result] : [];
    }
}