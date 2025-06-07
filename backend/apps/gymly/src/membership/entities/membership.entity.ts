import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Plan } from '../../plan/entities/plan.entity';
import { Member } from '../../member/entities/member.entity';
import { Gym } from '../../gym/entities/gym.entity';

@ObjectType()
export class Membership {

	@Field()
	id: string;

	@Field()
	member_id: string;

	@Field()
	gym_id: string;

	@Field()
	start_date: string;

	@Field({ nullable: true })
	end_date: string | null;

	@Field(() => Int, { nullable: true })
	sessions_left: number | null;

	@Field(() => Boolean)
	is_active: boolean;

	@Field(() => Boolean)
	is_reminded: boolean;

	@Field()
	plan_name: string;

	@Field({ nullable: true })
	plan_description: string | null;

	@Field(() => Float)
	amount_paid: number;

	@Field()
	created_at: string;

	// relations

	@Field(() => Member)
	member: Member;
	
	@Field(() => Gym, { nullable: true })
	gym: Gym | null;

}
