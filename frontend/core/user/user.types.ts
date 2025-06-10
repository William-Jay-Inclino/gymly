import type { GymStaff } from "../gym-staff/gym-staff.types";
import type { Gym } from "../gym/gym.types";

export enum UserRole {
    ADMIN = "ADMIN",
    GYM_OWNER = "GYM_OWNER",
    GYM_STAFF = "GYM_STAFF",
}
export interface User {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    role: UserRole;
    contact_number: string;
    is_active: boolean;
    created_at: string;
    created_by: string;

    gym: Gym
    gym_staff: GymStaff
    
}