import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMembershipInput {

  @Field()
  exampleField: number;

}
