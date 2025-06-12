import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GymService } from './gym.service';
import { CreateGymInput } from './dto/create-gym.input';
import { MutationGymResponse } from './entities/gym.response.entity';
import { Logger, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '../user/entities/user.entity';
import { UserAgent } from '../auth/decorators/user-agent.decorator';
import { IpAddress } from '../auth/decorators/ip-address.decorator';
import { getDeviceInfo } from '../libs/helpers';
import { UpdateGymInput } from './dto/update-gym.input';

@UseGuards(GqlAuthGuard)
@Resolver()
export class GymResolver {

    private readonly logger = new Logger(GymResolver.name);
    private filename = 'gym.resolver.ts';

    constructor(private readonly gym_service: GymService) {}

    @Mutation(() => MutationGymResponse)
    async create_gym(
        @CurrentUser() user: User,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
        @Args('create_gym_input') create_gym_input: CreateGymInput,
    ): Promise<MutationGymResponse> {
        try {
            this.logger.log('Creating gym...', {
                username: user.username,
                filename: this.filename,
                input: create_gym_input
            });

            const result = await this.gym_service.create_gym(create_gym_input, {
                ip_address,
                device_info: getDeviceInfo(user_agent),
                current_user: user
            });

            this.logger.log(result.msg);

            return result;
        } catch (error) {
            this.logger.error('Error in creating gym', error);
            throw error;
        }
    }

    @Mutation(() => MutationGymResponse)
    async update_gym(
        @CurrentUser() user: User,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
        @Args('id') id: string,
        @Args('update_gym_input') update_gym_input: UpdateGymInput,
    ): Promise<MutationGymResponse> {
        try {
            this.logger.log('Updating gym...', {
                username: user.username,
                filename: this.filename,
                id,
                input: update_gym_input
            });

            const result = await this.gym_service.update_gym(id, update_gym_input, {
                ip_address,
                device_info: getDeviceInfo(user_agent),
                current_user: user
            });

            this.logger.log(result.msg);

            return result;
        } catch (error) {
            this.logger.error('Error in updating gym', error);
            throw error;
        }
    }

    @Mutation(() => MutationGymResponse)
    async delete_gym(
        @CurrentUser() user: User,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
        @Args('id') id: string,
    ): Promise<MutationGymResponse> {
        try {
            this.logger.log('Deleting gym...', {
                username: user.username,
                filename: this.filename,
                id
            });

            const result = await this.gym_service.delete_gym(id, {
                ip_address,
                device_info: getDeviceInfo(user_agent),
                current_user: user
            });

            this.logger.log(result.msg);

            return result;
        } catch (error) {
            this.logger.error('Error in deleting gym', error);
            throw error;
        }
    }
}