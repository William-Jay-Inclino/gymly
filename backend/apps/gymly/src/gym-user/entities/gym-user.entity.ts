import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';
import { Gym } from '../../gym/entities/gym.entity';


@ObjectType()
export class GymUser {

    @Field()
    id: string;

    @Field()
    user_id: string;

    @Field()
    gym_id: string;


    // relations

    @Field(() => User)
    user: User;
    
    @Field(() => Gym)
    gym: Gym;

}
