import { Injectable } from '@nestjs/common';

@Injectable()
export class GymlyService {
  getHello(): string {
    return 'Hello World!';
  }
}
