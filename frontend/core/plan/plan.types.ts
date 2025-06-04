export interface Plan {
    id: string;
    name: string;
    description: string | null;
    price: number;
    num_of_days: number | null;
    num_of_sessions: number | null;
    is_active: boolean;
    is_default: boolean;
    created_at: string;
    created_by: string;
}