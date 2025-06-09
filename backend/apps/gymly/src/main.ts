import { NestFactory } from '@nestjs/core';
import { GymlyModule } from './gymly.module';
import { config } from 'dotenv';

async function bootstrap() {

    try {
        config();
    } catch (error) {
        console.error('Error loading .env file', error);
        process.exit(1);
    }

    const app = await NestFactory.create(GymlyModule);

    app.setGlobalPrefix('/gymly/api');
    app.enableCors();

    const port = process.env.GYMLY_PORT || 4001;

    await app.listen(port, '127.0.0.1', async () => {
        console.log(`Running API in NODE ${process.env.NODE_ENV} on ${await app.getUrl()}`);
    });

}
bootstrap();
