import type { GymStats } from "../gym-stats/gym-stats.entity"
import type { Membership } from "../membership/membership.types"
import type { User } from "../user/user.types"

export interface Gym {
    id: string
    owner_id: string
    name: string
    location: string
    created_at: string
    created_by: string 

    //relations 

    memberships: Membership[]
    owner: User[]
    gym_stats: GymStats
}

export interface CreateGymPlanInput {
    name: string
    description?: string | null
    price: number
    num_of_days?: number | null
    num_of_sessions?: number | null
}

export interface CreateGymInput {
    owner_id: string
    name: string
    location: string
    plans: CreateGymPlanInput[]
}


export interface UpdateGymInput {
    name: string
    location: string
}