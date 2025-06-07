import { useToast } from "vue-toastification"

const toast = useToast()

export function showToastSuccess(message: string) {
    toast.info(message)
}

export function showToastError(message: string) {
    toast.error(message)
}