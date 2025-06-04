import { ObjectType, Field } from '@nestjs/graphql';
import { Membership } from '../../membership/entities/membership.entity';
import { GymUser } from '../../gym-user/entities/gym-user.entity';
import { GymStats } from '../../gym-stats/entities/gym-stats.entity';


@ObjectType()
export class Gym {

    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    location: string;

    @Field()
    created_at: string;

    @Field()
    created_by: string;


    // relations

    @Field(() => [Membership])      
    memberships: Membership[];

    @Field(() => [GymUser])      
    gym_users: GymUser[];

    @Field(() => GymStats)      
    gym_stats: GymStats;

}
