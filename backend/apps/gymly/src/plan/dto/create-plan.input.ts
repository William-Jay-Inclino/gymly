import { InputType, Field, Float, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString, IsNumber, Min } from 'class-validator'; // <-- add IsNumber, Min
import { Optional } from '@nestjs/common';

@InputType()
export class CreatePlanInput {

    @Field()
    @IsNotEmpty()
    @IsString()
    gym_id: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    name: string;

    @Field({ nullable: true })
    @Optional()
    @IsString()
    description: string | null;

    @Field(() => Float)
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    price: number;

    @Field(() => Int, { nullable: true })
    @Optional()
    @IsInt()
    num_of_days: number | null;

    @Field(() => Int, { nullable: true })
    @Optional()
    @IsInt()
    num_of_sessions: number | null;

}