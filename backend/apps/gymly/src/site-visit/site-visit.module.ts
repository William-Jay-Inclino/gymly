import { Module } from '@nestjs/common';
import { SiteVisitService } from './site-visit.service';
import { PrismaModule } from '../prisma/prisma.module';
import { SiteVisitController } from './site-visit.controller';

@Module({
    imports: [PrismaModule],
    providers: [SiteVisitService],
    exports: [SiteVisitService],
    controllers: [SiteVisitController],
})
export class SiteVisitModule {}
