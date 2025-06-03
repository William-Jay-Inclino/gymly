import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { CreateMemberInput } from './dto/create-member.input';
import { Member } from './entities/member.entity';

@Resolver('Member')
export class MemberResolver {
    constructor(private readonly memberService: MemberService) {}

    @Query(() => [Member], { name: 'members' })
    async getMembers() {
        return this.memberService.findAll();
    }

    @Mutation(() => Member)
    async createMember(
        @Args('data') data: CreateMemberInput,
    ) {
        return this.memberService.create(data);
    }
}