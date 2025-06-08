import Swal from 'sweetalert2'

export async function showDeleteConfirm(title: string, text: string, confirmButtonText = "Yes, delete it!") {
    const result = await Swal.fire({
        title,
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#e74a3b",
        cancelButtonColor: "#6c757d",
        confirmButtonText,
        reverseButtons: true,
        position: "top",
    })
    return !!result.isConfirmed
}