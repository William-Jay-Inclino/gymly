import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GymStaffService } from './gym-staff.service';
import { GymStaff } from './entities/gym-staff.entity';
import { CreateGymStaffInput } from './dto/create-gym-staff.input';
import { UpdateGymStaffInput } from './dto/update-gym-staff.input';
import { MutationGymStaffResponse } from './entities/gym-staff.response.entity';
import { Logger, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '../user/entities/user.entity';
import { UserAgent } from '../auth/decorators/user-agent.decorator';
import { IpAddress } from '../auth/decorators/ip-address.decorator';
import { getDeviceInfo } from '../libs/helpers';

@UseGuards(GqlAuthGuard)
@Resolver(() => GymStaff)
export class GymStaffResolver {

    private readonly logger = new Logger(GymStaffResolver.name);
    private filename = 'gym-staff.resolver.ts'
    
    constructor(private readonly gymStaffService: GymStaffService) {}

    @Query(() => [GymStaff])
    async gym_staffs(@Args('gym_id', { type: () => String }) gym_id: string) {
        return this.gymStaffService.find_all({ gym_id });
    }

    @Mutation(() => MutationGymStaffResponse)
    async create_gym_staff(
        @CurrentUser() user: User,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
        @Args('input') input: CreateGymStaffInput
    ): Promise<MutationGymStaffResponse> {

        try {
            
            this.logger.log('Creating gym staff...', {
                username: user.username,
                filename: this.filename,
                input
            })

            return this.gymStaffService.create(input, {
                ip_address,
                device_info: getDeviceInfo(user_agent),
                current_user: user
            });

        } catch (error) {
            this.logger.error('Error in creating gym staff', error)
        }
    }

    @Mutation(() => MutationGymStaffResponse)
    async update_gym_staff(
        @CurrentUser() user: User,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
        @Args('input') input: UpdateGymStaffInput
    ): Promise<MutationGymStaffResponse> {

        try{

            this.logger.log('Updating gym staff...', {
                username: user.username,
                filename: this.filename,
                input
            })

            return this.gymStaffService.update(input, {
                ip_address,
                device_info: getDeviceInfo(user_agent),
                current_user: user
            });

        } catch (error) {
            this.logger.error('Error in updating gym staff', error)
        }
    }

    @Mutation(() => MutationGymStaffResponse)
    async delete_gym_staff(
        @CurrentUser() user: User,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
        @Args('user_id', { type: () => String }) user_id: string
    ): Promise<MutationGymStaffResponse> {

        try {
            
            this.logger.log('Deleting gym staff...', {
                username: user.username,
                filename: this.filename,
                user_id
            })

            return this.gymStaffService.delete(user_id, {
                current_user: user,
                ip_address,
                device_info: getDeviceInfo(user_agent)
            });
        } catch (error) {
            this.logger.error('Error in deleting gym staff', error)
        }

    }
}