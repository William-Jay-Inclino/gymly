import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
    CreateSiteVisitDto,
    UpdateSiteVisitDto,
    CreateDailyVisitStatsDto,
    UpdateDailyVisitStatsDto,
    QuerySiteVisitDto,
    QueryDailyVisitStatsDto,
} from './dto';
import { SiteVisitEntity, DailyVisitStatsEntity } from './entities';

interface SiteVisitData {
    user_id?: string;
    session_id: string;
    ip_address: string;
    user_agent: string;
    referer?: string;
    page_url: string;
    country?: string;
    region?: string;
    city?: string;
    device_type?: string;
    browser?: string;
    os?: string;
    is_bot?: boolean;
    visit_duration?: number;
    page_views?: number;
}

interface GeolocationData {
    country?: string;
    region?: string;
    city?: string;
}

@Injectable()
export class SiteVisitService {
    private readonly logger = new Logger(SiteVisitService.name);

    constructor(private readonly prisma: PrismaService) {}

    /**
     * Track a site visit from HTTP request
     */
    async track_visit(request: any, page_url: string, user_id?: string): Promise<SiteVisitEntity> {
        try {
            const visit_data = await this.extract_visit_data(request, page_url, user_id);
            const site_visit = await this.create_site_visit(visit_data);
            
            // Update daily stats asynchronously
            this.update_daily_stats(new Date()).catch(error => {
                this.logger.error('Failed to update daily stats:', error);
            });

            return new SiteVisitEntity(site_visit);
        } catch (error) {
            this.logger.error('Failed to track visit:', error);
            throw error;
        }
    }

    /**
     * Create a site visit record
     */
    async create_site_visit(create_dto: CreateSiteVisitDto | SiteVisitData): Promise<any> {
        const is_unique = await this.is_unique_visitor(
            create_dto.ip_address,
            create_dto.session_id
        );
        
        const site_visit = await this.prisma.siteVisit.create({
            data: {
                ...create_dto,
                is_unique,
                is_bot: create_dto.is_bot ?? this.detect_bot(create_dto.user_agent),
                page_views: create_dto.page_views ?? 1,
                visited_at: new Date(),
            },
        });

        return site_visit;
    }

    /**
     * Get all site visits with optional filtering
     */
    async find_all(query_dto: QuerySiteVisitDto): Promise<{
        data: SiteVisitEntity[];
        total: number;
        page: number;
        limit: number;
    }> {
        const { page = 1, limit = 10, from_date, to_date, ...filters } = query_dto;
        const skip = (page - 1) * limit;

        const where_clause: any = { ...filters };

        if (from_date || to_date) {
            where_clause.visited_at = {};
            if (from_date) {
                where_clause.visited_at.gte = new Date(from_date);
            }
            if (to_date) {
                where_clause.visited_at.lte = new Date(to_date);
            }
        }

        const [site_visits, total] = await Promise.all([
            this.prisma.siteVisit.findMany({
                where: where_clause,
                skip,
                take: limit,
                orderBy: { visited_at: 'desc' },
            }),
            this.prisma.siteVisit.count({ where: where_clause }),
        ]);

        return {
            data: site_visits.map(visit => new SiteVisitEntity(visit)),
            total,
            page,
            limit,
        };
    }

    /**
     * Get a single site visit by ID
     */
    async find_one(id: string): Promise<SiteVisitEntity> {
        const site_visit = await this.prisma.siteVisit.findUnique({
            where: { id },
        });

        if (!site_visit) {
            throw new Error(`Site visit with ID ${id} not found`);
        }

        return new SiteVisitEntity(site_visit);
    }

    /**
     * Update a site visit
     */
    async update(id: string, update_dto: UpdateSiteVisitDto): Promise<SiteVisitEntity> {
        const updated_visit = await this.prisma.siteVisit.update({
            where: { id },
            data: {
                ...update_dto,
                visited_at: update_dto.visited_at ? new Date(update_dto.visited_at) : undefined,
            },
        });

        return new SiteVisitEntity(updated_visit);
    }

    /**
     * Delete a site visit
     */
    async remove(id: string): Promise<void> {
        await this.prisma.siteVisit.delete({
            where: { id },
        });
    }

