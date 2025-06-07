<template>
    <div class="relative w-full" ref="root">
        <input
            v-model="search"
            type="text"
            class="input input-bordered w-full pr-10"
            :placeholder="placeholder"
            @focus="openDropdown"
            @input="openDropdown"
            @keydown.down.prevent="move(1)"
            @keydown.up.prevent="move(-1)"
            @keydown.enter.prevent="selectByIndex"
        />
        <button
            v-if="modelValue"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/60 hover:text-error"
            @click="clear"
            tabindex="-1"
            type="button"
        >
            &times;
        </button>
        <div
            v-show="open"
            class="absolute z-30 mt-1 w-full bg-base-100 border border-base-200 rounded-lg shadow-lg max-h-60 overflow-auto"
        >
            <ul>
                <li
                    v-for="(option, idx) in filteredOptions"
                    :key="option.value"
                    @mousedown.prevent="select(option)"
                    :class="[
                        'px-4 py-2 cursor-pointer transition',
                        idx === highlighted ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white',
                        option.value === modelValue ? 'font-semibold' : ''
                    ]"
                    @mouseenter="highlighted = idx"
                >
                    {{ option.label }}
                </li>
                <li v-if="filteredOptions.length === 0" class="px-4 py-2 text-base-content/60">
                    No results found.
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue"

const props = defineProps<{
    options: { label: string; value: string }[]
    modelValue: string | null
    placeholder?: string
}>()

const emit = defineEmits(["update:modelValue"])

const search = ref("")
const open = ref(false)
const highlighted = ref(-1)
const root = ref<HTMLElement | null>(null)

// Only show up to 10 filtered options
const filteredOptions = computed(() =>
    props.options
        .filter(option =>
            option.label.toLowerCase().includes(search.value.toLowerCase())
        )
        .slice(0, 10)
)

function openDropdown() {
    open.value = true
    highlighted.value = filteredOptions.value.length > 0 ? 0 : -1
}

function select(option: { label: string; value: string }) {
    emit("update:modelValue", option.value)
    search.value = option.label
    setTimeout(() => {
        open.value = false
    }, 0)
}

function selectByIndex() {
    if (highlighted.value >= 0 && highlighted.value < filteredOptions.value.length) {
        select(filteredOptions.value[highlighted.value])
    }
}

function clear() {
    emit("update:modelValue", null)
    search.value = ""
    open.value = false
}

function move(dir: number) {
    if (!open.value) openDropdown()
    if (filteredOptions.value.length === 0) return
    highlighted.value = (highlighted.value + dir + filteredOptions.value.length) % filteredOptions.value.length
}

function handleClickOutside(e: MouseEvent) {
    if (!root.value?.contains(e.target as Node)) {
        open.value = false
    }
}

onMounted(() => {
    document.addEventListener("mousedown", handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener("mousedown", handleClickOutside)
})

watch(
    () => props.modelValue,
    (val) => {
        if (!val) search.value = ""
        else {
            const found = props.options.find(opt => opt.value === val)
            if (found) search.value = found.label
        }
    },
    { immediate: true }
)

watch(search, (val, oldVal) => {
    // Only open dropdown if user is typing (not when cleared programmatically)
    if (document.activeElement === root.value?.querySelector('input')) {
        open.value = true
        highlighted.value = filteredOptions.value.length > 0 ? 0 : -1
    }
})
</script>

<style scoped>
/* Optional: smooth dropdown animation */
[ v-cloak ] { display: none; }
</style>