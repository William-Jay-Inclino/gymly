/*
  Warnings:

  - A unique constraint covering the columns `[owner_id]` on the table `gyms` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "gyms_owner_id_key" ON "gyms"("owner_id");
