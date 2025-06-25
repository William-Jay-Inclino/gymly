import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
    Req,
    HttpStatus,
    HttpException,
} from '@nestjs/common';
import { SiteVisitService } from './site-visit.service';
import {
    CreateSiteVisitDto,
    UpdateSiteVisitDto,
    QuerySiteVisitDto,
    QueryDailyVisitStatsDto,
} from './dto';

@Controller('site-visit')
export class SiteVisitController {
    constructor(private readonly site_visit_service: SiteVisitService) {}

    /**
     * Track a new site visit
     * POST /site-visit/track
     */
    @Post('track')
    async track_visit(
        @Req() request: any,
        @Body() body: { page_url: string; user_id?: string }
    ) {
        try {
            const { page_url, user_id } = body;
            
            if (!page_url) {
                throw new HttpException('page_url is required', HttpStatus.BAD_REQUEST);
            }

            const site_visit = await this.site_visit_service.track_visit(
                request,
                page_url,
                user_id
            );

            return {
                success: true,
                message: 'Visit tracked successfully',
                data: site_visit,
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to track visit',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Create a site visit manually
     * POST /site-visit
     */
    @Post()
    async create(@Body() create_site_visit_dto: CreateSiteVisitDto) {
        try {
            const site_visit = await this.site_visit_service.create_site_visit(
                create_site_visit_dto
            );

            return {
                success: true,
                message: 'Site visit created successfully',
                data: site_visit,
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to create site visit',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Get all site visits with filtering and pagination
     * GET /site-visit
     */
    @Get()
    async find_all(@Query() query_dto: QuerySiteVisitDto) {
        try {
            const result = await this.site_visit_service.find_all(query_dto);

            return {
                success: true,
                message: 'Site visits retrieved successfully',
                data: result.data,
                pagination: {
                    total: result.total,
                    page: result.page,
                    limit: result.limit,
                    total_pages: Math.ceil(result.total / result.limit),
                },
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to retrieve site visits',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Get a single site visit by ID
     * GET /site-visit/:id
     */
    @Get(':id')
    async find_one(@Param('id') id: string) {
        try {
            const site_visit = await this.site_visit_service.find_one(id);

            return {
                success: true,
                message: 'Site visit retrieved successfully',
                data: site_visit,
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Site visit not found',
                HttpStatus.NOT_FOUND
            );
        }
    }

    /**
     * Update a site visit
     * PATCH /site-visit/:id
     */
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() update_site_visit_dto: UpdateSiteVisitDto
    ) {
        try {
            const updated_visit = await this.site_visit_service.update(
                id,
                update_site_visit_dto
            );

            return {
                success: true,
                message: 'Site visit updated successfully',
                data: updated_visit,
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to update site visit',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Delete a site visit
     * DELETE /site-visit/:id
     */
    @Delete(':id')
    async remove(@Param('id') id: string) {
        try {
            await this.site_visit_service.remove(id);

            return {
                success: true,
                message: 'Site visit deleted successfully',
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to delete site visit',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Get daily visit statistics
     * GET /site-visit/stats/daily
     */
    @Get('stats/daily')
    async get_daily_stats(@Query() query_dto: QueryDailyVisitStatsDto) {
        try {
            const result = await this.site_visit_service.get_daily_stats(query_dto);

            return {
                success: true,
                message: 'Daily stats retrieved successfully',
                data: result.data,
                pagination: {
                    total: result.total,
                    page: result.page,
                    limit: result.limit,
                    total_pages: Math.ceil(result.total / result.limit),
                },
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to retrieve daily stats',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Get analytics summary
     * GET /site-visit/analytics/summary
     */
    @Get('analytics/summary')
    async get_analytics_summary(@Query('days') days?: string) {
        try {
            const period_days = days ? parseInt(days) : 30;
            
            if (period_days < 1 || period_days > 365) {
                throw new HttpException(
                    'Days must be between 1 and 365',
                    HttpStatus.BAD_REQUEST
                );
            }

            const analytics = await this.site_visit_service.get_analytics_summary(period_days);

            return {
                success: true,
                message: 'Analytics summary retrieved successfully',
                data: analytics,
                period: {
                    days: period_days,
                    from: new Date(Date.now() - period_days * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                    to: new Date().toISOString().split('T')[0],
                },
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to retrieve analytics summary',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Update daily stats manually
     * POST /site-visit/stats/update
     */
    @Post('stats/update')
    async update_daily_stats(@Body('date') date_string?: string) {
        try {
            const date = date_string ? new Date(date_string) : new Date();
            
            if (isNaN(date.getTime())) {
                throw new HttpException(
                    'Invalid date format',
                    HttpStatus.BAD_REQUEST
                );
            }

            const updated_stats = await this.site_visit_service.update_daily_stats(date);

            return {
                success: true,
                message: 'Daily stats updated successfully',
                data: updated_stats,
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to update daily stats',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Get visit analytics by device type
     * GET /site-visit/analytics/device-breakdown
     */
    @Get('analytics/device-breakdown')
    async get_device_breakdown(@Query('days') days?: string) {
        try {
            const period_days = days ? parseInt(days) : 30;
            const analytics = await this.site_visit_service.get_analytics_summary(period_days);

            return {
                success: true,
                message: 'Device breakdown retrieved successfully',
                data: analytics.device_breakdown,
                total_visits: analytics.total_visits,
                period: {
                    days: period_days,
                    from: new Date(Date.now() - period_days * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                    to: new Date().toISOString().split('T')[0],
                },
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to retrieve device breakdown',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Get unique visitors count
     * GET /site-visit/analytics/unique-visitors
     */
    @Get('analytics/unique-visitors')
    async get_unique_visitors(@Query('days') days?: string) {
        try {
            const period_days = days ? parseInt(days) : 30;
            const analytics = await this.site_visit_service.get_analytics_summary(period_days);

            return {
                success: true,
                message: 'Unique visitors data retrieved successfully',
                data: {
                    unique_visitors: analytics.total_unique_visits,
                    total_visits: analytics.total_visits,
                    unique_rate: analytics.total_visits > 0 
                        ? Math.round((analytics.total_unique_visits / analytics.total_visits) * 100 * 100) / 100
                        : 0,
                },
                period: {
                    days: period_days,
                    from: new Date(Date.now() - period_days * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                    to: new Date().toISOString().split('T')[0],
                },
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to retrieve unique visitors data',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    /**
     * Get page views analytics
     * GET /site-visit/analytics/page-views
     */
    @Get('analytics/page-views')
    async get_page_views(@Query('days') days?: string) {
        try {
            const period_days = days ? parseInt(days) : 30;
            const analytics = await this.site_visit_service.get_analytics_summary(period_days);

            return {
                success: true,
                message: 'Page views data retrieved successfully',
                data: {
                    total_page_views: analytics.total_page_views,
                    total_visits: analytics.total_visits,
                    pages_per_visit: analytics.total_visits > 0 
                        ? Math.round((analytics.total_page_views / analytics.total_visits) * 100) / 100
                        : 0,
                    bounce_rate: analytics.avg_bounce_rate,
                    avg_session_time: analytics.avg_session_time,
                },
                period: {
                    days: period_days,
                    from: new Date(Date.now() - period_days * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                    to: new Date().toISOString().split('T')[0],
                },
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to retrieve page views data',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
