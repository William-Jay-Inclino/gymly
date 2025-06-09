import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { MemberTimeLogsService } from './member-time-logs.service';
import { CreateMemberTimeLogsInput } from './dto/create-member-time-logs.input';
import { MemberTimeLog } from './entities/member-time-log.entity';
import { MutationMemberTimeLogResponse } from './entities/member-time-log.response.entity';
import { Logger, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '../user/entities/user.entity';
import { IpAddress } from '../auth/decorators/ip-address.decorator';
import { UserAgent } from '../auth/decorators/user-agent.decorator';
import { getDeviceInfo } from '../libs/helpers';

@UseGuards(GqlAuthGuard)
@Resolver(() => MemberTimeLog)
export class MemberTimeLogsResolver {

    private readonly logger = new Logger(MemberTimeLogsResolver.name);
    private filename = 'member-time-logs.resolver.ts'

    constructor(private readonly memberTimeLogsService: MemberTimeLogsService) {}

    @Query(() => [MemberTimeLog])
    async member_time_logs(
        @Args('gym_id', { type: () => String, nullable: true }) gym_id?: string,
        @Args('date', { type: () => String, nullable: true }) date?: string,
        @Args('member_id', { type: () => String, nullable: true }) member_id?: string,
    ) {
        return this.memberTimeLogsService.findTimeLogs({ gym_id, checked_in_at: new Date(date), member_id });
    }

    @Mutation(() => MutationMemberTimeLogResponse)
    async log_checkin(
        @CurrentUser() user: User,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
        @Args('input') input: CreateMemberTimeLogsInput,
    ) {

        try {
            
            this.logger.log('Logging member check-in...', {
                username: user.username,
                filename: this.filename,
                input
            });

            return this.memberTimeLogsService.logCheckIn(input, {
                ip_address,
                device_info: getDeviceInfo(user_agent),
                current_user: user
            });
        } catch (error) {
            this.logger.error('Error in logging member check-in', error);
        }

    }

    @Query(() => Int)
    async total_checked_in_today(
        @Args('gym_id', { type: () => String }) gym_id: string
    ): Promise<number> {
        return this.memberTimeLogsService.getTotalCheckedInToday(gym_id);
    }

    @Query(() => [MemberTimeLog])
    async member_time_logs_by_month(
        @Args('year', { type: () => Number }) year: number,
        @Args('month', { type: () => Number }) month: number,
        @Args('member_id', { type: () => String }) member_id: string,
        @Args('gym_id', { type: () => String }) gym_id: string,
    ) {
        return this.memberTimeLogsService.getMemberLogsByMonth({ year, month, member_id, gym_id });
    }
    
}