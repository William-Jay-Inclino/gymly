-- DropIndex
DROP INDEX "member_time_logs_gym_id_checked_in_at_idx";

-- DropIndex
DROP INDEX "member_time_logs_member_id_idx";

-- CreateIndex
CREATE INDEX "member_time_logs_member_id_gym_id_checked_in_at_idx" ON "member_time_logs"("member_id", "gym_id", "checked_in_at");
