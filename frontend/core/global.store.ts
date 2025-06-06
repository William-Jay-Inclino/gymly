

export const useGlobalStore = defineStore('global', {
    state: () => ({
        _gym_id: "4a496131-1129-45ac-914f-6f734d408365",
    }),
    getters: {
        gym_id: (state) => state._gym_id,
    },
    actions: {
        set_gym_id(gym_id: string) {
            this._gym_id = gym_id
        },
    },
})