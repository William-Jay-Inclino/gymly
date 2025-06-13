<template>
    <div class="rounded-lg shadow bg-base-100">
        <div class="overflow-x-auto">
            <div class="overflow-y-auto max-h-[60vh]">
                <table class="table table-zebra w-full text-xs sm:text-sm">
                    <thead class="sticky top-0 bg-base-100 z-10">
                        <tr>
                            <th class="font-semibold py-3">Member</th>
                            <th class="font-semibold py-3">Contact</th>
                            <th class="font-semibold py-3">Status</th>
                            <th class="font-semibold py-3">Created</th>
                            <th class="font-semibold py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="member in members" :key="member.id">
                            <td class="py-2 whitespace-nowrap">{{ member.firstname + ' ' + member.lastname }}</td>
                            <td class="py-2 whitespace-nowrap">{{ member.contact_number }}</td>
                            <td class="py-2">
                                <span
                                    class="badge badge-xs"
                                    :class="member.is_active ? 'badge-soft badge-success' : 'badge-soft badge-error'"
                                >
                                    {{ member.is_active ? 'Active' : 'Inactive' }}
                                </span>
                            </td>
                            <td class="py-2">
                                <span class="text-xs text-base-content/70">
                                    {{ format_date(member.created_at) }}
                                </span>
                            </td>
                            <td class="py-2">
                                <div class="flex gap-2 justify-center">
                                    <button
                                        class="btn btn-xs btn-circle btn-ghost tooltip z-20"
                                        data-tip="View Plans"
                                        @click="$emit('view-plans', member)"
                                    >
                                        <BookCopy class="w-5 h-5 text-info" />
                                    </button>
                                    <button
                                        class="btn btn-xs btn-circle btn-ghost tooltip z-20"
                                        data-tip="View Attendance"
                                        @click="$emit('view-attendance', member)"
                                    >
                                        <CalendarCheck class="w-5 h-5 text-accent" />
                                    </button>
                                    <button
                                        class="btn btn-xs btn-circle btn-ghost tooltip z-20"
                                        data-tip="Add Plan"
                                        @click="$emit('add-plan', member)"
                                    >
                                        <PlusSquare class="w-5 h-5 text-primary" />
                                    </button>
                                    <button
                                        class="btn btn-xs btn-circle btn-ghost tooltip z-20"
                                        data-tip="Edit Member"
                                        @click="$emit('edit-member', member)"
                                    >
                                        <Edit class="w-5 h-5 text-warning" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="!members || members.length === 0">
                            <td colspan="5" class="text-center text-base-content/60 py-6">
                                No member found.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { BookCopy, CalendarCheck, PlusSquare, Edit } from 'lucide-vue-next'
import type { Member } from '~/core/member/member.types'

defineProps<{
    members: Member[]
}>()

const format_date = (date_str: string) => {
    const date = new Date(date_str)
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}
</script>