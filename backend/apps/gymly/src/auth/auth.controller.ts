import { Controller, Get, Req, Res, Inject, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';

@Controller('auth')
export class AuthController {

    private readonly logger = new Logger(AuthController.name);

    constructor(
        private readonly config: ConfigService,
        private readonly prisma: PrismaService,
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    @Get('google/signup')
    async googleSignup(@Req() req, @Res() res) {
        const clientId = this.config.get('GOOGLE_CLIENT_ID');
        const redirectUri = this.config.get('GOOGLE_REDIRECT_URI');
        const scope = ['profile', 'email'].join(' ');
        const state = 'signup'; // You may use a random string or JWT for CSRF protection

        const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&state=${state}&access_type=offline&prompt=select_account`;

        return res.redirect(url);
    }

    @Get('google/callback')
    async googleCallback(@Req() req, @Res() res) {
        const code = req.query.code;
        const clientId = this.config.get('GOOGLE_CLIENT_ID');
        const clientSecret = this.config.get('GOOGLE_CLIENT_SECRET');
        const redirectUri = this.config.get('GOOGLE_REDIRECT_URI');

        // 1. Exchange code for tokens
        const tokenRes = await axios.post('https://oauth2.googleapis.com/token', null, {
            params: {
                code,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code'
            }
        });

        const { access_token } = tokenRes.data;

        // 2. Get user info from Google
        const userRes = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: { Authorization: `Bearer ${access_token}` }
        });

        const googleUser = userRes.data; // { email, name, id, ... }
        
        this.logger.log(`Google user info: ${JSON.stringify(googleUser)}`);

        // 3. Check if user exists in DB, if not, create user
        let user = await this.prisma.user.findUnique({ where: { email: googleUser.email } });

        if (!user) {
            // Generate unique username from email
            const username = await this.userService.generateUniqueUsername(
                { email: googleUser.email },
            );

            // Split name if available
            let firstname = '';
            let lastname = '';
            if (googleUser.name) {
                const parts = googleUser.name.split(' ');
                firstname = parts[0];
                lastname = parts.slice(1).join(' ');
            }

            user = await this.prisma.user.create({
                data: {
                    email: googleUser.email,
                    username,
                    firstname,
                    lastname,
                    created_by: 'google-oauth',
                }
            });
        }

        // 4. Create JWT for your app
        const payload = {
            sub: user.id,
            email: user.email,
            username: user.username,
        };
        const jwt = this.jwtService.sign(payload);

        console.log('redirecting to', );

        // 5. Redirect to frontend with JWT (or set cookie)
        const frontendRedirect = this.config.get('GOOGLE_SIGNUP_REDIRECT') || 'http://localhost:3000/gymly/signup?token=';
        return res.redirect(`${frontendRedirect}${jwt}`);
    }
}