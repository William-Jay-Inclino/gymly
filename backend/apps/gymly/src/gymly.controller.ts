import { Controller, Get } from '@nestjs/common';
import { GymlyService } from './gymly.service';

@Controller()
export class GymlyController {
  constructor(private readonly gymlyService: GymlyService) {}

  @Get()
  getHello(): string {
    return this.gymlyService.getHello();
  }
}
