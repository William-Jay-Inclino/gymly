import { Field, ObjectType } from "@nestjs/graphql";
import { MemberTimeLog } from "./member-time-log.entity";
import { MemberTimeLogs as M } from "apps/gymly/prisma/generated/client";

@ObjectType()
export class MutationMemberTimeLogResponse {

  @Field(() => Boolean)
  success: boolean;

  @Field(() => String)
  msg: string;

  @Field(() => MemberTimeLog, { nullable: true })
  data?: M | null;
}