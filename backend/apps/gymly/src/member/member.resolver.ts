import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { CreateMemberInput } from './dto/create-member.input';
import { Member } from './entities/member.entity';
import { MutationMemberResponse } from './entities/member.response.entity';

@Resolver(() => Member)
export class MemberResolver {
    constructor(private readonly memberService: MemberService) {}

    @Query(() => [Member])
    async members() {
        return this.memberService.find_all();
    }

    @Mutation(() => MutationMemberResponse)
    async create_member(
        @Args('data') data: CreateMemberInput,
    ) {
        return this.memberService.create(data);
    }

    @ResolveField(() => Boolean)
    async is_active(@Parent() member: Member): Promise<boolean> {
        return this.memberService.is_member_active(member.id);
    }
}