import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { CreateMembershipSubInput } from './create-membership.sub.input';
import { Role } from 'apps/gymly/prisma/generated/client';
import { Optional } from '@nestjs/common';

@InputType()
export class CreateUserInput {

    @Field()
    @IsNotEmpty()
    firstname: string;

    @Field()
    @IsNotEmpty()
    middlename: string;

    @Field()
    @IsNotEmpty()
    lastname: string;

    @Field({ nullable: true })
    @Optional()
    email: string | null;

    @Field()
    @IsNotEmpty()
    password: string;

    @Field(() => Role)
    @IsEnum(Role)
    @IsNotEmpty()
    role: Role;

    @Field(() => CreateMembershipSubInput, { nullable: true })
    membership?: CreateMembershipSubInput;
}