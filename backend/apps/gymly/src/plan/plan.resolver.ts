import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PlanService } from './plan.service';
import { Plan } from './entities/plan.entity';
import { CreatePlanInput } from './dto/create-plan.input';
import { UpdatePlanInput } from './dto/update-plan.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
@UseGuards(GqlAuthGuard)
@Resolver(() => Plan)
export class PlanResolver {
    constructor(private readonly planService: PlanService) {}

    @Query(() => [Plan])
    async plans(
        @Args('gym_id', { type: () => String }) gym_id: string
    ) {
        return this.planService.find_all(gym_id);
    }

    @Mutation(() => Plan)
    async createPlan(
        @Args('input') input: CreatePlanInput
    ) {
        return this.planService.create(input);
    }

    @Mutation(() => Plan)
    async updatePlan(
        @Args('id', { type: () => String }) id: string,
        @Args('input') input: UpdatePlanInput
    ) {
        return this.planService.update(id, input);
    }

    @Mutation(() => Plan)
    async deletePlan(
        @Args('id', { type: () => String }) id: string
    ) {
        return this.planService.delete(id);
    }
}