import { ObjectType, Field } from '@nestjs/graphql';

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

	@Field()
	end_date: string;

	@Field(() => Boolean)
	is_active: boolean;

	@Field(() => Boolean)
	is_paid: boolean;

	@Field()
	created_at: string;
	

}
