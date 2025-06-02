import { NestFactory } from '@nestjs/core';
import { GymlyModule } from './gymly.module';

async function bootstrap() {
    const app = await NestFactory.create(GymlyModule);
    await app.listen(process.env.port ?? 5000);
}
bootstrap();
