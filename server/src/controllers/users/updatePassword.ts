import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';
import { hashPassword } from '../../helpers/passwordHash';
import { TUpdateUserPassword } from '../../schemas/userRoutesSchema';
import { InvalidToken } from '../../helpers/errors';

export const udpatePassword: Middleware = async (ctx: Context) => {
  const { resetToken, newPassword } = ctx.request.body as TUpdateUserPassword;

  const existingUser = await prisma.user.findFirst({
    where: { resetToken },
    select: { id: true, email: true, name: true, resetTokenExp: true },
  });

  if (existingUser?.resetTokenExp && existingUser.resetTokenExp < new Date()) {
    await prisma.user.update({
      where: { id: existingUser!.id },
      data: { resetToken: null, resetTokenExp: null },
    });
    throw new InvalidToken('Autorització caducada, sisplau refés la petició.');
  }

  const hashedPassword = await hashPassword(newPassword);

  await prisma.user.update({
    where: { id: existingUser!.id },
    data: { resetToken: null, resetTokenExp: null, password: hashedPassword },
  });

  ctx.status = 204;
};
