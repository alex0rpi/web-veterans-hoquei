import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';
import { hashPassword } from '../../helpers/passwordHash';
import { TUpdateUserPassword } from '../../schemas/userRoutesSchema';

export const udpatePassword: Middleware = async (ctx: Context) => {
  const { resetToken, newPassword } = ctx.request.body as TUpdateUserPassword;

  if (!resetToken) {
    ctx.status = 404;
    ctx.body = { error: 'Authentication failed 😿' };
    return;
  }

  const existingUser = await prisma.user.findFirst({
    where: { resetToken },
    select: { id: true, email: true, name: true },
  });

  if (!existingUser) {
    ctx.status = 404;
    ctx.body = { error: 'Authentication failed 😿' };
  }

  const hashedPassword = await hashPassword(newPassword);

  await prisma.user.update({
    where: { id: existingUser!.id },
    data: { resetToken: null, password: hashedPassword },
  });
  //   sendPasswordUpdateConfirmation({ name, email });

  ctx.status = 204;
};
