import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Gym } from '../../gym/entities/gym.entity';
import { Limit } from '../../limit/entities/limit.entity';


@ObjectType()
export class GymLimit {

    @Field(() => Int)
    id: number;

    @Field()
    gym_id: string;

    @Field()
    limit_id: string;

    @Field(() => Int)
    value: number;

    // relations
    @Field(() => Gym)
    gym: Gym;

    @Field(() => Limit)
    limit: Limit;

}
