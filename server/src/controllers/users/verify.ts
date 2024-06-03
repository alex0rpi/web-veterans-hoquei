import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';
import { TVerifyUser } from '../../schemas/userRoutesSchema';
import { InvalidToken, MissingParamError } from '../../helpers/errors';

export const verify: Middleware = async (ctx: Context) => {
  const { emailToken } = ctx.request.body as TVerifyUser;

  if (!emailToken) {
    throw new MissingParamError('authorization');
  }

  const existingUser = await prisma.user.findFirst({
    where: { emailToken },
    select: { id: true, emailTokenExp: true },
  });

  if (!existingUser?.emailTokenExp || existingUser.emailTokenExp < new Date()) {
    prisma.user.delete({ where: { id: existingUser!.id } });
    throw new InvalidToken(
      "Autorització caducada i usuari eliminat, sisplau regístre't de nou"
    );
  }

  await prisma.user.update({
    where: { id: existingUser!.id },
    data: { emailToken: null, isVerified: true },
  });

  ctx.status = 204;
};
