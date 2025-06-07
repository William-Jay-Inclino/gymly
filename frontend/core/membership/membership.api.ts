import type { Membership } from "./membership.types";

export async function get_memberships(payload: { member_id: string; only_active?: boolean }): Promise<{
    memberships: Membership[],
}> {

    const { member_id, only_active } = payload;

    const query = `
        query {
            memberships(
                member_id: "${member_id}"
                ${only_active !== undefined ? `only_active: ${only_active}` : ""}
            ) {
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

export async function add_membership(input: {
    member_id: string;
    gym_id: string;
    plan_ids: string[];
}): Promise<{
    success: boolean;
    msg: string;
    data?: Membership[];
}> {

    const planIdsString = input.plan_ids.map(id => `"${id}"`).join(', ');

    const mutation = `
        mutation {
            create_membership(
                input: {
                    member_id: "${input.member_id}"
                    gym_id: "${input.gym_id}"
                    plan_ids: [${planIdsString}]
                }
            ) {
                success
                msg 
                data {
                    id
                }
            }
        }
    `;

    try {
        const response = await sendRequest(mutation);
        console.log('response', response);
        return response.data.data.create_membership;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export async function set_is_reminded(payload: { membership_id: string, is_reminded: boolean }): Promise<{
    success: boolean;
    msg: string;
    data?: Membership[];
}> {
    
    const { membership_id, is_reminded } = payload;

    const mutation = `
        mutation {
            set_is_reminded(
                membership_id: "${membership_id}",
                is_reminded: ${is_reminded}
            ) {
                success
                msg
            }
        }
    `;
    try {
        const response = await sendRequest(mutation);
        return deepClone(response.data.data.set_is_reminded);
    } catch (error) {
        console.error(error);
        throw error;
    }
}