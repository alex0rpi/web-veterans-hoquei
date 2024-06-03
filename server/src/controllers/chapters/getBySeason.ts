import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';
import { NotFoundError } from '../../helpers/errors';

export const getChapterBySeason: Middleware = async (ctx: Context) => {
  const { chapterSeason } = ctx.params;

  const chapter = await prisma.chapter.findFirst({
    where: { season: chapterSeason },
    select: {
      id: true,
      season: true,
      titlePro: true,
      contentPro: true,
      titleBases: true,
      contentBases: true,
      author: {
        select: {
          name: true,
        },
      },
      createdAt: true,
      updatedAt: true,
    },
  });
  if (!chapter) throw new NotFoundError('Chapter not found');

  ctx.status = 200;
  ctx.body = chapter;
};
