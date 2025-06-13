<template>
    <div class="grid gap-4 sm:hidden">
        <div
            v-for="member in members"
            :key="member.id"
            class="rounded-xl border border-base-200 bg-base-100 p-4 flex flex-col gap-2 shadow transition hover:shadow-md"
        >
            <div class="flex items-center justify-between">
                <div>
                    <div class="font-semibold text-base-content text-base">
                        {{ member.firstname + ' ' + member.lastname }}
                    </div>
                    <div class="text-xs text-base-content/70">
                        {{ member.contact_number }}
                    </div>
                </div>
                <span
                    class="badge badge-xs"
                    :class="member.is_active ? 'badge-soft badge-success' : 'badge-soft badge-error'"
                >
                    {{ member.is_active ? 'Active' : 'Inactive' }}
                </span>
            </div>
            <div class="flex items-center justify-between text-xs text-base-content/70">
                <span>Created: {{ format_date(member.created_at) }}</span>
                <div class="flex gap-2">
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
            </div>
        </div>
        <div v-if="!members || members.length === 0" class="text-center text-base-content/60 py-6">
            No member found.
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