    /**
     * Extract visit data from HTTP request
     */
    private async extract_visit_data(request: any, page_url: string, user_id?: string): Promise<SiteVisitData> {
        const ip_address = this.get_client_ip(request);
        const user_agent = request.headers['user-agent'] || '';
        const referer = request.headers['referer'] || request.headers['referrer'];
        
        // Fetch geolocation data
        let geo_data: GeolocationData = {};
        try {
            geo_data = await this.fetch_geolocation_data(ip_address);
        } catch (error) {
            this.logger.warn(`Failed to fetch geolocation data for IP ${ip_address}: ${error.message}`);
        }
        
        return {
            user_id,
            session_id: this.generate_session_id(request),
            ip_address,
            user_agent,
            referer: referer as string,
            page_url,
            device_type: this.detect_device_type(user_agent),
            browser: this.detect_browser(user_agent),
            os: this.detect_os(user_agent),
            country: geo_data.country,
            region: geo_data.region,
            city: geo_data.city,
            page_views: 1,
        };
    }

    /**
     * Fetch geolocation data from IP address using ip-api.com (free service)
     */
    private async fetch_geolocation_data(ip_address: string): Promise<GeolocationData> {
        try {
            // Skip localhost and private IPs
            if (ip_address === '127.0.0.1' || 
                ip_address === '::1' || 
                ip_address === '0.0.0.0' ||
                ip_address.startsWith('192.168.') || 
                ip_address.startsWith('10.') || 
                ip_address.startsWith('172.16.') ||
                ip_address.startsWith('172.17.') ||
                ip_address.startsWith('172.18.') ||
                ip_address.startsWith('172.19.') ||
                ip_address.startsWith('172.2') ||
                ip_address.startsWith('172.30.') ||
                ip_address.startsWith('172.31.')) {
                return {
                    country: 'Local',
                    region: 'Local',
                    city: 'Local'
                };
            }

            // Use ip-api.com free service (15 requests per minute limit)
            const response = await fetch(`http://ip-api.com/json/${ip_address}?fields=status,country,regionName,city`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.status === 'success') {
                return {
                    country: data.country || null,
                    region: data.regionName || null,
                    city: data.city || null
                };
            } else {
                this.logger.warn(`Failed to get geolocation for IP ${ip_address}: ${data.message || 'Unknown error'}`);
                return {};
            }
        } catch (error) {
            this.logger.error(`Error fetching geolocation for IP ${ip_address}:`, error);
            return {};
        }
    }

    /**
     * Check if visitor is unique for today
     */
    private async is_unique_visitor(ip_address: string, session_id: string): Promise<boolean> {
        const today_start = new Date();
        today_start.setHours(0, 0, 0, 0);
        
        const existing_visit = await this.prisma.siteVisit.findFirst({
            where: {
                OR: [
                    { ip_address, visited_at: { gte: today_start } },
                    { session_id, visited_at: { gte: today_start } },
                ],
            },
        });

        return !existing_visit;
    }

    /**
     * Detect if user agent is a bot
     */
    private detect_bot(user_agent: string): boolean {
        const bot_patterns = [
            /bot/i, /crawler/i, /spider/i, /scraper/i,
            /googlebot/i, /bingbot/i, /slurp/i, /duckduckbot/i,
            /facebookexternalhit/i, /twitterbot/i, /linkedinbot/i,
            /whatsapp/i, /telegram/i,
        ];

        return bot_patterns.some(pattern => pattern.test(user_agent));
    }

    /**
     * Extract client IP address
     */
    private get_client_ip(request: any): string {
        const x_forwarded_for = request.headers['x-forwarded-for'] as string;
        const x_real_ip = request.headers['x-real-ip'] as string;
        const cf_connecting_ip = request.headers['cf-connecting-ip'] as string;
        
        return (
            cf_connecting_ip ||
            x_real_ip ||
            (x_forwarded_for && x_forwarded_for.split(',')[0].trim()) ||
            request.connection?.remoteAddress ||
            request.socket?.remoteAddress ||
            '0.0.0.0'
        );
    }

