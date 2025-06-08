-- DropForeignKey
ALTER TABLE "gym_staffs" DROP CONSTRAINT "gym_staffs_gym_id_fkey";

-- DropForeignKey
ALTER TABLE "gym_staffs" DROP CONSTRAINT "gym_staffs_user_id_fkey";

-- AddForeignKey
ALTER TABLE "gym_staffs" ADD CONSTRAINT "gym_staffs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gym_staffs" ADD CONSTRAINT "gym_staffs_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
