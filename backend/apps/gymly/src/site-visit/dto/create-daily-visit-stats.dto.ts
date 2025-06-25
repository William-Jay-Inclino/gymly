import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDailyVisitStatsDto {
    @IsDateString()
    date: string;

    @IsOptional()
    @IsNumber()
    total_visits?: number = 0;

    @IsOptional()
    @IsNumber()
    unique_visits?: number = 0;

    @IsOptional()
    @IsNumber()
    page_views?: number = 0;

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
    mobile_visits?: number = 0;

    @IsOptional()
    @IsNumber()
    desktop_visits?: number = 0;

    @IsOptional()
    @IsNumber()
    tablet_visits?: number = 0;
}
