-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'GYM_OWNER', 'GYM_STAFF');

-- CreateTable
CREATE TABLE "gym_stats" (
    "id" TEXT NOT NULL,
    "gym_id" TEXT NOT NULL,
    "total_revenue" DECIMAL NOT NULL,
    "total_members" INTEGER NOT NULL DEFAULT 0,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "gym_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "password_hash" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'GYM_OWNER',
    "contact_number" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "members" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "contact_number" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gym_users" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "gym_id" TEXT NOT NULL,

    CONSTRAINT "gym_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gyms" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "gyms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendance_stats" (
    "id" TEXT NOT NULL,
    "gym_id" TEXT NOT NULL,
    "average_per_day" JSONB NOT NULL,
    "total_all_time" INTEGER NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "attendance_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "revenues" (
    "id" TEXT NOT NULL,
    "gym_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "revenues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membership_counts" (
    "id" TEXT NOT NULL,
    "gym_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "membership_counts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "memberships" (
    "id" TEXT NOT NULL,
    "member_id" TEXT NOT NULL,
    "gym_id" TEXT NOT NULL,
    "start_date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "sessions_left" INTEGER,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "plan_name" TEXT NOT NULL,
    "plan_description" TEXT,
    "amount_paid" DECIMAL NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "memberships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plans" (
    "id" TEXT NOT NULL,
    "gym_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL NOT NULL,
    "num_of_days" INTEGER,
    "num_of_sessions" INTEGER,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "member_time_logs" (
    "id" SERIAL NOT NULL,
    "member_id" TEXT NOT NULL,
    "gym_id" TEXT NOT NULL,
    "checked_in_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "recorded_by" TEXT NOT NULL,

    CONSTRAINT "member_time_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gym_stats_gym_id_key" ON "gym_stats"("gym_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE INDEX "users_username_idx" ON "users"("username");

-- CreateIndex
CREATE INDEX "members_firstname_lastname_idx" ON "members"("firstname", "lastname");

-- CreateIndex
CREATE INDEX "gym_users_user_id_idx" ON "gym_users"("user_id");

-- CreateIndex
CREATE INDEX "gym_users_gym_id_idx" ON "gym_users"("gym_id");

-- CreateIndex
CREATE UNIQUE INDEX "attendance_stats_gym_id_key" ON "attendance_stats"("gym_id");

-- CreateIndex
CREATE INDEX "revenues_gym_id_year_month_idx" ON "revenues"("gym_id", "year", "month");

-- CreateIndex
CREATE INDEX "membership_counts_gym_id_year_month_idx" ON "membership_counts"("gym_id", "year", "month");

-- CreateIndex
CREATE INDEX "memberships_member_id_idx" ON "memberships"("member_id");

-- CreateIndex
CREATE INDEX "memberships_gym_id_idx" ON "memberships"("gym_id");

-- CreateIndex
CREATE INDEX "plans_gym_id_idx" ON "plans"("gym_id");

-- CreateIndex
CREATE INDEX "member_time_logs_member_id_idx" ON "member_time_logs"("member_id");

-- CreateIndex
CREATE INDEX "member_time_logs_gym_id_checked_in_at_idx" ON "member_time_logs"("gym_id", "checked_in_at");

-- AddForeignKey
ALTER TABLE "gym_stats" ADD CONSTRAINT "gym_stats_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gym_users" ADD CONSTRAINT "gym_users_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gym_users" ADD CONSTRAINT "gym_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_stats" ADD CONSTRAINT "attendance_stats_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenues" ADD CONSTRAINT "revenues_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membership_counts" ADD CONSTRAINT "membership_counts_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "member_time_logs" ADD CONSTRAINT "member_time_logs_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "member_time_logs" ADD CONSTRAINT "member_time_logs_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
