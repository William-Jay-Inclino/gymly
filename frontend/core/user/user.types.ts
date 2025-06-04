export interface User {
    id: string;
    firstname: string;
    middlename?: string;
    lastname: string;
    email: string;
    role: string;
    is_active: boolean;
    created_at: string;
}