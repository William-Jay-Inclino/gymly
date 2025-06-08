import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UpdatePasswordInput } from './dto/update-password.input';
import { MutationUserResponse } from './entities/user.response.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
@UseGuards(GqlAuthGuard)
@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Mutation(() => MutationUserResponse)
    async update_password(
        @Args('input') input: UpdatePasswordInput
    ): Promise<MutationUserResponse> {
        return this.userService.updatePassword(input);
    }

    @Mutation(() => MutationUserResponse)
    async reset_password(
        @Args('user_id', { type: () => String }) user_id: string,
        @Args('password', { type: () => String }) password: string
    ): Promise<MutationUserResponse> {
        return this.userService.reset_password({ user_id, password });
    }

}