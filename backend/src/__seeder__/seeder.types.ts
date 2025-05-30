
enum Role {
    ADMIN = 'ADMIN',
    GYM_OWNER = 'GYM_OWNER',
    GYM_INSTRUCTOR = 'GYM_INSTRUCTOR',
    GYM_STAFF = 'GYM_STAFF',
    MEMBER = 'MEMBER',
}

interface User {
    id: string
    firstname: string
    middlename?: string
    lastname: string
    email: string
    password_hash: string
    role: Role
}