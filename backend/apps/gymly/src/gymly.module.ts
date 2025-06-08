import { Module } from '@nestjs/common';
import { GymlyController } from './gymly.controller';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { SeederModule } from './seeder/seeder.module';
import { MembershipModule } from './membership/membership.module';
import { UserModule } from './user/user.module';
import { GymModule } from './gym/gym.module';
import { MemberModule } from './member/member.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PlanModule } from './plan/plan.module';
import { MemberTimeLogsModule } from './member-time-logs/member-time-logs.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true, 
			playground: true,
		}),
		ConfigModule.forRoot({
			isGlobal: true, 
		}),
		PrismaModule,
		SeederModule,
		MembershipModule,
		UserModule,
		GymModule,
		MemberModule,
		PlanModule,
		MemberTimeLogsModule,
		AnalyticsModule,
		AuthModule,
	],
	controllers: [GymlyController],
})
export class GymlyModule {}
