import Koa, { Middleware } from 'koa';
import prisma from '../../config/prisma';

export const createChapter: Middleware = async (ctx: Koa.Context) => {
  const chapterInfo = ctx.request.body;

  await prisma.chapter.create({
    data: { ...chapterInfo },
  });

  ctx.status = 204;
};
