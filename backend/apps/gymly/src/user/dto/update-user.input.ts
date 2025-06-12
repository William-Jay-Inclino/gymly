import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {

    @Field()
    @IsNotEmpty()
    @IsString()
    email: string | null;

    @Field()
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    lastname: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    contact_number?: string | null;

}