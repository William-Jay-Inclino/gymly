import { Gym, Plan, Role, User } from "apps/gymly/prisma/generated/client";
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
        username: 'joshua',
        password_hash: 'joshua123',
        role: Role.GYM_INSTRUCTOR,
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


export const gyms: Gym[] = [
    {
        id: faker.string.uuid(),
        name: 'Gym Buddies',
        location: '123 Fitness St, Health City, HC 12345',
        owner_id,
        created_by: 'system',
        created_at: new Date(),
    }
]


export const plans: Plan[] = [
  {
    id: faker.string.uuid(),
    name: "1 Week",
    description: "Short-term access for quick workouts.",
    price: "300",
    num_of_days: 7,
    num_of_sessions: 3,
    is_active: true,
    is_default: false,
    created_by: 'system',
    created_at: new Date(),
  },
  {
    id: faker.string.uuid(),
    name: "1 Month",
    description: "Monthly plan for consistent training.",
    price: "1000",
    num_of_days: 30,
    num_of_sessions: 12,
    is_active: true,
    is_default: true,  // Set 1 Month as default
    created_by: 'system',
    created_at: new Date(),
  },
  {
    id: faker.string.uuid(),
    name: "3 Months",
    description: "Quarterly plan to stay on track.",
    price: "2700",
    num_of_days: 90,
    num_of_sessions: 36,
    is_active: true,
    is_default: false,
    created_by: 'system',
    created_at: new Date(),
  },
  {
    id: faker.string.uuid(),
    name: "6 Months",
    description: "Half-year plan for serious commitment.",
    price: "5000",
    num_of_days: 180,
    num_of_sessions: 72,
    is_active: true,
    is_default: false,
    created_by: 'system',
    created_at: new Date(),
  },
  {
    id: faker.string.uuid(),
    name: "1 Year",
    description: "Year-long access with the best value.",
    price: "9000",
    num_of_days: 365,
    num_of_sessions: 150,
    is_active: true,
    is_default: false,
    created_by: 'system',
    created_at: new Date(),
  },
];
