-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'GYM_OWNER', 'GYM_STAFF');

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" TEXT NOT NULL,
    "gym_id" TEXT,
    "username" TEXT NOT NULL,
    "table" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "reference_id" TEXT,
    "metadata" JSONB,
    "ip_address" TEXT,
    "device_info" JSONB,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "limits" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "limits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gym_limits" (
    "id" SERIAL NOT NULL,
    "gym_id" TEXT NOT NULL,
    "limit_id" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "gym_limits_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "revenues" (
    "id" TEXT NOT NULL,
    "gym_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "amount" DECIMAL NOT NULL,
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
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
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
CREATE TABLE "gyms" (
    "id" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "gyms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gym_staffs" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "gym_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "gym_staffs_pkey" PRIMARY KEY ("id")
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
    "is_reminded" BOOLEAN NOT NULL DEFAULT false,
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

-- CreateTable
CREATE TABLE "member_time_logs_memberships" (
    "id" SERIAL NOT NULL,
    "member_time_log_id" INTEGER NOT NULL,
    "membership_id" TEXT NOT NULL,

    CONSTRAINT "member_time_logs_memberships_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "audit_logs_username_idx" ON "audit_logs"("username");

-- CreateIndex
CREATE INDEX "audit_logs_gym_id_idx" ON "audit_logs"("gym_id");

-- CreateIndex
CREATE UNIQUE INDEX "gym_limits_gym_id_limit_id_key" ON "gym_limits"("gym_id", "limit_id");

-- CreateIndex
CREATE UNIQUE INDEX "gym_stats_gym_id_key" ON "gym_stats"("gym_id");

-- CreateIndex
CREATE UNIQUE INDEX "revenues_gym_id_year_month_key" ON "revenues"("gym_id", "year", "month");

-- CreateIndex
CREATE UNIQUE INDEX "membership_counts_gym_id_year_month_key" ON "membership_counts"("gym_id", "year", "month");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE INDEX "users_username_idx" ON "users"("username");

-- CreateIndex
CREATE INDEX "members_firstname_lastname_idx" ON "members"("firstname", "lastname");

-- CreateIndex
CREATE UNIQUE INDEX "gyms_owner_id_key" ON "gyms"("owner_id");

-- CreateIndex
CREATE UNIQUE INDEX "gym_staffs_user_id_key" ON "gym_staffs"("user_id");

-- CreateIndex
CREATE INDEX "gym_staffs_user_id_idx" ON "gym_staffs"("user_id");

-- CreateIndex
CREATE INDEX "gym_staffs_gym_id_idx" ON "gym_staffs"("gym_id");

-- CreateIndex
CREATE INDEX "memberships_member_id_idx" ON "memberships"("member_id");

-- CreateIndex
CREATE INDEX "memberships_gym_id_idx" ON "memberships"("gym_id");

-- CreateIndex
CREATE INDEX "plans_gym_id_idx" ON "plans"("gym_id");

-- CreateIndex
CREATE INDEX "member_time_logs_member_id_gym_id_checked_in_at_idx" ON "member_time_logs"("member_id", "gym_id", "checked_in_at");

-- CreateIndex
CREATE UNIQUE INDEX "member_time_logs_memberships_member_time_log_id_membership__key" ON "member_time_logs_memberships"("member_time_log_id", "membership_id");

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gym_limits" ADD CONSTRAINT "gym_limits_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gym_limits" ADD CONSTRAINT "gym_limits_limit_id_fkey" FOREIGN KEY ("limit_id") REFERENCES "limits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gym_stats" ADD CONSTRAINT "gym_stats_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenues" ADD CONSTRAINT "revenues_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membership_counts" ADD CONSTRAINT "membership_counts_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gyms" ADD CONSTRAINT "gyms_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gym_staffs" ADD CONSTRAINT "gym_staffs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gym_staffs" ADD CONSTRAINT "gym_staffs_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "memberships" ADD CONSTRAINT "memberships_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "member_time_logs" ADD CONSTRAINT "member_time_logs_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "member_time_logs" ADD CONSTRAINT "member_time_logs_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "member_time_logs_memberships" ADD CONSTRAINT "member_time_logs_memberships_member_time_log_id_fkey" FOREIGN KEY ("member_time_log_id") REFERENCES "member_time_logs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "member_time_logs_memberships" ADD CONSTRAINT "member_time_logs_memberships_membership_id_fkey" FOREIGN KEY ("membership_id") REFERENCES "memberships"("id") ON DELETE CASCADE ON UPDATE CASCADE;
