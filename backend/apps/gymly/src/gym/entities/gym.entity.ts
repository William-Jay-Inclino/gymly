import { ObjectType, Field } from '@nestjs/graphql';
import { Membership } from '../../membership/entities/membership.entity';
import { GymStats } from '../../analytics/entities/gym-stats.entity';
import { User } from '../../user/entities/user.entity';


@ObjectType()
export class Gym {

    @Field()
    id: string;

    @Field()
    owner_id: string;

    @Field()
    name: string;

    @Field()
    location: string;

    @Field()
    created_at: string;

    @Field()
    created_by: string;


    // relations

    @Field(() => User)      
    owner: User;

    @Field(() => [Membership])      
    memberships: Membership[];

    @Field(() => GymStats)      
    gym_stats: GymStats;

}
