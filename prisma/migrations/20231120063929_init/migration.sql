/*
  Warnings:

  - Changed the type of `phone_number` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "_Role" AS ENUM ('admin', 'user');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "_Role" NOT NULL DEFAULT 'user',
DROP COLUMN "phone_number",
ADD COLUMN     "phone_number" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Cash" (
    "id" SERIAL NOT NULL,
    "cash" INTEGER NOT NULL,

    CONSTRAINT "Cash_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");
