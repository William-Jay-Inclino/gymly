import { ObjectType, Field, Int, Float } from '@nestjs/graphql';


@ObjectType()
export class Plan {

    @Field()
    id: string;

    @Field()
    gym_id: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    description: string | null;

    @Field(() => Float)
    price: string;

    @Field(() => Int, { nullable: true })
    num_of_days: number | null;

    @Field(() => Int, { nullable: true })
    num_of_sessions: number | null;

    @Field()
    created_at: string;

    @Field()
    created_by: string;

}
