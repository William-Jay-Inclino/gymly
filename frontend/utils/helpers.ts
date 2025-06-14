import CryptoJS from "crypto-js";
import { format, toZonedTime } from "date-fns-tz";

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


export function getTodayInTimezone(tz: string) {
    // Returns YYYY-MM-DD in the correct timezone using date-fns-tz
    const now = new Date();
    const zonedDate = toZonedTime(now, tz);
    return format(zonedDate, 'yyyy-MM-dd', { timeZone: tz });
}