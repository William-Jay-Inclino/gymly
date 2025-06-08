import { LOCAL_STORAGE_AUTH_USER_KEY } from '~/utils/config'

export async function login(payload: { username: string; password: string; api_url: string }): Promise<{ 
    access_token: string;
}> {
    const response = await fetch(`${payload.api_url}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: payload.username,
            password: payload.password,
        }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return await response.json();
}



export function set_access_token(access_token: string) {
    localStorage.setItem(LOCAL_STORAGE_AUTH_USER_KEY, access_token)
}


export function get_access_token(): string | null {
    return localStorage.getItem(LOCAL_STORAGE_AUTH_USER_KEY) || null;
}

export function delete_access_token() {
    localStorage.removeItem(LOCAL_STORAGE_AUTH_USER_KEY)
}