import type { Gym } from "../gym/gym.types";

export interface User {
    id: string;
    username: string;
    role: string;
    contact_number: string;
    is_active: boolean;
    created_at: string;
    created_by: string;

    gyms: Gym[]
    
}