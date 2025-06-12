import type { Gym, CreateGymInput, UpdateGymInput } from "./gym.types"

// Create a gym (with plans)
export async function create_gym(input: CreateGymInput): Promise<{
    success: boolean;
    msg: string;
    data?: Gym;
}> {
    // Build plans input for GraphQL
    const plansGql = input.plans
        .map(
            (plan) => `{
                name: "${plan.name}"
                description: ${plan.description ? `"${plan.description}"` : null}
                price: ${plan.price}
                num_of_days: ${plan.num_of_days ?? null}
                num_of_sessions: ${plan.num_of_sessions ?? null}
            }`
        )
        .join(',');

    const mutation = `
        mutation {
            create_gym(
                create_gym_input: {
                    owner_id: "${input.owner_id}"
                    name: "${input.name}"
                    location: "${input.location}"
                    plans: [${plansGql}]
                }
            ) {
                success
                msg
                data {
                    id
                    name
                    location
                    owner_id
                    created_at
                    created_by
                }
            }
        }
    `;
    try {
        const response = await sendRequest(mutation);
        return response.data.data.create_gym;
    } catch (error) {
        console.error(error);
        return {
            success: false,
            msg: 'Failed to create gym',
        }
    }
}

// Update a gym
export async function update_gym(input: { id: string } & UpdateGymInput): Promise<{
    success: boolean;
    msg: string;
    data?: Gym;
}> {
    const mutation = `
        mutation {
            update_gym(
                id: "${input.id}",
                update_gym_input: {
                    name: "${input.name}"
                    location: "${input.location}"
                }
            ) {
                success
                msg
                data {
                    id
                    name
                    location
                }
            }
        }
    `;
    try {
        const response = await sendRequest(mutation);
        return deepClone(response.data.data.update_gym);
    } catch (error) {
        console.error(error);
        return {
            success: false,
            msg: 'Failed to update gym',
        }
    }
}

// Delete a gym
export async function delete_gym(input: { id: string }): Promise<{
    success: boolean;
    msg: string;
}> {
    const mutation = `
        mutation {
            delete_gym(id: "${input.id}") {
                success
                msg
            }
        }
    `;
    try {
        const response = await sendRequest(mutation);
        return response.data.data.delete_gym;
    } catch (error) {
        console.error(error);
        return {
            success: false,
            msg: 'Failed to delete gym',
        }
    }
}