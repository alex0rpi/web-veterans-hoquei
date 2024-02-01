/*
  Warnings:

  - You are about to drop the column `exmailTokenExp` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "exmailTokenExp",
ADD COLUMN     "emailTokenExp" TIMESTAMP(3);
