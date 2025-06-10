-- CreateTable
CREATE TABLE "member_time_logs_memberships" (
    "id" SERIAL NOT NULL,
    "member_time_log_id" INTEGER NOT NULL,
    "membership_id" TEXT NOT NULL,

    CONSTRAINT "member_time_logs_memberships_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "member_time_logs_memberships_member_time_log_id_membership__key" ON "member_time_logs_memberships"("member_time_log_id", "membership_id");

-- AddForeignKey
ALTER TABLE "member_time_logs_memberships" ADD CONSTRAINT "member_time_logs_memberships_member_time_log_id_fkey" FOREIGN KEY ("member_time_log_id") REFERENCES "member_time_logs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "member_time_logs_memberships" ADD CONSTRAINT "member_time_logs_memberships_membership_id_fkey" FOREIGN KEY ("membership_id") REFERENCES "memberships"("id") ON DELETE CASCADE ON UPDATE CASCADE;
