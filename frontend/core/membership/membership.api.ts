import type { Membership } from "./membership.types";


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