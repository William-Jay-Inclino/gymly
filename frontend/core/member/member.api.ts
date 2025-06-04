import type { Membership } from "../membership/membership.types";
import type { Plan } from "../plan/plan.types";
import type { Member } from "./member.types";

export async function init(): Promise<{
    members: Member[],
    plans: Plan[],
}> {

    const query = `
        query {
            members {
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
    plan_ids: string[];
    gym_id: string;
}): Promise<{
    success: boolean;
    msg: string;
    data?: Member;
}> {
    // Ensure contact_number are not undefined (GraphQL expects null or string)
    const contact_number = input.contact_number ? `"${ input.contact_number }"` : null;

    const planIdsString = input.plan_ids.map(id => `"${id}"`).join(', ');
    const mutation = `
        mutation {
            create_member(
                data: {
                    firstname: "${input.firstname}"
                    lastname: "${input.lastname}"
                    contact_number: ${contact_number}
                    plan: {
                        gym_id: "${input.gym_id}"
                        plan_ids: [${planIdsString}]
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

export async function get_memberships(payload: { member_id: string }): Promise<{
    memberships: Membership[],
}> {

    const { member_id } = payload;

    const query = `
        query {
            memberships(member_id: "${ member_id }") {
                id
                start_date
                end_date
                sessions_left
                is_active
                created_at
                plan_name
                plan_description
                amount_paid
                num_of_days
            }
        }
    `;

    try {
        const response = await sendRequest(query);
        console.log('response', response)
        return {
            memberships: deepClone(response.data.data.memberships),
        }
    } catch (error) {
        console.error(error);
        throw error
    }
}


