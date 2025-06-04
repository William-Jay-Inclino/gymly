import { defineStore } from 'pinia'
import type { Plan } from './plan.types'

export const usePlanStore = defineStore('plan', {
    state: () => ({
        _plans: [] as Plan[],
    }),
    getters: {
        plans: (state) => state._plans,
    },
    actions: {
        set_plans(plans: Plan[]) {
            this._plans = plans
        },
    },
})