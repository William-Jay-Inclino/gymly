import type { Gym } from "./gym/gym.types"
import type { User } from "./user/user.types"

export const useGlobalStore = defineStore('global', {
    state: () => ({
        _user: {} as User,
        _current_gym: null as Gym | null,
    }),
    getters: {
        current_gym: (state) => state._current_gym,
        gym_id(): string | null {
            return this.current_gym ? this.current_gym.id : null
        },
        user: (state) => state._user,
    },
    actions: {
        set_user(user: User) {
            this._user = user
            this._current_gym = user.gyms.length > 0 ? user.gyms[0] : null
        },
    },
})