import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Role } from 'apps/gymly/prisma/generated/client';
import { GymUser } from '../../gym-user/entities/gym-user.entity';

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
    
    @Field(() => [GymUser])      
    gym_users: GymUser[];

}
