-- CreateTable
CREATE TABLE "revenues" (
    "id" TEXT NOT NULL,
    "gym_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
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

-- CreateIndex
CREATE INDEX "revenues_gym_id_year_month_idx" ON "revenues"("gym_id", "year", "month");

-- CreateIndex
CREATE INDEX "membership_counts_gym_id_year_month_idx" ON "membership_counts"("gym_id", "year", "month");

-- AddForeignKey
ALTER TABLE "revenues" ADD CONSTRAINT "revenues_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membership_counts" ADD CONSTRAINT "membership_counts_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
