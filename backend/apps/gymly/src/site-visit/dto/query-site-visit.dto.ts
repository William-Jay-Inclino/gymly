import { IsOptional, IsString, IsBoolean, IsDateString, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class QuerySiteVisitDto {
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
    @Transform(({ value }) => value === 'true')
    @IsBoolean()
    is_bot?: boolean;

    @IsOptional()
    @Transform(({ value }) => value === 'true')
    @IsBoolean()
    is_unique?: boolean;

    @IsOptional()
    @IsDateString()
    from_date?: string;

    @IsOptional()
    @IsDateString()
    to_date?: string;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    page?: number = 1;

    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    limit?: number = 10;
}
