import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MonthlyAttendance {
    @Field()
    date: string; // Format: 'YYYY-MM-DD'

    @Field(() => Int)
    count: number;
}