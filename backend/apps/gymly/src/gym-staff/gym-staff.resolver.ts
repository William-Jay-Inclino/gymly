import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GymStaffService } from './gym-staff.service';
import { GymStaff } from './entities/gym-staff.entity';
import { CreateGymStaffInput } from './dto/create-gym-staff.input';
import { UpdateGymStaffInput } from './dto/update-gym-staff.input';
import { MutationGymStaffResponse } from './entities/gym-staff.response.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => GymStaff)
export class GymStaffResolver {
    constructor(private readonly gymStaffService: GymStaffService) {}

    @Query(() => [GymStaff])
    async gym_staffs(@Args('gym_id', { type: () => String }) gym_id: string) {
        return this.gymStaffService.find_all({ gym_id });
    }

    @Mutation(() => MutationGymStaffResponse)
    async create_gym_staff(
        @Args('input') input: CreateGymStaffInput
    ): Promise<MutationGymStaffResponse> {
        return this.gymStaffService.create(input);
    }

    @Mutation(() => MutationGymStaffResponse)
    async update_gym_staff(
        @Args('input') input: UpdateGymStaffInput
    ): Promise<MutationGymStaffResponse> {
        return this.gymStaffService.update(input);
    }

    @Mutation(() => MutationGymStaffResponse)
    async delete_gym_staff(
        @Args('user_id', { type: () => String }) user_id: string
    ): Promise<MutationGymStaffResponse> {
        return this.gymStaffService.delete(user_id);
    }
}