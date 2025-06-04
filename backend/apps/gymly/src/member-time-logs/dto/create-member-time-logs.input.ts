import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateMemberTimeLogsInput {

    @Field()
    @IsNotEmpty()
    member_id: string;

    @Field()
    @IsNotEmpty()
    gym_id: string;

}