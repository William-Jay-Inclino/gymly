import { Field, ObjectType } from "@nestjs/graphql";
import { Member } from "./member.entity";
import { Member as M } from "apps/gymly/prisma/generated/client";

@ObjectType()
export class MutationMemberResponse {

  @Field(() => Boolean)
  success: boolean;

  @Field(() => String)
  msg: string;

  @Field(() => Member, { nullable: true })
  data?: M | null;
}