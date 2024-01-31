import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';
import { TRequestPasswordReset } from '../../schemas/userRoutesSchema';
import crypto from 'crypto';
import { sendPasswordResetEmail } from '../../outils/sendPasswordResetEmail';

export const requestPasswordReset: Middleware = async (ctx: Context) => {
  const { email }: TRequestPasswordReset = ctx.request.body;

  const existingUser = await prisma.user.findUnique({
    where: { email },
    select: { name: true },
  });

  if (existingUser) {
    const resetToken: string = crypto.randomBytes(64).toString('hex');

    const { name } = await prisma.user.update({
      where: { email },
      data: { resetToken },
      select: { name: true },
    });

    sendPasswordResetEmail({ name, email, resetToken });
  }
  ctx.status = 204;
};
