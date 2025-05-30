import { Prisma } from "generated/prisma/client";
import { format, toZonedTime } from "date-fns-tz";

export const convertDate = (date: any) => {
    try {

        const timeZone = process.env.TZ || 'Asia/Manila'; 

            if (!timeZone) {
                console.warn('Warning: TZ is not set in .env, defaulting to Asia/Manila');
            }

            const zonedDate = toZonedTime(new Date(date), timeZone);
            return format(zonedDate, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone });
        } catch (error) {
            console.error(`Error converting date: ${date}`, error);
            return date;  
        }
};

export const filterPrismaResult = (data: any): any => {
    if (Array.isArray(data)) {
        return data.map(item => filterPrismaResult(item)); 
    } else if (data !== null && typeof data === 'object') {
        if (Prisma.Decimal.isDecimal(data)) {
            return data.toString(); 
        }
        
        const convertedObject: any = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const fieldValue = data[key];
                if (fieldValue instanceof Date) {
                    convertedObject[key] = convertDate(fieldValue);
                } 
                else if (Prisma.Decimal.isDecimal(fieldValue)) {
                    convertedObject[key] = fieldValue.toString();
                }
                else if (fieldValue && typeof fieldValue === 'object') {
                    convertedObject[key] = filterPrismaResult(fieldValue);
                } else {
                    convertedObject[key] = fieldValue;
                }
            }
        }
        return convertedObject;
    } else {
        return data; // If it's not an object or array, return as is
    }
};