import { IsString, IsOptional, IsBoolean, IsNumber, IsUrl, IsDateString } from 'class-validator';

export class UpdateSiteVisitDto {
    @IsOptional()
    @IsString()
    user_id?: string;

    @IsOptional()
    @IsString()
    session_id?: string;

    @IsOptional()
    @IsString()
    ip_address?: string;

    @IsOptional()
    @IsString()
    user_agent?: string;

    @IsOptional()
    @IsString()
    referer?: string;

    @IsOptional()
    @IsUrl()
    page_url?: string;

    @IsOptional()
    @IsString()
    country?: string;

    @IsOptional()
    @IsString()
    region?: string;

    @IsOptional()
    @IsString()
    city?: string;

    @IsOptional()
    @IsString()
    device_type?: string;

    @IsOptional()
    @IsString()
    browser?: string;

    @IsOptional()
    @IsString()
    os?: string;

    @IsOptional()
    @IsBoolean()
    is_bot?: boolean;

    @IsOptional()
    @IsBoolean()
    is_unique?: boolean;

    @IsOptional()
    @IsNumber()
    visit_duration?: number;

    @IsOptional()
    @IsNumber()
    page_views?: number;

    @IsOptional()
    @IsDateString()
    visited_at?: string;
}
