import type { Gym } from "../gym/gym.types";

export interface GymStats {
    id: string;
    gym_id: string;
    total_revenue: number;
    total_members: number;
    updated_at: string;

    gym: Gym
}