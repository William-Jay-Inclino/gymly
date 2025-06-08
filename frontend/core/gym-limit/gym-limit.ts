import type { Gym } from "../gym/gym.types"

export enum LIMIT {
    MEMBER_LIMIT = 1,
    PLAN_LIMIT = 2,
    STAFF_LIMIT = 3,
    SYSTEM_LOGS_LIMIT = 4,
    MEMBERSHIP_PER_MEMBER_LIMIT = 5,
}

export interface Limit {
    id: number
    name: string
    value: number
}

export interface GymLimit {
    id: number
    gym_id: string
    limit_id: number
    value: number

    // relations
    gym: Gym
    limit: Limit
}