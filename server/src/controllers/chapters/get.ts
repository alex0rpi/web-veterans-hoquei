import prisma from '../../config/prisma';
import { Context, Middleware } from 'koa';

export const getChapters: Middleware = async (ctx: Context) => {
  const chapters = await prisma.chapter.findMany({
    select: {
      id: true,
      season: true,
      titlePro: true,
      contentPro: true,
      titleBases: true,
      contentBases: true,
      author: {
        select: {
          id: true,
          name: true,
        },
      },
      createdAt: true,
      updatedAt: true,
    },
  });
  ctx.status = 200;
  ctx.body = chapters;
};
