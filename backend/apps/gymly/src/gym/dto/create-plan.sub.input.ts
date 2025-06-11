import { Optional } from '@nestjs/common';
import { InputType, Field, Float, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

@InputType()
export class CreatePlanSubInput {

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