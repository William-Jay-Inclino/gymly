import type { Gym } from "./gym/gym.types"
import { UserRole, type User } from "./user/user.types"

export const useGlobalStore = defineStore('global', {
    state: () => ({
        _user: {} as User,
        _current_gym: null as Gym | null,
    }),
    getters: {
        current_gym: (state) => {
            // If user is gym staff, use the gym from gym_staff relation
            if (state._user.role === UserRole.GYM_STAFF && state._user.gym_staff) {
                return state._user.gym_staff.gym
            }
            // Otherwise, use the first gym in gyms array
            return state._current_gym
        },
        gym_id(): string | null {
            return this.current_gym ? this.current_gym.id : null
        },
        user: (state) => state._user,
    },
    actions: {
        set_user(user: User) {
            this._user = user
            // If gym staff, set current gym from gym_staff relation
            if (user.role === 'GYM_STAFF' && user.gym_staff) {
                this._current_gym = user.gym_staff.gym
            } else {
                this._current_gym = user.gym
            }
        },
    },
})