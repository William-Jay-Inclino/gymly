import { deepClone } from "~/utils/helpers";
import { sendRequest } from "~/utils/api";
import type { CreateGymStaffInput, GymStaff, UpdateGymStaffInput } from "./gym-staff.types";
import { LIMIT, type GymLimit } from "../gym-limit/gym-limit";

// Get all gym staffs for a gym
export async function get_gym_staffs(payload: { gym_id: string }): Promise<{
    gym_staffs: GymStaff[];
    gym_limit: GymLimit | null
}> {
    const { gym_id } = payload;

    const query = `
        query {
            gym_staffs(gym_id: "${gym_id}") {
                user {
                    id
                    username
                    email
                    firstname
                    lastname
                    contact_number
                }
                
            }
            gym_limit(gym_id: "${gym_id}", limit_id: ${ LIMIT.STAFF_LIMIT }) {
                value
            }
        }
    `;

    try {
        const response = await sendRequest(query);
        console.log('get_gym_staffs response:', response);
        return {
            gym_staffs: deepClone(response.data.data.gym_staffs),
            gym_limit: deepClone(response.data.data.gym_limit)
        }
    } catch (error) {
        console.error(error);
        return {
            gym_staffs: [],
            gym_limit: null
        }
    }
}

// Create a gym staff
export async function create_gym_staff(input: CreateGymStaffInput): Promise<{
    success: boolean;
    msg: string;
    data?: GymStaff;
}> {
    const mutation = `
        mutation {
            create_gym_staff(
                input: {
                    email: "${input.email}"
                    firstname: "${input.firstname}"
                    lastname: "${input.lastname}"
                    password: "${input.password}"
                    contact_number: "${input.contact_number || ""}"
                    gym_id: "${input.gym_id}"
                }
            ) {
                success
                msg
                data {
                    user {
                        id
                        username
                        firstname
                        lastname
                        email
                        contact_number
                    }
                }
            }
        }
    `;

    try {
        const response = await sendRequest(mutation);
        return response.data.data.create_gym_staff;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Update a gym staff
export async function update_gym_staff(input: UpdateGymStaffInput): Promise<{
    success: boolean;
    msg: string;
    data?: GymStaff;
}> {
    const mutation = `
        mutation {
            update_gym_staff(
                input: {
                    user_id: "${input.user_id}"
                    email: "${input.email}"
                    firstname: "${input.firstname}"
                    lastname: "${input.lastname}"
                    contact_number: "${input.contact_number || ""}"
                }
            ) {
                success
                msg
                data {
                    user {
                        id
                        username
                        email
                        contact_number
                    }
                }
            }
        }
    `;

    try {
        const response = await sendRequest(mutation);
        return response.data.data.update_gym_staff;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Delete a gym staff
export async function delete_gym_staff(user_id: string): Promise<{
    success: boolean;
    msg: string;
}> {
    const mutation = `
        mutation {
            delete_gym_staff(user_id: "${user_id}") {
                success
                msg
            }
        }
    `;

    try {
        const response = await sendRequest(mutation);
        return response.data.data.delete_gym_staff;
    } catch (error) {
        console.error(error);
        throw error;
    }
}