import { Controller, Post, HttpStatus, HttpCode, UseGuards } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { LocalOnlyGuard } from '../auth/guards/local-only.guard';

@UseGuards(LocalOnlyGuard)
@Controller('/seeder')
export class SeederController {
    constructor(private readonly seederService: SeederService){}

    // seed entire database
    @Post('/seed-database')
    @HttpCode(HttpStatus.OK)
    async seed_data() {
        try {
            return await this.seederService.seed_data();
        } catch (error) {
            return 'Data seeding failed.';
        }
    }
    
}
