
import { Injectable, Logger } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    private readonly logger = new Logger(AuthService.name);

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        this.logger.log(`Logging in user with username: ${username}`);

        const user = await this.userService.findByUsername(username);

        // If user does not exist or has no password (e.g., Google signup), do not allow password login
        if (!user || !user.password) {
            this.logger.log(`Invalid login attempt. Username: ${username} (no user or no password set)`);
            return null;
        }

        if (user.password === pass) {
            this.logger.log(`User ${username} logged in successfully`);
            const { password, ...result } = user;
            return result;
        }

        this.logger.log(`Invalid login attempt. Username: ${username} and password: ${pass}`);
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}
