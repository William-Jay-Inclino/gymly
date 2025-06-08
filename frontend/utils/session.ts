
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
    const config = useRuntimeConfig()
    const accessTokenKey = config.public.accessTokenKey
    const accessTokenKeyName = config.public.accessTokenKeyName
    const encrypted = encryptToken({ token: access_token, secret: accessTokenKey })
    localStorage.setItem(accessTokenKeyName, encrypted)
}

export function get_access_token(): string | null {
    const config = useRuntimeConfig()
    const accessTokenKey = config.public.accessTokenKey
    const accessTokenKeyName = config.public.accessTokenKeyName
    const encrypted = localStorage.getItem(accessTokenKeyName)
    if (!encrypted) return null
    return decryptToken({ ciphertext: encrypted, secret: accessTokenKey })
}

export function delete_access_token() {
    const config = useRuntimeConfig()
    const accessTokenKeyName = config.public.accessTokenKeyName
    localStorage.removeItem(accessTokenKeyName)
}


