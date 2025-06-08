import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class GymlyController {
    
    constructor(
        private readonly authService: AuthService,
    ) {}

    @Get('health-check')
    getHello(): string {
        return 'Gymly API is running';
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

}
