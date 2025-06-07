import type { Membership } from "../membership/membership.types";

export async function init(payload: { gym_id: string }): Promise<{
    total_memberships_today: number,
    total_active_memberships: number,
    total_checked_in_today: number,
}> {

    const { gym_id } = payload;

    const query = `
        query {
            total_memberships_today(gym_id: "${gym_id}")
            total_active_memberships(gym_id: "${gym_id}")
            total_checked_in_today(gym_id: "${gym_id}")
        }
    `;

    try {
        const response = await sendRequest(query);
        console.log('init', response)
        return {
            total_memberships_today: response.data.data.total_memberships_today,
            total_active_memberships: response.data.data.total_active_memberships,
            total_checked_in_today: response.data.data.total_checked_in_today,
        }
    } catch (error) {
        console.error(error);
        throw error
    }
}

export async function get_gym_stats(payload: { gym_id: string }): Promise<{
    total_revenue: number;
    total_members: number;
}> {
    const { gym_id } = payload;
    const query = `
        query {
            gymStats(gym_id: "${gym_id}") {
                id
                gym_id
                total_revenue
                total_members
                updated_at
            }
        }
    `;
    try {
        const response = await sendRequest(query);
        console.log('get_gym_stats', response);
        return deepClone(response.data.data.gymStats);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function get_attendance_stats(payload: { gym_id: string }): Promise<{ 
    average_per_day: { Mon?: number; Tue?: number; Wed?: number; Thu?: number; Fri?: number; Sat?: number; Sun?: number }, 
    total_all_time: number 
}> {
    const { gym_id } = payload;
    const query = `
        query {
            attendanceStats(gym_id: "${gym_id}") {
                average_per_day
                total_all_time
            }
        }
    `;
    try {
        const response = await sendRequest(query);
        console.log('get_attendance_stats', response);
        return deepClone(response.data.data.attendanceStats);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function get_revenues(payload: { gym_id: string, year?: number, month?: number }): Promise<{ year: number; month: number; amount: number }[]> {
    const { gym_id, year, month } = payload;
    const yearPart = year !== undefined ? `, year: ${year}` : '';
    const monthPart = month !== undefined ? `, month: ${month}` : '';
    const query = `
        query {
            revenues(gym_id: "${gym_id}"${yearPart}${monthPart}) {
                id
                gym_id
                year
                month
                amount
                created_at
            }
        }
    `;
    try {
        const response = await sendRequest(query);
        console.log('get_revenues', response);
        return deepClone(response.data.data.revenues);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function get_membership_counts(payload: { gym_id: string, year?: number, month?: number }): Promise<{ year: number; month: number; count: number }[]> {
    const { gym_id, year, month } = payload;
    const yearPart = year !== undefined ? `, year: ${year}` : '';
    const monthPart = month !== undefined ? `, month: ${month}` : '';
    const query = `
        query {
            membershipCounts(gym_id: "${gym_id}"${yearPart}${monthPart}) {
                id
                gym_id
                year
                month
                count
                created_at
            }
        }
    `;
    try {
        const response = await sendRequest(query);
        console.log('get_membership_counts', response);
        return deepClone(response.data.data.membershipCounts);
    } catch (error) {
        console.error(error);
        return []
    }
}


export async function get_monthly_attendance_calendar(payload: { gym_id: string, year: number, month: number }): Promise<{ date: string; count: number }[]> {
    const { gym_id, year, month } = payload;
    const query = `
        query {
            monthly_attendance_calendar(gym_id: "${gym_id}", year: ${year}, month: ${month}) {
                date
                count
            }
        }
    `;
    try {
        const response = await sendRequest(query);
        console.log('get_monthly_attendance_calendar', response);
        return deepClone(response.data.data.monthly_attendance_calendar);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function get_all_memberships(payload: { gym_id: string, year?: number, month?: number }) {
    const { gym_id, year, month } = payload;
    const yearPart = year !== undefined ? `, year: ${year}` : '';
    const monthPart = month !== undefined ? `, month: ${month}` : '';
    const query = `
        query {
            all_memberships(gym_id: "${gym_id}"${yearPart}${monthPart}) {
                start_date
                amount_paid
                plan_name
                member {
                    firstname
                    lastname
                }
                created_at
            }
        }
    `;
    try {
        const response = await sendRequest(query);
        console.log('get_all_memberships', response);
        return deepClone(response.data.data.all_memberships);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function get_memberships_by_day(payload: { gym_id: string, date: string }) {
    const { gym_id, date } = payload;
    const query = `
        query {
            memberships_by_day(gym_id: "${gym_id}", date: "${date}") {
                start_date
                amount_paid
                plan_name
                member {
                    firstname
                    lastname
                }
                created_at
            }
        }
    `;
    try {
        const response = await sendRequest(query);
        console.log('get_memberships_by_day', response);
        return deepClone(response.data.data.memberships_by_day);
    } catch (error) {
        console.error(error);
        throw error;
    }
}



export async function get_upcoming_membership_expirations(payload: { gym_id: string }): Promise<Membership[]> {
    const { gym_id } = payload;
    const query = `
        query {
            get_upcoming_membership_expirations(gym_id: "${gym_id}") {
                id
                plan_name
                days_left
                sessions_left
                is_reminded
                member {
                    contact_number
                    id
                    firstname
                    lastname
                }
            }
        }
    `;
    try {
        const response = await sendRequest(query);
        console.log('get_upcoming_membership_expirations', response);
        return deepClone(response.data.data.get_upcoming_membership_expirations);
    } catch (error) {
        console.error(error);
        return []
    }
}