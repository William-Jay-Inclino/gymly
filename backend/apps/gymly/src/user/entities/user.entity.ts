import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Role } from 'apps/gymly/prisma/generated/client';

registerEnumType(Role, {
    name: 'Role',
});

@ObjectType()
export class User {

    @Field()
    id: string;

    @Field()
    firstname: string;

    @Field({ nullable: true })
    middlename: string | null;

    @Field()
    lastname: string;

    @Field({ nullable: true })
    email: string | null;

    @Field()
    password_hash: string;

    @Field(() => Role)
    role: Role;

    @Field(() => Boolean)
    is_active: boolean;

    @Field()
    created_at: string;

}
