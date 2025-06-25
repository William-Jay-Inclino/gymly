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
import { GymStaffModule } from './gym-staff/gym-staff.module';
import { LimitModule } from './limit/limit.module';
import { GymLimitModule } from './gym-limit/gym-limit.module';
import { TaskService } from './task-scheduler/task.service';
import { LoggerModule } from './logger/logger.module';
import { AuditLogsModule } from './audit-logs/audit-logs.module';
import { SiteVisitService } from './site-visit/site-visit.service';
import { SiteVisitModule } from './site-visit/site-visit.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true, 
			playground: true,
			path: '/gymly/graphql',
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
		GymStaffModule,
		LimitModule,
		GymLimitModule,
		LoggerModule,
		AuditLogsModule,
		SiteVisitModule,
	],
	controllers: [GymlyController],
	providers: [TaskService, SiteVisitService],
})
export class GymlyModule {}
