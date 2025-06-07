import type { Plan } from "../plan/plan.types";
import type { Member } from "./member.types";

export async function init(payload: { gym_id: string }): Promise<{
    members: Member[],
    plans: Plan[],
}> {

    const { gym_id } = payload;

    const query = `
        query {
            members(gym_id: "${ gym_id }") {
                id
                firstname
                lastname
                contact_number
                created_at
                created_by
                is_active
            }
            plans {
                id
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
        const response = await sendRequest(query);
        console.log('response', response)
        return {
            members: deepClone(response.data.data.members),
            plans: deepClone(response.data.data.plans),
        }
    } catch (error) {
        console.error(error);
        throw error
    }
}

export async function create_member(input: {
    firstname: string;
    lastname: string;
    contact_number?: string | null;
    plans: { plan_id: string; start_date: string; sessions_left?: number }[];
    gym_id: string;
}): Promise<{
    success: boolean;
    msg: string;
    data?: Member;
}> {
    const contact_number = input.contact_number ? `"${input.contact_number}"` : null;

    // Build plans array for GraphQL, including sessions_left if present
    const plansString = input.plans
        .map(
            (p) =>
                `{ plan_id: "${p.plan_id}", start_date: "${p.start_date}"${p.sessions_left !== undefined ? `, sessions_left: ${p.sessions_left}` : ''} }`
        )
        .join(", ");

    const mutation = `
        mutation {
            create_member(
                data: {
                    firstname: "${input.firstname}"
                    lastname: "${input.lastname}"
                    contact_number: ${contact_number}
                    plan: {
                        gym_id: "${input.gym_id}"
                        plans: [${plansString}]
                    }
                }
            ) {
                success
                msg 
                data {
                    id
                    firstname
                    lastname
                    contact_number
                    is_active
                    created_at
                    created_by
                }
            }
        }
    `;

    try {
        const response = await sendRequest(mutation);
        console.log('response', response)
        return response.data.data.create_member;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function get_members(payload: { gym_id: string }): Promise<Member[]> {

    const { gym_id } = payload;

    const query = `
        query {
            members(gym_id: "${ gym_id }") {
                id
                firstname
                lastname
            }
        }
    `;

    try {
        const response = await sendRequest(query);
        console.log('response', response)
        return deepClone(response.data.data.members)
    } catch (error) {
        console.error(error);
        throw error
    }
}