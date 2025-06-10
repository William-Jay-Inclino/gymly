import { Controller, Get, Post, UseGuards, Request, Logger } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { AuditLogsService } from './audit-logs/audit-logs.service';
import { DB_TABLE } from './libs/common-types';
import { UserAgent } from './auth/decorators/user-agent.decorator';
import { IpAddress } from './auth/decorators/ip-address.decorator';
import { getDeviceInfo } from './libs/helpers';

@Controller()
export class GymlyController {

    private readonly logger = new Logger(GymlyController.name);
    private filename = 'gymly.controller.ts'
    
    constructor(
        private readonly authService: AuthService,
        private readonly audit: AuditLogsService,
    ) {}

    @Get('health-check')
    getHello(): string {
        return 'Gymly API is running';
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(
        @Request() req,
        @UserAgent() user_agent: string,
        @IpAddress() ip_address: string,
    ) {

        this.logger.log('User login attempt', {
            username: req.user?.username,
            filename: this.filename,
            user_agent,
            ip_address,
        });

        const result = await this.authService.login(req.user);

        // Log audit if login is successful
        if (result && req.user) {

            this.logger.log('User logged in successfully')

            await this.audit.createAuditEntry({
                username: req.user.username,
                table: DB_TABLE.NONE,
                action: 'LOGIN',
                ip_address,
                device_info: getDeviceInfo(user_agent),
            });
        }

        return result;
    }

}