import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { MemberTimeLogsService } from './member-time-logs.service';
import { CreateMemberTimeLogsInput } from './dto/create-member-time-logs.input';
import { MemberTimeLog } from './entities/member-time-log.entity';

@Resolver(() => MemberTimeLog)
export class MemberTimeLogsResolver {
    constructor(private readonly memberTimeLogsService: MemberTimeLogsService) {}

    @Query(() => [MemberTimeLog], { name: 'memberTimeLogs' })
    async findTimeLogs(
        @Args('gym_id', { type: () => String, nullable: true }) gym_id?: string,
        @Args('checked_in_at', { type: () => Date, nullable: true }) checked_in_at?: Date,
        @Args('member_id', { type: () => String, nullable: true }) member_id?: string,
    ) {
        return this.memberTimeLogsService.findTimeLogs({ gym_id, checked_in_at, member_id });
    }

    @Mutation(() => MemberTimeLog)
    async logCheckIn(
        @Args('input') input: CreateMemberTimeLogsInput,
    ) {
        return this.memberTimeLogsService.logCheckIn(input);
    }
}