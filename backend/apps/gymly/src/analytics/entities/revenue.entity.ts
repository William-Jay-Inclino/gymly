import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Gym } from '../../gym/entities/gym.entity';

@ObjectType()
export class Revenue {
    @Field()
    id: string;

    @Field()
    gym_id: string;

    @Field(() => Int)
    year: number;

    @Field(() => Int)
    month: number;

    @Field(() => Float)
    amount: number;

    @Field()
    created_at: Date;

    @Field(() => Gym, { nullable: true })
    gym?: Gym;
}