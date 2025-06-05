
type ExpirationStatus = "Expiring Soon" | "Expired Today"

interface UpcomingExpiration {
    id: number
    memberName: string
    contactNumber: string
    endDate: string
    sessionsLeft: number | null
    status: ExpirationStatus
    planName?: string
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

    // Upcoming expirations (typed)
    const upcomingExpirations = ref<UpcomingExpiration[]>([
        {
            id: 1,
            memberName: "Jane Cruz",
            contactNumber: "09171234567",
            endDate: "2025-06-10",
            sessionsLeft: 3,
            status: "Expiring Soon",
            planName: "Gold"
        },
        {
            id: 2,
            memberName: "Mark Reyes",
            contactNumber: "09179876543",
            endDate: "2025-06-12",
            sessionsLeft: 0,
            status: "Expired Today",
            planName: "Silver"
        },
        {
            id: 3,
            memberName: "Anna Lim",
            contactNumber: "09175551234",
            endDate: "2025-06-13",
            sessionsLeft: 1,
            status: "Expiring Soon",
            planName: "Bronze"
        },
        {
            id: 4,
            memberName: "Paul Santos",
            contactNumber: "09179998888",
            endDate: "2025-06-15",
            sessionsLeft: null,
            status: "Expiring Soon",
            planName: "Gold"
        },
    ])

    // Revenue data for the line graph
    const revenueData = ref([
        { month: "Jan", revenue: 12000 },
        { month: "Feb", revenue: 13500 },
        { month: "Mar", revenue: 14200 },
        { month: "Apr", revenue: 15800 },
        { month: "May", revenue: 17000 },
        { month: "Jun", revenue: 18500 },
    ])

    return {
        stats,
        upcomingExpirations,
        revenueData,
    }
}