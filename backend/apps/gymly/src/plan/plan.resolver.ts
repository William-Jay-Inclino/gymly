import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PlanService } from './plan.service';
import { Plan } from './entities/plan.entity';
import { CreatePlanInput } from './dto/create-plan.input';
import { UpdatePlanInput } from './dto/update-plan.input';
import { Logger, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '../user/entities/user.entity';
import { IpAddress } from '../auth/decorators/ip-address.decorator';
import { UserAgent } from '../auth/decorators/user-agent.decorator';
import { getDeviceInfo } from '../libs/helpers';
@UseGuards(GqlAuthGuard)
@Resolver(() => Plan)
export class PlanResolver {

    private readonly logger = new Logger(PlanResolver.name);
    private filename = 'plan.resolver.ts'

    constructor(private readonly planService: PlanService) {}

    @Query(() => [Plan])
    async plans(
        @Args('gym_id', { type: () => String }) gym_id: string
    ) {
        return this.planService.find_all(gym_id);
    }

    @Mutation(() => Plan)
    async createPlan(
        @CurrentUser() user: User,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
        @Args('input') input: CreatePlanInput
    ) {

        try {
            
            this.logger.log('Creating plan...', {
                username: user.username,
                filename: this.filename,
                input
            });

            return this.planService.create(input, {
                ip_address,
                device_info: getDeviceInfo(user_agent),
                current_user: user
            });
        } catch (error) {
            this.logger.error('Error in creating plan', error);
        }

    }

    @Mutation(() => Plan)
    async updatePlan(
        @CurrentUser() user: User,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
        @Args('id', { type: () => String }) id: string,
        @Args('input') input: UpdatePlanInput
    ) {

        try {
        
            this.logger.log('Updating plan...', {
                username: user.username,
                filename: this.filename,
                id,
                input
            });

            return this.planService.update(id, input, {
                ip_address,
                device_info: getDeviceInfo(user_agent),
                current_user: user
            });
        } catch (error) {
            this.logger.error('Error in updating plan', error);
        }

    }

    @Mutation(() => Plan)
    async deletePlan(
        @CurrentUser() user: User,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
        @Args('id', { type: () => String }) id: string
    ) {

        try {

            this.logger.log('Deleting plan...', {
                username: user.username,
                filename: this.filename,
                id
            });

            return this.planService.delete(id, {
                ip_address,
                device_info: getDeviceInfo(user_agent),
                current_user: user
            });
        } catch (error) {
            this.logger.error('Error in deleting plan', error);
        }

    }
}