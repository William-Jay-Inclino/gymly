import { useToast } from "vue-toastification"

const toast = useToast()

export function showToastSuccess(message: string) {
    toast.success(message)
}

export function showToastError(message: string) {
    toast.error(message)
}