    /**
     * Generate session ID from request
     */
    private generate_session_id(request: any): string {
        const session_cookie = request.cookies?.session_id;
        if (session_cookie) {
            return session_cookie;
        }

        // Generate new session ID
        const timestamp = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2);
        return `${timestamp}-${random}`;
    }

    /**
     * Detect device type from user agent
     */
    private detect_device_type(user_agent: string): string {
        if (/mobile/i.test(user_agent)) {
            return 'mobile';
        }
        if (/tablet|ipad/i.test(user_agent)) {
            return 'tablet';
        }
        return 'desktop';
    }

    /**
     * Detect browser from user agent
     */
    private detect_browser(user_agent: string): string {
        if (/chrome/i.test(user_agent) && !/edge/i.test(user_agent)) {
            return 'Chrome';
        }
        if (/firefox/i.test(user_agent)) {
            return 'Firefox';
        }
        if (/safari/i.test(user_agent) && !/chrome/i.test(user_agent)) {
            return 'Safari';
        }
        if (/edge/i.test(user_agent)) {
            return 'Edge';
        }
        if (/opera/i.test(user_agent)) {
            return 'Opera';
        }
        return 'Unknown';
    }

    /**
     * Detect operating system from user agent
     */
    private detect_os(user_agent: string): string {
        if (/windows/i.test(user_agent)) {
            return 'Windows';
        }
        if (/macintosh|mac os x/i.test(user_agent)) {
            return 'macOS';
        }
        if (/linux/i.test(user_agent) && !/android/i.test(user_agent)) {
            return 'Linux';
        }
        if (/android/i.test(user_agent)) {
            return 'Android';
        }
        if (/iphone|ipad|ipod/i.test(user_agent)) {
            return 'iOS';
        }
        return 'Unknown';
    }

    // === DAILY STATS METHODS ===

    /**
     * Update daily visit statistics
     */
    async update_daily_stats(date: Date = new Date()): Promise<DailyVisitStatsEntity> {
        try {
            const date_only = new Date(date);
            date_only.setHours(0, 0, 0, 0);

            const next_day = new Date(date_only);
            next_day.setDate(next_day.getDate() + 1);

            // Get visit data for the day
            const daily_visits = await this.prisma.siteVisit.findMany({
                where: {
                    visited_at: {
                        gte: date_only,
                        lt: next_day,
                    },
                },
            });

            if (daily_visits.length === 0) {
                return null;
            }

            // Calculate statistics
            const stats_data = this.calculate_daily_stats(daily_visits, date_only);

            // Upsert daily stats
            const daily_stats = await this.prisma.dailyVisitStats.upsert({
                where: { date: date_only },
                update: {
                    ...stats_data,
                    updated_at: new Date(),
                },
                create: stats_data,
            });

            this.logger.log(`Updated daily stats for ${date_only.toISOString().split('T')[0]}`);
            return new DailyVisitStatsEntity({
                ...daily_stats,
                bounce_rate: daily_stats.bounce_rate ? Number(daily_stats.bounce_rate) : null,
            });
        } catch (error) {
            this.logger.error('Failed to update daily stats:', error);
            throw error;
        }
    }

    /**
     * Get daily visit statistics with filtering
     */
    async get_daily_stats(query_dto: QueryDailyVisitStatsDto): Promise<{
        data: DailyVisitStatsEntity[];
        total: number;
        page: number;
        limit: number;
    }> {
        const { page = 1, limit = 10, from_date, to_date } = query_dto;
        const skip = (page - 1) * limit;

        const where_clause: any = {};
        
        if (from_date || to_date) {
            where_clause.date = {};
            if (from_date) {
                where_clause.date.gte = new Date(from_date);
            }
            if (to_date) {
                where_clause.date.lte = new Date(to_date);
            }
        }

        const [daily_stats, total] = await Promise.all([
            this.prisma.dailyVisitStats.findMany({
                where: where_clause,
                skip,
                take: limit,
                orderBy: { date: 'desc' },
            }),
            this.prisma.dailyVisitStats.count({ where: where_clause }),
        ]);

        return {
            data: daily_stats.map(stats => new DailyVisitStatsEntity({
                ...stats,
                bounce_rate: stats.bounce_rate ? Number(stats.bounce_rate) : null,
            })),
            total,
            page,
            limit,
        };
    }

    /**
     * Get analytics summary for a period
     */
    async get_analytics_summary(days: number = 30): Promise<any> {
        const start_date = new Date();
        start_date.setDate(start_date.getDate() - days);

        const daily_stats = await this.prisma.dailyVisitStats.findMany({
            where: {
                date: { gte: start_date },
            },
            orderBy: { date: 'desc' },
        });
        
        if (daily_stats.length === 0) {
            return {
                total_visits: 0,
                total_unique_visits: 0,
                total_page_views: 0,
                avg_bounce_rate: 0,
                avg_session_time: 0,
                device_breakdown: { mobile: 0, desktop: 0, tablet: 0 },
                daily_stats: [],
            };
        }

        const summary = daily_stats.reduce((acc, stat) => ({
            total_visits: acc.total_visits + stat.total_visits,
            total_unique_visits: acc.total_unique_visits + stat.unique_visits,
            total_page_views: acc.total_page_views + stat.page_views,
            mobile_visits: acc.mobile_visits + stat.mobile_visits,
            desktop_visits: acc.desktop_visits + stat.desktop_visits,
            tablet_visits: acc.tablet_visits + stat.tablet_visits,
            bounce_rates: [...acc.bounce_rates, stat.bounce_rate ? Number(stat.bounce_rate) : null].filter(Boolean),
            session_times: [...acc.session_times, stat.avg_session_time].filter(Boolean),
        }), {
            total_visits: 0,
            total_unique_visits: 0,
            total_page_views: 0,
            mobile_visits: 0,
            desktop_visits: 0,
            tablet_visits: 0,
            bounce_rates: [] as number[],
            session_times: [] as number[],
        });

        return {
            total_visits: summary.total_visits,
            total_unique_visits: summary.total_unique_visits,
            total_page_views: summary.total_page_views,
            avg_bounce_rate: summary.bounce_rates.length > 0
                ? summary.bounce_rates.reduce((a, b) => a + b, 0) / summary.bounce_rates.length
                : 0,
            avg_session_time: summary.session_times.length > 0
                ? summary.session_times.reduce((a, b) => a + b, 0) / summary.session_times.length
                : 0,
            device_breakdown: {
                mobile: summary.mobile_visits,
                desktop: summary.desktop_visits,
                tablet: summary.tablet_visits,
            },
            daily_stats: daily_stats.map(stats => new DailyVisitStatsEntity({
                ...stats,
                bounce_rate: stats.bounce_rate ? Number(stats.bounce_rate) : null,
            })),
        };
    }

    /**
     * Calculate daily statistics from visit data
     */
    private calculate_daily_stats(visits: any[], date: Date): any {
        const total_visits = visits.length;
        const unique_visits = visits.filter(v => v.is_unique).length;
        const page_views = visits.reduce((sum, v) => sum + (v.page_views || 1), 0);
        
        // Device breakdown
        const mobile_visits = visits.filter(v => v.device_type === 'mobile').length;
        const desktop_visits = visits.filter(v => v.device_type === 'desktop').length;
        const tablet_visits = visits.filter(v => v.device_type === 'tablet').length;

        // Calculate bounce rate (single page visits)
        const single_page_visits = visits.filter(v => (v.page_views || 1) === 1).length;
        const bounce_rate = total_visits > 0 ? (single_page_visits / total_visits) * 100 : 0;

        // Calculate average session time
        const visits_with_duration = visits.filter(v => v.visit_duration && v.visit_duration > 0);
        const avg_session_time = visits_with_duration.length > 0
            ? visits_with_duration.reduce((sum, v) => sum + v.visit_duration, 0) / visits_with_duration.length
            : null;

        // Find top page and referer
        const page_counts = this.count_occurrences(visits.map(v => v.page_url));
        const referer_counts = this.count_occurrences(visits.map(v => v.referer).filter(Boolean));
        
        const top_page = this.get_top_item(page_counts);
        const top_referer = this.get_top_item(referer_counts);

        return {
            date,
            total_visits,
            unique_visits,
            page_views,
            bounce_rate: bounce_rate > 0 ? Math.round(bounce_rate * 100) / 100 : null,
            avg_session_time: avg_session_time ? Math.round(avg_session_time) : null,
            top_page,
            top_referer,
            mobile_visits,
            desktop_visits,
            tablet_visits,
        };
    }

    /**
     * Count occurrences of items in array
     */
    private count_occurrences(items: string[]): Record<string, number> {
        return items.reduce((counts, item) => {
            counts[item] = (counts[item] || 0) + 1;
            return counts;
        }, {} as Record<string, number>);
    }

    /**
     * Get item with highest count
     */
    private get_top_item(counts: Record<string, number>): string | null {
        const entries = Object.entries(counts);
        if (entries.length === 0) return null;
        
        return entries.reduce((max, current) => 
            current[1] > max[1] ? current : max
        )[0];
    }
}
