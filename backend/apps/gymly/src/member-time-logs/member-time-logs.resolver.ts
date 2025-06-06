import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { MemberTimeLogsService } from './member-time-logs.service';
import { CreateMemberTimeLogsInput } from './dto/create-member-time-logs.input';
import { MemberTimeLog } from './entities/member-time-log.entity';
import { MutationMemberTimeLogResponse } from './entities/member-time-log.response.entity';

@Resolver(() => MemberTimeLog)
export class MemberTimeLogsResolver {
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
        @Args('input') input: CreateMemberTimeLogsInput,
    ) {
        return this.memberTimeLogsService.logCheckIn(input);
    }

    @Query(() => Int)
    async total_checked_in_today(
        @Args('gym_id', { type: () => String }) gym_id: string
    ): Promise<number> {
        return this.memberTimeLogsService.getTotalCheckedInToday(gym_id);
    }
    
}