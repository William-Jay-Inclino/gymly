import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdatePasswordInput {
    @Field()
    @IsNotEmpty()
    user_id: string;

    @Field()
    @IsNotEmpty()
    current_password: string;

    @Field()
    @IsNotEmpty()
    new_password: string;
}