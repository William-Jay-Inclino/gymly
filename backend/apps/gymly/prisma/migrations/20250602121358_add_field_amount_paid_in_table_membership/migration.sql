/*
  Warnings:

  - Added the required column `amount_paid` to the `memberships` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "memberships" ADD COLUMN     "amount_paid" TEXT NOT NULL;
