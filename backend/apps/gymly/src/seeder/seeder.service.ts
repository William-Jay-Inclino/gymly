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

                await this.seed_users(prisma as unknown as Prisma.TransactionClient)
                await this.seed_gyms(prisma as unknown as Prisma.TransactionClient)
                await this.seed_gym_users(prisma as unknown as Prisma.TransactionClient)
                await this.seed_plans(prisma as unknown as Prisma.TransactionClient)

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

    async seed_gym_users(prisma: Prisma.TransactionClient) {
        console.log('inserting gym_users data...'); 
        try {

            const has_data = await prisma.gymUser.count();
            if (has_data > 0) {
                await prisma.gymUser.deleteMany({});
            }

            await prisma.gymUser.createMany({
                data: data.gym_users
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
