import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { PrismaService } from '../prisma/prisma.service';
import { User as UserEntity } from './entities/user.entity';
import { Role } from 'apps/gymly/prisma/generated/client';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}



}