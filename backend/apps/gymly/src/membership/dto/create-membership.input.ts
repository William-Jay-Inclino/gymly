import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateMembershipInput {

    @Field()
    @IsNotEmpty()
    member_id: string;

    @Field()
    @IsNotEmpty()
    gym_id: string;

    @Field()
    @IsNotEmpty()
    plan_id: string;

}
