import CryptoJS from "crypto-js";

export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function encryptToken(payload: {
    token: string,
    secret: string,
}): string {

    const { token, secret } = payload;

    return CryptoJS.AES.encrypt(token, secret).toString();
}

export function decryptToken(payload: {
    ciphertext: string,
    secret: string,
}): string {

    const { ciphertext, secret } = payload;

    try {
        const bytes = CryptoJS.AES.decrypt(ciphertext, secret);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch {
        return '';
    }
}