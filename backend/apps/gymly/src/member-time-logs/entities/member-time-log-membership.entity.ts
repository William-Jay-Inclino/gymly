import { ObjectType, Field } from '@nestjs/graphql';
import { Membership } from '../../membership/entities/membership.entity';
import { MemberTimeLog } from './member-time-log.entity';


@ObjectType()
export class MemberTimeLogMembership {

    @Field()
    id: string;

    @Field()
    member_time_log_id: string;

    @Field()
    membership_id: string;

    // relations 
    
    @Field(() => MemberTimeLog)
    member_time_log: MemberTimeLog;

    @Field(() => Membership)
    membership: Membership;

}
