import prisma from '../../config/prisma';
import { Context, Middleware } from 'koa';

export const getChapters: Middleware = async (ctx: Context) => {
  const chapters = await prisma.chapter.findMany({
    select: {
      id: true,
      season: true,
      titlePro: true,
      contentPro: false,
      titleBases: true,
      contentBases: false,
      createdAt: false,
    },
    orderBy: {
      season: 'asc',
    },
  });
  ctx.status = 200;
  ctx.body = chapters;
};
