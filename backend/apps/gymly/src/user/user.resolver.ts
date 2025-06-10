import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UpdatePasswordInput } from './dto/update-password.input';
import { MutationUserResponse } from './entities/user.response.entity';
import { Logger, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { IpAddress } from '../auth/decorators/ip-address.decorator';
import { UserAgent } from '../auth/decorators/user-agent.decorator';
import { getDeviceInfo } from '../libs/helpers';
@UseGuards(GqlAuthGuard)
@Resolver(() => User)
export class UserResolver {

    private readonly logger = new Logger(UserResolver.name);
    private filename = 'user.resolver.ts'

    constructor(private readonly userService: UserService) {}

    @Mutation(() => MutationUserResponse)
    async update_password(
        @CurrentUser() user: User,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
        @Args('input') input: UpdatePasswordInput
    ): Promise<MutationUserResponse> {

        try {

            this.logger.log('Updating password...', {
                username: user.username,
                filename: this.filename,
                input
            });

            const x = await this.userService.updatePassword(input, {
                ip_address,
                device_info: getDeviceInfo(user_agent),
                current_user: user,
            });

            this.logger.log(x.msg)

            return x

        } catch (error) {
            this.logger.error('Error in updating password', error);
        }

    }

    @Mutation(() => MutationUserResponse)
    async reset_password(
        @CurrentUser() user: User,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
        @Args('user_id', { type: () => String }) user_id: string,
        @Args('password', { type: () => String }) password: string
    ): Promise<MutationUserResponse> {

        try {
            
            this.logger.log('Resetting password...', {
                username: user.username,
                filename: this.filename,
                user_id,
                password
            });

            const x = await this.userService.reset_password({ user_id, password }, {
                ip_address,
                device_info: getDeviceInfo(user_agent),
                current_user: user,
            });

            this.logger.log(x.msg);

            return x;

        } catch (error) {
            this.logger.error('Error in resetting password', error);
        }

    }

}