export class SiteVisitEntity {
    /** Unique identifier for the site visit */
    id: string;

    /** User ID if authenticated */
    user_id?: string;

    /** Unique session identifier */
    session_id: string;

    /** IP address of the visitor */
    ip_address: string;

    /** User agent string from browser */
    user_agent: string;

    /** Referrer URL */
    referer?: string;

    /** Page URL being visited */
    page_url: string;

    /** Country from geolocation */
    country?: string;

    /** Region/State from geolocation */
    region?: string;

    /** City from geolocation */
    city?: string;

    /** Device type (mobile, desktop, tablet) */
    device_type?: string;

    /** Browser name */
    browser?: string;

    /** Operating system */
    os?: string;

    /** Whether the visitor is a bot */
    is_bot: boolean;

    /** Whether this is a unique visit for the day */
    is_unique: boolean;

    /** Visit duration in seconds */
    visit_duration?: number;

    /** Number of page views in session */
    page_views: number;

    /** Timestamp when the visit occurred */
    visited_at: Date;

    constructor(partial: Partial<SiteVisitEntity>) {
        Object.assign(this, partial);
    }
}
