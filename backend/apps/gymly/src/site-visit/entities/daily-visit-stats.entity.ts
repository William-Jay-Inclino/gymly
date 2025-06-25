export class DailyVisitStatsEntity {
    /** Unique identifier for the daily stats */
    id: string;

    /** Date for the statistics */
    date: Date;

    /** Total number of visits for the day */
    total_visits: number;

    /** Number of unique visits for the day */
    unique_visits: number;

    /** Total page views for the day */
    page_views: number;

    /** Bounce rate percentage */
    bounce_rate?: number;

    /** Average session time in seconds */
    avg_session_time?: number;

    /** Most visited page of the day */
    top_page?: string;

    /** Top referrer source */
    top_referer?: string;

    /** Number of mobile visits */
    mobile_visits: number;

    /** Number of desktop visits */
    desktop_visits: number;

    /** Number of tablet visits */
    tablet_visits: number;

    /** When the record was created */
    created_at: Date;

    /** When the record was last updated */
    updated_at: Date;

    constructor(partial: Partial<DailyVisitStatsEntity>) {
        Object.assign(this, partial);
    }
}
