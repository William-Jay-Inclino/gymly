import type { Membership } from "../membership/membership.types"

export interface Member {
    id: string
    firstname: string
    middlename: string | null
    lastname: string
    contact_number: string | null
    created_at: string
    created_by: string
    is_active: boolean
    

    // relationships
    memberships: Membership[]
}