/*
  Warnings:

  - A unique constraint covering the columns `[gym_id,year,month]` on the table `membership_counts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[gym_id,year,month]` on the table `revenues` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "membership_counts_gym_id_year_month_idx";

-- DropIndex
DROP INDEX "revenues_gym_id_year_month_idx";

-- CreateIndex
CREATE UNIQUE INDEX "membership_counts_gym_id_year_month_key" ON "membership_counts"("gym_id", "year", "month");

-- CreateIndex
CREATE UNIQUE INDEX "revenues_gym_id_year_month_key" ON "revenues"("gym_id", "year", "month");
