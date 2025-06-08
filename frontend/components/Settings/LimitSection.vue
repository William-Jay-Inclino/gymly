<template>
    <section class="bg-white rounded-xl shadow p-6 space-y-4">
        <div class="flex items-center gap-2 mb-2">
            <BarChart3 class="w-5 h-5 text-primary" />
            <h2 class="font-semibold text-base-content">Limits</h2>
        </div>
        <ul class="divide-y divide-base-200 text-sm">
            <li class="py-2 flex items-center justify-between">
                <span class="flex items-center gap-2">
                    <Users class="w-4 h-4 text-primary" /> Members
                </span>
                <span class="badge badge-outline">
                    {{ getLimitValue(LIMIT.MEMBER_LIMIT) ?? '—' }}
                </span>
            </li>
            <li class="py-2 flex items-center justify-between">
                <span class="flex items-center gap-2">
                    <List class="w-4 h-4 text-primary" /> Plans
                </span>
                <span class="badge badge-outline">
                    {{ getLimitValue(LIMIT.PLAN_LIMIT) ?? '—' }}
                </span>
            </li>
            <li class="py-2 flex items-center justify-between">
                <span class="flex items-center gap-2">
                    <UserCog class="w-4 h-4 text-primary" /> Staffs
                </span>
                <span class="badge badge-outline">
                    {{ getLimitValue(LIMIT.STAFF_LIMIT) ?? '—' }}
                </span>
            </li>
            <li class="py-2 flex items-center justify-between">
                <span class="flex items-center gap-2">
                    <FileClock class="w-4 h-4 text-primary" /> System Logs
                </span>
                <span class="badge badge-outline">
                    {{ getLimitValue(LIMIT.SYSTEM_LOGS_LIMIT) ?? '—' }}
                    <template v-if="getLimitValue(LIMIT.SYSTEM_LOGS_LIMIT)">month</template>
                </span>
            </li>
            <li class="py-2 flex items-center justify-between">
                <span class="flex items-center gap-2">
                    <Users2 class="w-4 h-4 text-primary" /> Memberships per Member
                </span>
                <span class="badge badge-outline">
                    {{ getLimitValue(LIMIT.MEMBERSHIP_PER_MEMBER_LIMIT) ?? '—' }}
                </span>
            </li>
        </ul>
        <div class="mt-3 text-xs text-base-content/60 italic flex items-center gap-2">
            <AlertCircle class="w-4 h-4 text-warning" />
            If you want to increase your limit, please contact system admin.
        </div>
    </section>
</template>

<script setup lang="ts">
import { BarChart3, Users, List, UserCog, FileClock, Users2, AlertCircle } from 'lucide-vue-next'
import { useGlobalStore } from '~/core/global.store'
import { get_gym_limits } from '~/core/gym-limit/gym-limit.api'
import type { GymLimit } from '~/core/gym-limit/gym-limit'
import { LIMIT } from '~/core/gym-limit/gym-limit'

const { gym_id } = useGlobalStore()
const is_loading_limits = ref(false)
const gym_limits = ref<GymLimit[]>([])

function getLimitValue(limit_id: number) {
    console.log('getLimitValue', limit_id);
    console.log('gym_limits', gym_limits.value);
    const found = gym_limits.value.find(l => l.limit.id === limit_id)
    return found ? found.value : null
}

onMounted(async () => {
    if (!gym_id) return
    is_loading_limits.value = true
    const _gym_limits = await get_gym_limits({ gym_id })
    gym_limits.value = _gym_limits
    is_loading_limits.value = false
})
</script>