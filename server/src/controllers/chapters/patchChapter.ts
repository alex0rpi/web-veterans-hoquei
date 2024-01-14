import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';
import { NotFoundError, UnauthorizedError } from '../../helpers/errors';
import { TPatchChapter } from '../../schemas/chapterRoutesSchema';
import { User } from '@prisma/client';

export const modifyChapter: Middleware = async (ctx: Context) => {
  const { id, ...newData } = ctx.request.body as TPatchChapter;
  const user = ctx.user as User;

  const chapter = await prisma.chapter.findFirst({
    where: { id },
  });

  if (!chapter) {
    throw new NotFoundError('Resource not found');
  }

  if (chapter.userId !== user.id) {
    throw new UnauthorizedError('You are not allowed to update this resource');
  }

  await prisma.chapter.update({
    where: { id },
    data: { ...newData },
  });
  ctx.status = 204;
};
