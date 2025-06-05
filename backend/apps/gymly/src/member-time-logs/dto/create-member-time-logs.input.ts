import { InputType, Field } from '@nestjs/graphql';
import { ArrayNotEmpty, IsArray, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateMemberTimeLogsInput {

    @Field()
    @IsNotEmpty()
    member_id: string;

    @Field()
    @IsNotEmpty()
    gym_id: string;

    @Field(() => [String])
    @IsArray()
    @ArrayNotEmpty()
    membership_ids: string[];

}