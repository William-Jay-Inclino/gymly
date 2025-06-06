import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Gym } from '../../gym/entities/gym.entity';

@ObjectType()
export class MembershipCount {
    @Field()
    id: string;

    @Field()
    gym_id: string;

    @Field(() => Int)
    year: number;

    @Field(() => Int)
    month: number;

    @Field(() => Int)
    count: number;

    @Field()
    created_at: string;

    @Field(() => Gym, { nullable: true })
    gym?: Gym;
}