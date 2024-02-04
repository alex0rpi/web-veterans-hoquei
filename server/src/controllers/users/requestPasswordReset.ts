import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';
import { TRequestPasswordReset } from '../../schemas/userRoutesSchema';
import crypto from 'crypto';
import { sendPasswordResetEmail } from '../../utils/sendPasswordResetEmail';

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
      data: { resetToken, resetTokenExp: new Date(Date.now() + 3600000) }, // 1h
      select: { name: true },
    });

    sendPasswordResetEmail({ name, email, resetToken });
  }
  ctx.status = 204;
};
