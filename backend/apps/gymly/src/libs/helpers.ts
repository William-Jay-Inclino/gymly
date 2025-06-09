import * as DeviceDetector from 'device-detector-js';

export function normalizeIp(ip: string): string {
    try {
        if (ip.startsWith('::ffff:')) {
            // Remove IPv4-mapped IPv6 prefix (::ffff:) if present
            return ip.substring(7);
        }
        return ip;
    } catch (error) {
        console.error('Error normalizing IP:', error);
        return ip;  // If normalization fails, return the original IP
    }
}


export function getDeviceInfo(userAgent: any) {
    const deviceDetector = new DeviceDetector();
    const device = deviceDetector.parse(userAgent);
    
    return {
        browser: device.client?.name || 'Unknown Browser',
        browserVersion: device.client?.version || 'Unknown Version',
        os: device.os?.name || 'Unknown OS',
        osVersion: device.os?.version || 'N/A',  
        device: device.device?.type || 'Unknown Device',
        deviceModel: device.device?.model || 'Unknown',  
    };
}