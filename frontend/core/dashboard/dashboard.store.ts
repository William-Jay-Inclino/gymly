
export const useDashboardStore = defineStore('dashboard', {
    state: () => ({
        _gym_stat: {
            total_revenue: 0,
            total_members: 0,
            total_memberships_today: 0,
            total_active_memberships: 0,
            total_checked_in_today: 0,
        },
        _attendance_stat: {
            average_per_day: {
                'Mon': 0,
                'Tue': 0,
                'Wed': 0,
                'Thu': 0,
                'Fri': 0,
                'Sat': 0,
                'Sun': 0,
            },
            total_all_time: 0,
        },
        _revenues: [] as { year: number; month: number; amount: number }[],
        _membership_counts: [] as { year: number; month: number; count: number }[],
    }),
    getters: {
        gym_stat: (state) => state._gym_stat,
        attendance_stat: (state) => state._attendance_stat,
        revenues: (state) => state._revenues,
        membership_counts: (state) => state._membership_counts,
    },
    actions: {
        set_gym_stat(payload: { 
            total_revenue?: number, 
            total_members?: number,
            total_memberships_today?: number,
            total_active_memberships?: number,
            total_checked_in_today?: number 
        }) {

            if(payload.total_revenue) {
                this._gym_stat.total_revenue = payload.total_revenue
            }

            if(payload.total_members) {
                this._gym_stat.total_members = payload.total_members
            }

            if(payload.total_memberships_today) {
                this._gym_stat.total_memberships_today = payload.total_memberships_today
            }

            if(payload.total_active_memberships) {
                this._gym_stat.total_active_memberships = payload.total_active_memberships
            }

            if(payload.total_checked_in_today) {
                this._gym_stat.total_checked_in_today = payload.total_checked_in_today
            }

            
        },
        set_attendance_stat(payload: { 
            average_per_day: { Mon: number; Tue: number; Wed: number; Thu: number; Fri: number; Sat: number; Sun: number }, 
            total_all_time: number 
        }) {

            const { average_per_day, total_all_time } = payload;

            this._attendance_stat = {
                average_per_day: average_per_day,
                total_all_time: total_all_time,
            }
        },
        set_revenues(payload: { year: number, month: number, amount: number }[]) {
            this._revenues = payload.map(i => ({
                year: i.year,
                month: i.month,
                amount: i.amount,
            }));
        },
        set_membership_counts(payload: { year: number, month: number, count: number }[]) {
            this._membership_counts = payload.map(i => ({
                year: i.year,
                month: i.month,
                count: i.count,
            }));
        }
    },
})