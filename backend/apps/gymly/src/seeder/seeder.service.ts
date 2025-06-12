import { Injectable } from '@nestjs/common';
import { Prisma } from 'apps/gymly/prisma/generated/client';
import * as data from './mock-data'
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class SeederService {

    constructor(private readonly prisma: PrismaService) { }

    async seed_data() {
        console.log('seeding gymly_db...');
        
        try {
            await this.prisma.$transaction(async (prisma) => {

                // await this.seed_users(prisma as unknown as Prisma.TransactionClient)
                // await this.seed_gyms(prisma as unknown as Prisma.TransactionClient)
                await this.seed_limits(prisma as unknown as Prisma.TransactionClient)
                // await this.seed_gym_limits(prisma as unknown as Prisma.TransactionClient)
                // await this.seed_gym_staff(prisma as unknown as Prisma.TransactionClient)
                // await this.seed_plans(prisma as unknown as Prisma.TransactionClient)

            });
        } catch (error) {
            console.log(error);
        }
    }

    async seed_users(prisma: Prisma.TransactionClient) {
        console.log('inserting users data...'); 
        try {
            const has_data = await prisma.user.count();
            if (has_data > 0) {
                await prisma.user.deleteMany({});
            }

            await prisma.user.createMany({
                data: data.users
            })

        } catch (error) {
            throw error; 
        }

    }

    async seed_gyms(prisma: Prisma.TransactionClient) {
        console.log('inserting gyms data...'); 
        try {

            const has_data = await prisma.gym.count();
            if (has_data > 0) {
                await prisma.gym.deleteMany({});
            }

            await prisma.gym.createMany({
                data: data.gyms
            })

        } catch (error) {
            throw error; 
        }

    }

    async seed_gym_staff(prisma: Prisma.TransactionClient) {
        console.log('inserting gym_staffs data...'); 
        try {

            const has_data = await prisma.gymStaff.count();
            if (has_data > 0) {
                await prisma.gymStaff.deleteMany({});
            }

            await prisma.gymStaff.createMany({
                data: data.gym_staffs
            })

        } catch (error) {
            throw error; 
        }

    }

    async seed_limits(prisma: Prisma.TransactionClient) {
        console.log('inserting limits data...'); 
        try {

            const has_data = await prisma.limit.count();
            if (has_data > 0) {
                await prisma.limit.deleteMany({});
            }

            await prisma.limit.createMany({
                data: data.limits
            })

        } catch (error) {
            throw error; 
        }

    }

    async seed_gym_limits(prisma: Prisma.TransactionClient) {
        console.log('inserting gym_limits data...'); 
        try {

            const has_data = await prisma.gymLimit.count();
            if (has_data > 0) {
                await prisma.gymLimit.deleteMany({});
            }

            await prisma.gymLimit.createMany({
                data: data.gym_limits
            })

        } catch (error) {
            throw error; 
        }

    }


    async seed_plans(prisma: Prisma.TransactionClient) {
        console.log('inserting plans data...'); 
        try {

            const has_data = await prisma.plan.count();
            if (has_data > 0) {
                await prisma.plan.deleteMany({});
            }

            await prisma.plan.createMany({
                data: data.plans
            })

        } catch (error) {
            throw error; 
        }

    }

}
