import { Resolver, Query } from '@nestjs/graphql';
import { Limit } from './entities/limit.entity';
import { LimitService } from './limit.service';

@Resolver(() => Limit)
export class LimitResolver {
    constructor(private readonly limitService: LimitService) {}

    @Query(() => [Limit])
    async limits() {
        return this.limitService.find_all();
    }
}