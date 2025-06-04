import { ObjectType, Field } from '@nestjs/graphql';
import { Membership } from '../../membership/entities/membership.entity';


@ObjectType()
export class Member {

    @Field()
    id: string;

    @Field()
    firstname: string;

    @Field()
    lastname: string;

    @Field({ nullable: true })
    contact_number: string | null;

    @Field()
    created_at: string;

    @Field()
    created_by: string;

    // relations
    @Field(() => [Membership])
    memberships: Membership[];

}
