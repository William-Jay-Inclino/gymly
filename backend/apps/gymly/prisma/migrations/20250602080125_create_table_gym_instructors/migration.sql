-- CreateTable
CREATE TABLE "gym_instructors" (
    "id" TEXT NOT NULL,
    "gym_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "assigned_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "gym_instructors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "gym_instructors_gym_id_idx" ON "gym_instructors"("gym_id");

-- CreateIndex
CREATE INDEX "gym_instructors_user_id_idx" ON "gym_instructors"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "gym_instructors_gym_id_user_id_key" ON "gym_instructors"("gym_id", "user_id");

-- AddForeignKey
ALTER TABLE "gym_instructors" ADD CONSTRAINT "gym_instructors_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gym_instructors" ADD CONSTRAINT "gym_instructors_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
