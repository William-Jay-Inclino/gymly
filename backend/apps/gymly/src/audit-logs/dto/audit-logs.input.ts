import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { DB_TABLE } from '../../libs/common-types';

@InputType()
export class CreateAuditLogsInput {

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    gym_id?: string | null;

    @Field()
    @IsNotEmpty()
    @IsString()
    username: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    table: DB_TABLE;

    @Field()
    @IsNotEmpty()
    @IsString()
    action: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    reference_id?: string;

    @Field({ nullable: true })
    @IsOptional()
    metadata?: any;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    ip_address?: string;

    @Field({ nullable: true })
    @IsOptional()
    device_info?: any;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    notes?: string;

}
