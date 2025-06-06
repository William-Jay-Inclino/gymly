import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Gym } from '../../gym/entities/gym.entity';

@ObjectType()
export class AttendanceStats {
    @Field()
    id: string;

    @Field()
    gym_id: string;

    @Field(() => GraphQLJSON)
    average_per_day: any; // JSON object: { Mon: 12, Tue: 15, ... }

    @Field(() => Int)
    total_all_time: number;

    @Field()
    updated_at: Date;

    @Field(() => Gym, { nullable: true })
    gym?: Gym;
}