/*
  Warnings:

  - You are about to drop the column `description` on the `memberships` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `memberships` table. All the data in the column will be lost.
  - Added the required column `plan_description` to the `memberships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plan_name` to the `memberships` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "memberships" DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "plan_description" TEXT NOT NULL,
ADD COLUMN     "plan_name" TEXT NOT NULL;
