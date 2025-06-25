import { IsString, IsOptional, IsBoolean, IsNumber, IsUrl, IsDateString } from 'class-validator';

export class CreateSiteVisitDto {
    @IsOptional()
    @IsString()
    user_id?: string;

    @IsString()
    session_id: string;

    @IsString()
    ip_address: string;

    @IsString()
    user_agent: string;

    @IsOptional()
    @IsString()
    referer?: string;

    @IsUrl()
    page_url: string;

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
    is_bot?: boolean = false;

    @IsOptional()
    @IsBoolean()
    is_unique?: boolean = false;

    @IsOptional()
    @IsNumber()
    visit_duration?: number;

    @IsOptional()
    @IsNumber()
    page_views?: number = 1;

    @IsOptional()
    @IsDateString()
    visited_at?: string;
}
