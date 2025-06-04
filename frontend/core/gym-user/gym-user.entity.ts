import type { Gym } from "../gym/gym.types";
import type { User } from "../user/user.types";

export interface GymUser {
    id: string;
    user_id: string;
    gym_id: string;

    gym: Gym
    user: User
}