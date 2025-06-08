import { ObjectType, Field, Int, Float } from '@nestjs/graphql';


@ObjectType()
export class Limit {

    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field(() => Int)
    value: number;

}
