import { Field, ObjectType } from "@nestjs/graphql";
import { Gym } from "./gym.entity";
import { Gym as G } from "apps/gymly/prisma/generated/client";

@ObjectType()
export class MutationGymResponse {

  @Field(() => Boolean)
  success: boolean;

  @Field(() => String)
  msg: string;

  @Field(() => Gym, { nullable: true })
  data?: G | null;
}