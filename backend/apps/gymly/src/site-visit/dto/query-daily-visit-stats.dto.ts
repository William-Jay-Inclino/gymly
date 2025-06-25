import { IsOptional, IsDateString, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class QueryDailyVisitStatsDto {
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
