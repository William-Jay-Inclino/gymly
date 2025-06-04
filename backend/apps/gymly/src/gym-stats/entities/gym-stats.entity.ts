import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import { Gym } from '../../gym/entities/gym.entity';


@ObjectType()
export class GymStats {

    @Field()
    id: string;

    @Field()
    gym_id: string;

    @Field(() => Float)
    total_revenue: number;

    @Field(() => Int)
    total_members: number;

    @Field()
    updated_at: string;


    // relations

    
    @Field(() => Gym)
    gym: Gym;

}
