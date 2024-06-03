import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';
import { UserPatchData } from '../../schemas/userRoutesSchema';
import { hashPassword } from '../../helpers/passwordHash';

export const modifyUser: Middleware = async (ctx: Context) => {
  const { name, email }: UserPatchData = ctx.request.body;
  const user = ctx.user;

  const data: Partial<UserPatchData> = {};
  if (name !== undefined) data.name = name;
  if (email !== undefined) data.email = email;

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data,
  });
  ctx.status = 204;
};
