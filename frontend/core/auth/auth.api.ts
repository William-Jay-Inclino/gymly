import type { User } from "../user/user.types";


export async function get_user_by_access_token(payload: {
    api_url: string, 
    access_token: string
}): Promise<User | null> {

    const { api_url, access_token } = payload

    const response = await fetch(`${api_url}/user/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        return null;
    }

    return await response.json();
}