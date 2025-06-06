
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
        console.log('response', response)
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
        return deepClone(response.data.data.gymStats);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function get_attendance_stats(payload: { gym_id: string }) {
    const { gym_id } = payload;
    const query = `
        query {
            attendanceStats(gym_id: "${gym_id}") {
                id
                gym_id
                average_per_day
                total_all_time
                updated_at
            }
        }
    `;
    try {
        const response = await sendRequest(query);
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
        console.log('response', response);
        return deepClone(response.data.data.membershipCounts);
    } catch (error) {
        console.error(error);
        return []
    }
}