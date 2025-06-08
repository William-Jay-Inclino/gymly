/*
  Warnings:

  - The primary key for the `gym_staffs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `gym_staffs` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "gym_staffs" DROP CONSTRAINT "gym_staffs_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "gym_staffs_pkey" PRIMARY KEY ("id");
