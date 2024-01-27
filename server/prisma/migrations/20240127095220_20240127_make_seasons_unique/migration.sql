/*
  Warnings:

  - A unique constraint covering the columns `[season]` on the table `chapters` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "chapters_season_key" ON "chapters"("season");
