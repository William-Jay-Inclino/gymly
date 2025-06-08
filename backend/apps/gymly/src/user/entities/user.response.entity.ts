import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "./user.entity";
import { User as U } from "apps/gymly/prisma/generated/client";

@ObjectType()
export class MutationUserResponse {

  @Field(() => Boolean)
  success: boolean;

  @Field(() => String)
  msg: string;

  @Field(() => User, { nullable: true })
  data?: U | null;
}