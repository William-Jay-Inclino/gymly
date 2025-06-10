<template>
    <Transition name="modal" appear>
        <div v-if="show" class="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-8 px-2 sm:px-4">
            <div class="bg-base-100 rounded-2xl shadow-2xl w-full max-w-md relative flex flex-col max-h-[90vh]">
                <button class="absolute top-2 right-2 btn btn-xs btn-circle btn-ghost" @click="close()" title="Close">✕</button>
                <div class="mb-3 font-semibold text-base sm:text-lg text-center px-4 pt-6">
                    Attendance for {{ modal_date_label }}
                </div>
                <div class="flex-1 overflow-y-auto px-4 pb-6">
                    <div v-if="attendance_loading" class="flex justify-center py-8">
                        <span class="loading loading-spinner loading-md"></span>
                    </div>
                    <div v-else>
                        <div v-if="attendance_list.length === 0" class="text-center text-base-content/60 py-4">
                            No attendance found.
                        </div>
                        <ul v-else class="divide-y divide-base-200">
                            <li
                                v-for="item in attendance_list"
                                :key="item.id"
                                class="py-3 flex flex-col gap-1"
                            >
                                <div class="flex items-center gap-2">
                                    <span class="font-medium text-base-content truncate">{{ item.member.firstname }} {{ item.member.lastname }}</span>
                                    <span class="ml-auto text-xs text-base-content/50 whitespace-nowrap">
                                        {{ format_time(item.checked_in_at) }}
                                    </span>
                                </div>
                                <div v-if="item.memberships && item.memberships.length" class="flex flex-wrap gap-1 mt-1">
                                    <span class="text-xs text-base-content/60">Activity done:</span>
                                    <span
                                        v-for="(m, idx) in item.memberships"
                                        :key="idx"
                                        class="inline-block bg-base-200 rounded px-2 py-0.5 text-xs text-primary font-semibold"
                                    >
                                        {{ m.membership.plan_name }}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { format } from "date-fns"
import { get_all_attendance_by_date } from "~/core/member-time-logs/member-time-logs.api"

// Props
const props = defineProps<{
    show: boolean
    gym_id: string
    date: string // format: YYYY-MM-DD
}>()
const emit = defineEmits(["close"])

// State
const attendance_loading = ref(false)
const attendance_list = ref<any[]>([])
const modal_date_label = computed(() =>
    props.date ? format(new Date(props.date), "MMMM d, yyyy") : ""
)

// Methods
function close() {
    emit("close")
}
function format_time(dt: string) {
    return format(new Date(dt), "hh:mm a")
}

// Watch for modal open and fetch data
watch(
    () => props.show,
    async (open) => {
        if (open && props.gym_id && props.date) {
            attendance_loading.value = true
            attendance_list.value = []
            try {
                attendance_list.value = await get_all_attendance_by_date({ date: props.date, gym_id: props.gym_id })
            } catch {
                attendance_list.value = []
            }
            attendance_loading.value = false
        }
    },
    { immediate: true }
)
</script>


<style scoped>
.modal-enter-active, .modal-leave-active {
    transition: all 0.25s ease-out;
}

.modal-enter-from, .modal-leave-to {
    opacity: 0;
}

.modal-enter-from .bg-base-100, .modal-leave-to .bg-base-100 {
    transform: translateY(-20px) scale(0.95);
}

.modal-enter-to .bg-base-100, .modal-leave-from .bg-base-100 {
    transform: translateY(0) scale(1);
    transition: transform 0.25s ease-out;
}
</style>