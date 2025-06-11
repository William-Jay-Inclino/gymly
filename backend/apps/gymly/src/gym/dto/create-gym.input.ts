import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePlanSubInput } from './create-plan.sub.input';

@InputType()
export class CreateGymInput {

    @Field()
    @IsNotEmpty()
    owner_id: string;

    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    location: string;

    @Field(() => [CreatePlanSubInput])
    @ValidateNested({ each: true })
    @Type(() => CreatePlanSubInput)
    plans: CreatePlanSubInput[];
}