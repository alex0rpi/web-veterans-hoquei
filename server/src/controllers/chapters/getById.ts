import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';
import { NotFoundError } from '../../helpers/errors';

export const getChapterById: Middleware = async (ctx: Context) => {
  const { chapterId } = ctx.params;
  console.log('ctx.params: ', ctx.params);

  console.log('chapterId: ', chapterId);

  const chapter = await prisma.chapter.findUnique({
    where: { id: chapterId },
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
