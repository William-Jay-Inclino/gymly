import { InputType, Field, Int } from '@nestjs/graphql';
import { ArrayNotEmpty, IsArray, IsNotEmpty, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class PlanMembershipInput {
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
export class CreateMembershipInput {

    @Field()
    @IsNotEmpty()
    member_id: string;

    @Field()
    @IsNotEmpty()
    gym_id: string;

    @Field(() => [PlanMembershipInput])
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => PlanMembershipInput)
    plans: PlanMembershipInput[];
}