import { differenceInCalendarDays, isBefore } from "date-fns";
import { format, toZonedTime } from "date-fns-tz";

export function getDateRange(dateString: string): { startDate: string, endDate: string } {
    const requestedDate = new Date(dateString);
    const startDate = new Date(
        requestedDate.getFullYear(),
        requestedDate.getMonth(),
        requestedDate.getDate(),
        0,
        0,
        0
    );
    const endDate = new Date(
        requestedDate.getFullYear(),
        requestedDate.getMonth(),
        requestedDate.getDate(),
        23,
        59,
        59
    );
    return {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
    };
}



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


export const computeNumberOfDays = (start_date: Date, end_date?: Date | null): number => {
    if (!end_date) {
        return 0;
    }

    if (isBefore(end_date, start_date)) {
        return 0;
    }

    return differenceInCalendarDays(end_date, start_date);
}


export const computeNumberOfDaysLeft = (start_date: Date, end_date?: Date | null): number => {
    if (!end_date) {
        return 0;
    }

    // If end_date is before start_date, return 0
    if (isBefore(end_date, start_date)) {
        return 0;
    }

    // Use date-fns to compute the difference in days from start_date to end_date
    return differenceInCalendarDays(end_date, start_date);
};