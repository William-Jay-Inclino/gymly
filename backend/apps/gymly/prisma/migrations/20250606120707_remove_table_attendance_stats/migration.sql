/*
  Warnings:

  - You are about to drop the `attendance_stats` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "attendance_stats" DROP CONSTRAINT "attendance_stats_gym_id_fkey";

-- DropTable
DROP TABLE "attendance_stats";
