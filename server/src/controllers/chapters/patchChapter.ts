import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';

export const modifyChapter: Middleware = async (ctx: Context) => {
  const newChapterInfo = ctx.request.body;

  const user = ctx.user;

  await prisma.chapter.update({
    where: {
      id: user.id,
    },
    data: {
      ...newChapterInfo,
    },
  });
  ctx.status = 204;
};
