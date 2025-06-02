import { Prisma } from "apps/gymly/prisma/generated/client";
import { convertDate } from "./dates";

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