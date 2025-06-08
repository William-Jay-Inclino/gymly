import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Role } from 'apps/gymly/prisma/generated/client';
import { Gym } from '../../gym/entities/gym.entity';

registerEnumType(Role, {
    name: 'Role',
});

@ObjectType()
export class User {

    @Field()
    id: string;

    @Field()
    username: string;

    @Field()
    firstname: string;

    @Field()
    lastname: string;

    @Field()
    password_hash: string;

    @Field(() => Role)
    role: Role;

    @Field({ nullable: true })
    contact_number: string | null;

    @Field(() => Boolean)
    is_active: boolean;

    @Field()
    created_at: string;

    @Field()
    created_by: string;


    // relations
    
    @Field(() => [Gym])      
    gyms: Gym[];

}
