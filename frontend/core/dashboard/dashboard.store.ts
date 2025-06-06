
type ExpirationStatus = "Expiring Soon" | "Expired Today"

interface UpcomingExpiration {
    id: number
    memberName: string
    contactNumber: string
    endDate: string
    sessionsLeft: number | null
    status: ExpirationStatus
    planName?: string
    is_reminded: boolean 
}

export const useDashboardStore = () => {
    // Stats
    const stats = ref({
        totalMembers: 320,
        activeMemberships: 180,
        totalRevenue: 152000,
        dailyMemberships: 4,
        monthlyMemberships: 38,
    })

    const upcomingExpirations = ref<UpcomingExpiration[]>([
        {
            id: 1,
            memberName: "Jane Cruz",
            contactNumber: "09171234567",
            endDate: "2025-06-10",
            sessionsLeft: 3,
            status: "Expiring Soon",
            is_reminded: true,
            planName: "Gold",
        },
        {
            id: 2,
            memberName: "Mark Reyes",
            contactNumber: "09179876543",
            endDate: "2025-06-12",
            sessionsLeft: 0,
            status: "Expired Today",
            is_reminded: false,
            planName: "Silver"
        },
        {
            id: 3,
            memberName: "Anna Lim",
            contactNumber: "09175551234",
            endDate: "2025-06-13",
            sessionsLeft: 1,
            status: "Expiring Soon",
            is_reminded: false,
            planName: "Bronze"
        },
        {
            id: 4,
            memberName: "Paul Santos",
            contactNumber: "09179998888",
            endDate: "2025-06-15",
            sessionsLeft: null,
            status: "Expiring Soon",
            is_reminded: false,
            planName: "Gold"
        },
        {
            id: 4,
            memberName: "Jay Inclino",
            contactNumber: "09179998888",
            endDate: "2025-06-15",
            sessionsLeft: null,
            status: "Expiring Soon",
            is_reminded: false,
            planName: "Gold"
        },
        {
            id: 4,
            memberName: "Jay Inclino",
            contactNumber: "09179998888",
            endDate: "2025-06-15",
            sessionsLeft: null,
            status: "Expiring Soon",
            is_reminded: false,
            planName: "Gold"
        },
        {
            id: 4,
            memberName: "Jay Inclino",
            contactNumber: "09179998888",
            endDate: "2025-06-15",
            sessionsLeft: null,
            status: "Expiring Soon",
            is_reminded: false,
            planName: "Gold"
        },
    ])

    const revenueData = ref([
        // 2025
        { year: 2025, month: "Jan", revenue: 12000 },
        { year: 2025, month: "Feb", revenue: 13500 },
        { year: 2025, month: "Mar", revenue: 14200 },
        { year: 2025, month: "Apr", revenue: 15800 },
        { year: 2025, month: "May", revenue: 17000 },
        { year: 2025, month: "Jun", revenue: 18500 },
        { year: 2025, month: "Jul", revenue: 19000 },
        { year: 2025, month: "Aug", revenue: 20000 },
        { year: 2025, month: "Sep", revenue: 21000 },
        { year: 2025, month: "Oct", revenue: 22000 },
        { year: 2025, month: "Nov", revenue: 23000 },
        { year: 2025, month: "Dec", revenue: 24000 },
        // 2024
        { year: 2024, month: "Jan", revenue: 10000 },
        { year: 2024, month: "Feb", revenue: 11000 },
        { year: 2024, month: "Mar", revenue: 12000 },
        { year: 2024, month: "Apr", revenue: 13000 },
        { year: 2024, month: "May", revenue: 14000 },
        { year: 2024, month: "Jun", revenue: 15000 },
        { year: 2024, month: "Jul", revenue: 16000 },
        { year: 2024, month: "Aug", revenue: 17000 },
        { year: 2024, month: "Sep", revenue: 18000 },
        { year: 2024, month: "Oct", revenue: 19000 },
        { year: 2024, month: "Nov", revenue: 20000 },
        { year: 2024, month: "Dec", revenue: 21000 },
        // 2023
        { year: 2023, month: "Jan", revenue: 8000 },
        { year: 2023, month: "Feb", revenue: 9000 },
        { year: 2023, month: "Mar", revenue: 9500 },
        { year: 2023, month: "Apr", revenue: 10000 },
        { year: 2023, month: "May", revenue: 10500 },
        { year: 2023, month: "Jun", revenue: 11000 },
        { year: 2023, month: "Jul", revenue: 11500 },
        { year: 2023, month: "Aug", revenue: 12000 },
        { year: 2023, month: "Sep", revenue: 12500 },
        { year: 2023, month: "Oct", revenue: 13000 },
        { year: 2023, month: "Nov", revenue: 13500 },
        { year: 2023, month: "Dec", revenue: 14000 },
        // 2022
        { year: 2022, month: "Jan", revenue: 7000 },
        { year: 2022, month: "Feb", revenue: 7500 },
        { year: 2022, month: "Mar", revenue: 8000 },
        { year: 2022, month: "Apr", revenue: 8500 },
        { year: 2022, month: "May", revenue: 9000 },
        { year: 2022, month: "Jun", revenue: 9500 },
        { year: 2022, month: "Jul", revenue: 10000 },
        { year: 2022, month: "Aug", revenue: 10500 },
        { year: 2022, month: "Sep", revenue: 11000 },
        { year: 2022, month: "Oct", revenue: 11500 },
        { year: 2022, month: "Nov", revenue: 12000 },
        { year: 2022, month: "Dec", revenue: 12500 },
        // 2021
        { year: 2021, month: "Jan", revenue: 6000 },
        { year: 2021, month: "Feb", revenue: 6500 },
        { year: 2021, month: "Mar", revenue: 7000 },
        { year: 2021, month: "Apr", revenue: 7500 },
        { year: 2021, month: "May", revenue: 8000 },
        { year: 2021, month: "Jun", revenue: 8500 },
        { year: 2021, month: "Jul", revenue: 9000 },
        { year: 2021, month: "Aug", revenue: 9500 },
        { year: 2021, month: "Sep", revenue: 10000 },
        { year: 2021, month: "Oct", revenue: 10500 },
        { year: 2021, month: "Nov", revenue: 11000 },
        { year: 2021, month: "Dec", revenue: 11500 },
        // 2020
        { year: 2020, month: "Jan", revenue: 5000 },
        { year: 2020, month: "Feb", revenue: 5500 },
        { year: 2020, month: "Mar", revenue: 6000 },
        { year: 2020, month: "Apr", revenue: 6500 },
        { year: 2020, month: "May", revenue: 7000 },
        { year: 2020, month: "Jun", revenue: 7500 },
        { year: 2020, month: "Jul", revenue: 8000 },
        { year: 2020, month: "Aug", revenue: 8500 },
        { year: 2020, month: "Sep", revenue: 9000 },
        { year: 2020, month: "Oct", revenue: 9500 },
        { year: 2020, month: "Nov", revenue: 10000 },
        { year: 2020, month: "Dec", revenue: 10500 },
    ])

    return {
        stats,
        upcomingExpirations,
        revenueData,
    }
}