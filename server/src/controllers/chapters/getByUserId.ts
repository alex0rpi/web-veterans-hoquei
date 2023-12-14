import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';

export const getUserChapters: Middleware = async (ctx: Context) => {
  const user = ctx.user;

  const userChapters = await prisma.chapter.findMany({
    where: { userId: user.id },
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
    },
  });

  ctx.status = 200;
  ctx.body = userChapters;
};
