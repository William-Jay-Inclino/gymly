import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Optional } from '@nestjs/common';
import { PlanSubInput } from './plan.sub.input';

@InputType()
export class CreateMemberInput {

    @Field()
    @IsNotEmpty()
    firstname: string;

    @Field()
    @IsNotEmpty()
    lastname: string;

    @Field({ nullable: true })
    @Optional()
    contact_number: string | null;

    @Field(() => PlanSubInput)
    plan: PlanSubInput;

}