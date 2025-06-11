import axios, { type AxiosResponse } from 'axios';

  
const handleSessionExpiration = (errors: any[]): void => {
	const hasInvalidToken = errors.some((i) => i?.message?.includes('Invalid token'));

	if (hasInvalidToken) {
		delete_access_token();
		showToastError('Your session has expired. Please log in again.')
		window.location.href = '/login';
	}
};
  
  // Main sendRequest function
  export const sendRequest = async (
	queryOrMutation: string,
	variables?: Record<string, any>
  ): Promise<AxiosResponse> => {
	const config = useRuntimeConfig();
	const GRAPHQL_API_URL = config.public.graphqlApiUrl;
  
	console.log('GRAPHQL_API_URL', GRAPHQL_API_URL);
	console.log('sendRequest()', queryOrMutation);
	
	const access_token = get_access_token()
  
	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
		...(access_token && { Authorization: `Bearer ${ access_token }` }),
	};
  
	try {
		const requestData = {
			query: queryOrMutation,
			variables,
		};
	
		return await axios.post(GRAPHQL_API_URL, requestData, { headers });
	} catch (error: any) {
		const errors = error?.response?.data?.errors;
	
		if (Array.isArray(errors)) {
			handleSessionExpiration(errors); 
		}
	
		throw error;
	}
  };

