import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Optional } from '@nestjs/common';

@InputType()
export class CreateGymStaffInput {

    @Field()
    @IsNotEmpty()
    gym_id: string;

    @Field()
    @IsNotEmpty()
    firstname: string;

    @Field()
    @IsNotEmpty()
    lastname: string;

    @Field()
    @IsNotEmpty()
    email: string;

    @Field()
    @IsNotEmpty()
    password: string;

    @Field({ nullable: true })
    @Optional()
    contact_number: string | null;

}