import { Resolver, Query } from '@nestjs/graphql';
import { PlanService } from './plan.service';
import { Plan } from './entities/plan.entity';

@Resolver(() => Plan)
export class PlanResolver {
    constructor(private readonly planService: PlanService) {}

    @Query(() => [Plan])
    async plans() {
        return this.planService.find_all();
    }
}