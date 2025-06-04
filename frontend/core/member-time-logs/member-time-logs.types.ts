import type { Gym } from "../gym/gym.types";
import type { Member } from "../member/member.types";

export interface MemberTimeLog {
    id: string;
    member_id: string;
    gym_id: string;
    checked_in_at: string;
    recorder_by: string;

    // relations
    member: Member
    gym: Gym
}