import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { CreateMemberInput } from './dto/create-member.input';
import { Member } from './entities/member.entity';
import { MutationMemberResponse } from './entities/member.response.entity';
import { Logger, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '../user/entities/user.entity';
import { UserAgent } from '../auth/decorators/user-agent.decorator';
import { IpAddress } from '../auth/decorators/ip-address.decorator';
import { getDeviceInfo } from '../libs/helpers';
import { UpdateMemberInput } from './dto/update-member.input';
@UseGuards(GqlAuthGuard)
@Resolver(() => Member)
export class MemberResolver {

    private readonly logger = new Logger(MemberResolver.name);
    private filename = 'member.resolver.ts'

    constructor(private readonly memberService: MemberService) {}

    @Query(() => [Member])
    async members(
        @Args('gym_id', { type: () => String }) gym_id: string,
    ) {
        return this.memberService.find_all({ gym_id });
    }

    @Mutation(() => MutationMemberResponse)
    async create_member(
        @CurrentUser() user: User,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
        @Args('data') data: CreateMemberInput,
    ) {

        try{

            this.logger.log('Creating member...', {
                username: user.username,
                filename: this.filename,
                input: data
            });

            const x = await this.memberService.create(data, {
                ip_address,
                device_info: getDeviceInfo(user_agent),
                current_user: user
            });

            this.logger.log(x.msg);

            return x

        } catch(error) {
            this.logger.error('Error in creating member', error)
        }

    }

    @Mutation(() => MutationMemberResponse)
    async update_member(
        @CurrentUser() user: User,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
        @Args('id', { type: () => String }) id: string,
        @Args('data') data: UpdateMemberInput,
    ) {
        try {
            this.logger.log('Updating member...', {
                username: user.username,
                filename: this.filename,
                id,
                input: data
            });

            const result = await this.memberService.update(id, data, {
                ip_address,
                device_info: getDeviceInfo(user_agent),
                current_user: user
            });

            this.logger.log(result.msg);

            return result;

        } catch (error) {
            this.logger.error('Error in updating member', error)
        }
    }

    @ResolveField(() => Boolean)
    async is_active(@Parent() member: Member): Promise<boolean> {
        return this.memberService.is_member_active(member.id);
    }
}