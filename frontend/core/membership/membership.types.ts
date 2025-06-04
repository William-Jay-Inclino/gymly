import type { Plan } from "../plan/plan.types"

export interface Membership {
    id: string
    member_id: string
    gym_id: string
    plan_id: string
    start_date: string
    end_date: string | null
    num_of_days: number
    sessions_left: number | null
    is_active: boolean
    is_paid: boolean
    amount_paid: number
    created_at: string
    created_by: string
    plan: Plan
}