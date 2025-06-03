import type { Member } from "./member.types";

export async function init(): Promise<{
    members: Member[]
}> {


    const query = `
        query {
            members {
                id
                firstname
            }
        }
    `;

    try {
        const response = await sendRequest(query);
        console.log('response', response)
        return response.data.data.members;
    } catch (error) {
        console.error(error);
        throw error
    }
}