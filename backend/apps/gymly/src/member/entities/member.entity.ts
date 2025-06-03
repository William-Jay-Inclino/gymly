import { ObjectType, Field } from '@nestjs/graphql';
import { Membership } from '../../membership/entities/membership.entity';


@ObjectType()
export class Member {

    @Field()
    id: string;

    @Field()
    firstname: string;

    @Field({ nullable: true })
    middlename: string | null;

    @Field()
    lastname: string;

    @Field({ nullable: true })
    contact_number: string | null;

    @Field()
    created_at: string;

    @Field()
    created_by: string;

    // relationships
    @Field(() => [Membership])
    memberships: Membership[];

}
