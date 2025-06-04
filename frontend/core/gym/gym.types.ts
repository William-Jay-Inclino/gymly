import type { GymStats } from "../gym-stats/gym-stats.entity"
import type { GymUser } from "../gym-user/gym-user.entity"
import type { Membership } from "../membership/membership.types"

export interface Gym {
    id: string
    name: string
    location: string
    created_at: string
    created_by: string 

    //relations 

    memberships: Membership[]
    gym_users: GymUser[]
    gym_stats: GymStats
}