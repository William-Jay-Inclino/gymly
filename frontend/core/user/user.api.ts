
export async function update_password(input: {
    user_id: string;
    current_password: string;
    new_password: string;
}): Promise<{
    success: boolean;
    msg: string;
}> {


    const mutation = `
        mutation {
            update_password(
                input: {
                    user_id: "${input.user_id}"
                    current_password: "${input.current_password}"
                    new_password: "${input.new_password}"
                }
            ) {
                success
                msg 
            }
        }
    `;

    try {
        const response = await sendRequest(mutation);
        console.log('response', response)
        return deepClone(response.data.data.update_password);
    } catch (error) {
        console.error(error);
        return {
            success: false,
            msg: 'An error occurred while updating the password.'
        }
    }
}


export async function reset_password(input: {
    user_id: string;
    password: string;
}): Promise<{
    success: boolean;
    msg: string;
}> {
    const mutation = `
        mutation {
            reset_password(
                user_id: "${input.user_id}"
                password: "${input.password}"
            ) {
                success
                msg
            }
        }
    `;

    try {
        const response = await sendRequest(mutation);
        return deepClone(response.data.data.reset_password);
    } catch (error) {
        console.error(error);
        return {
            success: false,
            msg: 'An error occurred while resetting the password.'
        }
    }
}