import { Field, ObjectType } from "@nestjs/graphql";
import { Membership } from "./membership.entity";
import { Membership as M } from "apps/gymly/prisma/generated/client";

@ObjectType()
export class MutationMembershipResponse {

  @Field(() => Boolean)
  success: boolean;

  @Field(() => String)
  msg: string;

  @Field(() => [Membership], { nullable: true })
  data?: M[] | null;
}