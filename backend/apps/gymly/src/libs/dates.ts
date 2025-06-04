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

    // Calculate the difference in milliseconds
    const diffInMs = end_date.getTime() - start_date.getTime();

    // Convert milliseconds to days
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
}