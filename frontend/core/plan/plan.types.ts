export interface Plan {
    id: string;
    gym_id: string;
    name: string;
    description: string | null;
    price: number;
    num_of_days: number | null;
    num_of_sessions: number | null;
    created_at: string;
    created_by: string;
}