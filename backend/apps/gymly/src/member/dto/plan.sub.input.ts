import { InputType, Field, Int } from '@nestjs/graphql';
import { ArrayNotEmpty, IsArray, ValidateNested, IsNotEmpty, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class PlanInput {
    @Field()
    @IsNotEmpty()
    plan_id: string;

    @Field()
    @IsNotEmpty()
    start_date: string;

    @Field(() => Int, { nullable: true })
    @IsOptional()
    sessions_left?: number | null;
}

@InputType()
export class PlanSubInput {

    @Field()
    @IsNotEmpty()
    gym_id: string;

    @Field(() => [PlanInput])
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => PlanInput)
    plans: PlanInput[];
}