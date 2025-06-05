import type { Member } from "../member/member.types";
import type { MemberTimeLog } from "./member-time-logs.types";

export async function log_time(input: {
    member_id: string;
    gym_id: string;
    membership_ids: string[];
}): Promise<{
    success: boolean;
    msg: string;
    data?: MemberTimeLog;
}> {

    const mutation = `
        mutation {
            log_checkin(
                input: {
                    member_id: "${input.member_id}"
                    gym_id: "${input.gym_id}"
                    membership_ids: [${input.membership_ids.map(id => `"${id}"`).join(",")}]
                }
            ) {
                success
                msg 
                data {
                    id
                    member {
                        id
                        firstname
                        lastname
                    }
                    checked_in_at
                }
            }
        }
    `;

    try {
        const response = await sendRequest(mutation);
        console.log('response', response)
        return response.data.data.log_checkin;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export async function init(payload: { gym_id?: string, date?: string, member_id?: string }): Promise<{
    check_ins: MemberTimeLog[],
    members: Member[]
}> {
    const { gym_id, date, member_id } = payload;

    const query = `
        query {
            member_time_logs(
                ${gym_id ? `gym_id: "${gym_id}",` : ""}
                ${date ? `date: "${date}",` : ""}
                ${member_id ? `member_id: "${member_id}",` : ""}
            ) {
                id
                checked_in_at
                member {
                    id
                    firstname
                    lastname
                }
            }
            members(gym_id: "${ gym_id }") {
                id
                firstname
                lastname
            }
        }
    `;

    try {
        const response = await sendRequest(query);
        return {
            check_ins: deepClone(response.data.data.member_time_logs),
            members: deepClone(response.data.data.members),
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}