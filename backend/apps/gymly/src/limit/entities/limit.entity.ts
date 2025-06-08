import { ObjectType, Field, Int, Float } from '@nestjs/graphql';


@ObjectType()
export class Limit {

    @Field()
    id: string;

    @Field()
    name: string;

    @Field(() => Int)
    value: number;

}
