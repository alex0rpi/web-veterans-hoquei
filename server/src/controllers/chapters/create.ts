import Koa, { Middleware } from 'koa';
import prisma from '../../config/prisma';

export const createChapter: Middleware = async (ctx: Koa.Context) => {
  const chapterInfo = ctx.request.body;
  const user = ctx.user;

  console.log('chapterInfo', chapterInfo);
  console.log('user', user);

  await prisma.chapter.create({
    data: { ...chapterInfo, userId: user.id },
  });

  ctx.status = 204;
};
