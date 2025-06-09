import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class LocalOnlyGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const ip = request.ip || request.connection.remoteAddress;
        // Accept IPv4 and IPv6 localhost
        if (ip === '::1' || ip === '127.0.0.1' || ip === '::ffff:127.0.0.1') {
            return true;
        }
        throw new ForbiddenException('Access allowed only from localhost');
    }
}