import { Controller, Post, HttpStatus, HttpCode } from '@nestjs/common';
import { SeederService } from './seeder.service';

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
