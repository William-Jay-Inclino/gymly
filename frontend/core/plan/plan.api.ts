import { LIMIT, type GymLimit } from '../gym-limit/gym-limit';
import type { Gym } from '../gym/gym.types';
import type { Plan, CreatePlanInput, UpdatePlanInput } from './plan.types'

export async function get_plans(payload: {
    gym_id: string;
}): Promise<{
    plans: Plan[];
    gym_limit: GymLimit | null;    
}> {

    const { gym_id } = payload;

    const query = `
        query {
            plans(gym_id: "${gym_id}") {
                id
                gym_id
                name
                description
                price
                num_of_days
                num_of_sessions
                created_at
                created_by
            }
            gym_limit(gym_id: "${gym_id}", limit_id: ${ LIMIT.PLAN_LIMIT }) {
                value
            }
        }
    `;
    try {
        const response = await sendRequest(query);
        return {
            plans: deepClone(response.data.data.plans),
            gym_limit: deepClone(response.data.data.gym_limit)  
        }
    } catch (error) {
        console.error(error);
        return {
            plans: [],
            gym_limit: null
        }
    }
}

export async function create_plan(input: CreatePlanInput): Promise<Plan> {
    const description = input.description ? `"${input.description}"` : null;
    const num_of_days = input.num_of_days !== undefined && input.num_of_days !== null ? input.num_of_days : null;
    const num_of_sessions = input.num_of_sessions !== undefined && input.num_of_sessions !== null ? input.num_of_sessions : null;

    const mutation = `
        mutation {
            createPlan(
                input: {
                    gym_id: "${input.gym_id}"
                    name: "${input.name}"
                    description: ${description}
                    price: ${input.price}
                    num_of_days: ${num_of_days}
                    num_of_sessions: ${num_of_sessions}
                }
            ) {
                id
                gym_id
                name
                description
                price
                num_of_days
                num_of_sessions
                created_at
                created_by
            }
        }
    `;
    try {
        const response = await sendRequest(mutation);
        return deepClone(response.data.data.createPlan);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function update_plan(id: string, input: UpdatePlanInput): Promise<Plan> {
    const description = input.description ? `"${input.description}"` : null;
    const num_of_days = input.num_of_days !== undefined && input.num_of_days !== null ? input.num_of_days : null;
    const num_of_sessions = input.num_of_sessions !== undefined && input.num_of_sessions !== null ? input.num_of_sessions : null;

    const mutation = `
        mutation {
            updatePlan(
                id: "${id}"
                input: {
                    name: "${input.name}"
                    description: ${description}
                    price: ${input.price}
                    num_of_days: ${num_of_days}
                    num_of_sessions: ${num_of_sessions}
                }
            ) {
                id
                gym_id
                name
                description
                price
                num_of_days
                num_of_sessions
                created_at
                created_by
            }
        }
    `;
    try {
        const response = await sendRequest(mutation);
        return deepClone(response.data.data.updatePlan);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function delete_plan(id: string): Promise<Plan> {
    const mutation = `
        mutation {
            deletePlan(id: "${id}") {
                id
                gym_id
                name
                description
                price
                num_of_days
                num_of_sessions
                created_at
                created_by
            }
        }
    `;
    try {
        const response = await sendRequest(mutation);
        return deepClone(response.data.data.deletePlan);
    } catch (error) {
        console.error(error);
        throw error;
    }
}