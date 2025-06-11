import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
import { get_user_by_access_token } from '~/core/auth/auth.api';
import { useGlobalStore } from '~/core/global.store';


const redirect_to_login = () => {
    console.log('Redirecting to login')
    delete_access_token()
    return navigateTo('/login')
}

const get_api_url = () => {
    const config = useRuntimeConfig()
    return config.public.apiUrl
}

export default defineNuxtRouteMiddleware(async(to, from) => {

    console.log('Auth middleware triggered', { to, from });

    if(import.meta.client) {

        if (to.path === '/logout') {
            return redirect_to_login()
        }

        if(to.path === '/auth/google/callback') {
            return
        }
    
        const access_token = get_access_token()
    
        if(!access_token) {
            showToastError('Session expired, please login again')
            return redirect_to_login()
        }
        
        const user = await get_user_by_access_token({
            access_token,
            api_url: get_api_url()
        })

        console.log('User fetched from API:', user);
        
        if(!user) {
            showToastError('Session expired, please login again')
            return redirect_to_login()
        }

        const globalStore = useGlobalStore()
        globalStore.set_user(user)

    }

})  