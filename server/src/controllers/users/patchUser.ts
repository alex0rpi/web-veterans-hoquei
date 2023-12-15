import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';
import { TRegisterUser } from '../../schemas/userRoutesSchema';
import { hashPassword } from '../../helpers/passwordHash';

export const modifyUser: Middleware = async (ctx: Context) => {
  const { name, email, password }: TRegisterUser = ctx.request.body;
  const hashedPassword = await hashPassword(password);
  const user = ctx.user;

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });
  ctx.status = 204;
};
