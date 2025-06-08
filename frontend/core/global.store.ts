import type { User } from "./user/user.types"

export const useGlobalStore = defineStore('global', {
    state: () => ({
        _user: {} as User,
    }),
    getters: {
        current_gym: (state) => {
            if (
                state._user &&
                Array.isArray(state._user.gym_users) &&
                state._user.gym_users.length > 0
            ) {
                return state._user.gym_users[0].gym
            }
            return null
        },
        gym_id(): string | null {
            return this.current_gym ? this.current_gym.id : null
        },
        user: (state) => state._user,
    },
    actions: {
        set_user(user: User) {
            this._user = user
        },
    },
})