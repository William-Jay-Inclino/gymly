import { Module } from '@nestjs/common';
import { GymlyController } from './gymly.controller';
import { GymlyService } from './gymly.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { SeederService } from './seeder/seeder.service';
import { SeederModule } from './seeder/seeder.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true, 
		}),
		PrismaModule,
		SeederModule,
	],
	controllers: [GymlyController],
	providers: [GymlyService, SeederService],
})
export class GymlyModule {}
