import type { GymLimit } from "./gym-limit";

export async function get_gym_limits(payload: { gym_id: string }): Promise<GymLimit[]> {
    const { gym_id } = payload;

    const query = `
        query {
            gym_limits(gym_id: "${gym_id}") {
                id
                value 
                limit {
                    id
                    name
                }
            }
        }
    `;

    try {
        const response = await sendRequest(query);
        console.log('get_gym_limits response:', response);
        return deepClone(response.data.data.gym_limits);
    } catch (error) {
        console.error(error);
        throw error;
    }
}