import { InputType, Field } from '@nestjs/graphql';
import { ArrayNotEmpty, IsArray, IsNotEmpty } from 'class-validator';

@InputType()
export class PlanSubInput {

    @Field()
    @IsNotEmpty()
    gym_id: string;

    @Field(() => [String])
    @IsArray()
    @ArrayNotEmpty()
    plan_ids: string[];

}