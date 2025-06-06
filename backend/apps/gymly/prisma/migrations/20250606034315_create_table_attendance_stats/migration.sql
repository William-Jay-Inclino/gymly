-- CreateTable
CREATE TABLE "attendance_stats" (
    "id" TEXT NOT NULL,
    "gym_id" TEXT NOT NULL,
    "average_per_day" JSONB NOT NULL,
    "total_all_time" INTEGER NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "attendance_stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "attendance_stats_gym_id_key" ON "attendance_stats"("gym_id");

-- AddForeignKey
ALTER TABLE "attendance_stats" ADD CONSTRAINT "attendance_stats_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
