import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';
import { TVerifyUser, userVerifyResponse } from '../../schemas/userRoutesSchema';

export const verify: Middleware = async (ctx: Context) => {
  const { emailToken } = ctx.request.body as TVerifyUser;

  if (!emailToken) {
    ctx.status = 404;
    ctx.body = { error: 'Email verification failed 😿' };
    return;
  }

  const existingUser = await prisma.user.findFirst({
    where: { emailToken },
    select: { id: true },
  });

  if (!existingUser) {
    ctx.status = 404;
    ctx.body = { error: 'Email verification failed 😿' };
  }

  await prisma.user.update({
    where: { id: existingUser!.id },
    data: { emailToken: null, isVerified: true },
    // select: { isVerified: true },
  });

  // const parsedVerifiedUser = userVerifyResponse.parse(user);

  ctx.status = 204;
  // ctx.body = user;
};
