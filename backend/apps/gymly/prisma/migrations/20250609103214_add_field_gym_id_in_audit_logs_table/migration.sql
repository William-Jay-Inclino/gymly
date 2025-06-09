/*
  Warnings:

  - Added the required column `gym_id` to the `audit_logs` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "audit_logs_table_idx";

-- AlterTable
ALTER TABLE "audit_logs" ADD COLUMN     "gym_id" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "audit_logs_gym_id_idx" ON "audit_logs"("gym_id");

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
