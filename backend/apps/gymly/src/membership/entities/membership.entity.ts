import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Membership {

	@Field()
	id: string;

	@Field()
	member_id: string;

	@Field()
	gym_id: string;

	@Field()
	plan_id: string;

	@Field()
	start_date: string;

	@Field({ nullable: true })
	end_date: string | null;

	@Field(() => Int, { nullable: true })
	sessions_left: number | null;

	@Field(() => Boolean)
	is_active: boolean;

	@Field(() => Boolean)
	is_paid: boolean;

	@Field()
	created_at: string;
	

}
