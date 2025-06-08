import { Field, ObjectType } from "@nestjs/graphql";
import { GymStaff } from "./gym-staff.entity";
import { GymStaff as G } from "apps/gymly/prisma/generated/client";

@ObjectType()
export class MutationGymStaffResponse {

  @Field(() => Boolean)
  success: boolean;

  @Field(() => String)
  msg: string;

  @Field(() => GymStaff, { nullable: true })
  data?: G | null;
}