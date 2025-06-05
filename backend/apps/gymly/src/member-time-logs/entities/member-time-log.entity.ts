import { ObjectType, Field } from '@nestjs/graphql';
import { Membership } from '../../membership/entities/membership.entity';
import { Member } from '../../member/entities/member.entity';
import { Gym } from '../../gym/entities/gym.entity';


@ObjectType()
export class MemberTimeLog {

    @Field()
    id: string;

    @Field()
    member_id: string;

    @Field()
    gym_id: string;

    @Field()
    checked_in_at: string;

    @Field()
    recorder_by: string;

    // relations 
    
    @Field(() => Member)
    member: Member;

    @Field(() => Gym)
    gym: Gym;

}
