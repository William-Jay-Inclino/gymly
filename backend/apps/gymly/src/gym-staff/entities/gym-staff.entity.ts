import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';
import { Gym } from '../../gym/entities/gym.entity';


@ObjectType()
export class GymStaff {

    @Field()
    id: string;

    @Field()
    user_id: string;

    @Field()
    gym_id: string;

    @Field()
    created_at: string;

    @Field()
    created_by: string;

    // relations
    @Field(() => User)
    user: User;

    @Field(() => Gym)
    gym: Gym;

}
