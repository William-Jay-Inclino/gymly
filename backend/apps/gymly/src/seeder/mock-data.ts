import { Gym, GymLimit, GymStaff, Limit, Plan, Prisma, Role, User } from "apps/gymly/prisma/generated/client";
import { faker } from "@faker-js/faker";

const owner_id = 'df30a8c0-9733-4bba-9b0d-1815bc88a550'

export const users: User[] = [
    {
        id: faker.string.uuid(),
        username: 'wj.inclino',
        firstname: 'William Jay',
        lastname: 'Inclino',
        password: 'wj.inclino123',
        role: Role.ADMIN,
        contact_number: '09106024370',
        is_active: true,
        created_at: new Date(),
        created_by: 'system'
    },
    {
        id: owner_id,
        username: 'j.tayag',
        firstname: 'Joshua',
        lastname: 'Tayag',
        password: 'j.tayag123',
        role: Role.GYM_OWNER,
        contact_number: '09106024370',
        is_active: true,
        created_at: new Date(),
        created_by: 'system'
    },
    {
        id: faker.string.uuid(),
        username: 'hg.tudio',
        firstname: 'Hannah Grace',
        lastname: 'Tudio',
        password: 'hg.tudio',
        role: Role.GYM_STAFF,
        contact_number: '09106024370',
        is_active: true,
        created_at: new Date(),
        created_by: 'system'
    },
]

const gym_id = '4a496131-1129-45ac-914f-6f734d408365'

export const gyms: Gym[] = [
    {
        id: gym_id,
        owner_id,
        name: 'Gym Buddies',
        location: '123 Fitness St, Health City, HC 12345',
        created_by: 'system',
        created_at: new Date(),
    }
]

export const gym_staffs: GymStaff[] = [
    {
        id: 1,
        user_id: users[2].id,
        gym_id,
        created_by: 'system',
        created_at: new Date(),
    }
]

export const limits: Limit[] = [
    {id: 1, name: 'Member Limit', value: 50},
    {id: 2, name: 'Plan Limit', value: 5},
    {id: 3, name: 'Staff Limit', value: 2},
    {id: 4, name: 'System Logs', value: 1},
    {id: 5, name: 'Memberships per Member', value: 3},
]

export const gym_limits: GymLimit[] = [
    {
        id: 1,
        limit_id: 1,
        gym_id,
        value: 100,
    },
    {
        id: 2,
        limit_id: 2,
        gym_id,
        value: 5,
    },
    {
        id: 3,
        limit_id: 3,
        gym_id,
        value: 1,
    },
    {
        id: 4,
        limit_id: 4,
        gym_id,
        value: 1,
    },
    {
        id: 5,
        limit_id: 5,
        gym_id,
        value: 3,
    },
]

export const plans: Plan[] = [
    {
        id: faker.string.uuid(),
        gym_id,
        name: "1 Day",
        description: "Access to all gym facilities for a single day.",
        price: new Prisma.Decimal(200),
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
        price: new Prisma.Decimal(250),
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
        price: new Prisma.Decimal(1000),
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
        price: new Prisma.Decimal(1200),
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
        price: new Prisma.Decimal(2700),
        num_of_days: 90,
        num_of_sessions: null,
        created_by: 'system',
        created_at: new Date(),
    },
];