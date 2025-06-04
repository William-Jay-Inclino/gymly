import type { Member } from "../member/member.types"
import type { Plan } from "../plan/plan.types"

export interface Membership {
    id: string
    member_id: string
    gym_id: string
    start_date: string
    end_date: string | null
    num_of_days: number
    sessions_left: number | null
    is_active: boolean
    plan_name: string
    plan_description: string
    amount_paid: number
    created_at: string
    created_by: string

    // relations 
    member: Member
}