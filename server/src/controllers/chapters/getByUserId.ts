import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';
import { TCreateChapter } from '../../schemas/chapterRoutesSchema';

export const getUserChapters: Middleware = async (ctx: Context) => {
  const { season, titlePro, contentPro, titleBases, contentBases }: TCreateChapter =
    ctx.request.body;

  // await prisma.chapter.create({

  // })
  ctx.status = 204;
};
