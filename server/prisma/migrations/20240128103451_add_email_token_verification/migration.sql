-- AlterTable
ALTER TABLE "users" ADD COLUMN     "emailToken" TEXT,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false;
