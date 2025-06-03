import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class PlanSubInput {

    @Field()
    @IsNotEmpty()
    gym_id: string;

    @Field()
    @IsNotEmpty()
    plan_id: string;

}