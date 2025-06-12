import type { Gym } from "../gym/gym.types"
import type { User } from "../user/user.types"

export interface GymStaff {
    id: string
    user_id: string
    gym_id: string
    
    // relations
    user: User
    gym: Gym
}

export interface CreateGymStaffInput {
    gym_id: string
    email: string
    firstname: string
    lastname: string
    password: string
    contact_number?: string | null
}

export interface UpdateGymStaffInput {
    user_id: string
    email: string
    firstname: string
    lastname: string
    contact_number?: string | null
}

