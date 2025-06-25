import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDailyVisitStatsDto {
    @IsOptional()
    @IsDateString()
    date?: string;

    @IsOptional()
    @IsNumber()
    total_visits?: number;

    @IsOptional()
    @IsNumber()
    unique_visits?: number;

    @IsOptional()
    @IsNumber()
    page_views?: number;

    @IsOptional()
    @IsNumber()
    bounce_rate?: number;

    @IsOptional()
    @IsNumber()
    avg_session_time?: number;

    @IsOptional()
    @IsString()
    top_page?: string;

    @IsOptional()
    @IsString()
    top_referer?: string;

    @IsOptional()
    @IsNumber()
    mobile_visits?: number;

    @IsOptional()
    @IsNumber()
    desktop_visits?: number;

    @IsOptional()
    @IsNumber()
    tablet_visits?: number;
}
