import type { GymUser } from "../gym-user/gym-user.entity";

export interface User {
    id: string;
    username: string;
    role: string;
    contact_number: string;
    is_active: boolean;
    created_at: string;
    created_by: string;

    gym_users: GymUser[]
    
}