import { Gym, GymUser, Plan, Role, User } from "apps/gymly/prisma/generated/client";
import { faker } from "@faker-js/faker";

const owner_id = faker.string.uuid();

export const users: User[] = [
    {
        id: faker.string.uuid(),
        username: 'admin',
        password_hash: 'admin123',
        role: Role.ADMIN,
        contact_number: '09106024370',
        is_active: true,
        created_at: new Date(),
        created_by: 'system'
    },
    {
        id: owner_id,
        username: 'jay',
        password_hash: 'jay123',
        role: Role.GYM_OWNER,
        contact_number: '09106024370',
        is_active: true,
        created_at: new Date(),
        created_by: 'system'
    },
    {
        id: faker.string.uuid(),
        username: 'hannah',
        password_hash: 'hannah123',
        role: Role.GYM_STAFF,
        contact_number: '09106024370',
        is_active: true,
        created_at: new Date(),
        created_by: 'system'
    },
]

const gym_id = faker.string.uuid();

export const gyms: Gym[] = [
    {
        id: gym_id,
        name: 'Gym Buddies',
        location: '123 Fitness St, Health City, HC 12345',
        created_by: 'system',
        created_at: new Date(),
    }
]

export const gym_users: GymUser[] = [
    {
        id: faker.string.uuid(),
        user_id: owner_id,
        gym_id,
    }
]

export const plans: Plan[] = [
    {
        id: faker.string.uuid(),
        gym_id,
        name: "1 Day",
        description: "Access to all gym facilities for a single day.",
        price: "200",
        num_of_days: 1,
        num_of_sessions: null,
        created_by: 'system',
        created_at: new Date(),
    },
    {
        id: faker.string.uuid(),
        gym_id,
        name: "1 Session Boxing",
        description: "One boxing class session with a trainer.",
        price: "250",
        num_of_days: null,
        num_of_sessions: 1,
        created_by: 'system',
        created_at: new Date(),
    },
    {
        id: faker.string.uuid(),
        gym_id,
        name: "1 Month",
        description: "Monthly plan for consistent training.",
        price: "1000",
        num_of_days: 30,
        num_of_sessions: null,
        created_by: 'system',
        created_at: new Date(),
    },
    {		
        id: faker.string.uuid(),
        gym_id,
        name: "10 Sessions Boxing",
        description: "Ten boxing class sessions, use anytime within the validity period.",
        price: "1200",
        num_of_days: null,
        num_of_sessions: 10,
        created_by: 'system',
        created_at: new Date(),
    },
    {
        id: faker.string.uuid(),
        gym_id,
        name: "3 Months",
        description: "Quarterly plan to stay on track.",
        price: "2700",
        num_of_days: 90,
        num_of_sessions: null,
        created_by: 'system',
        created_at: new Date(),
    },
];
