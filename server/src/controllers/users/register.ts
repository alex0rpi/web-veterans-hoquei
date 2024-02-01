import { Context, Middleware } from 'koa';
import prisma from '../../config/prisma';
import { TRegisterUser } from '../../schemas/userRoutesSchema';
import { hashPassword } from '../../helpers/passwordHash';
import crypto from 'crypto';
import { sendVerificationEmail } from '../../outils/sendVerificationEmail';

export const register: Middleware = async (ctx: Context) => {
  const { name, email, password }: TRegisterUser = ctx.request.body;

  const hashedPassword = await hashPassword(password);

  const emailToken: string = crypto.randomBytes(64).toString('hex');

  await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
      emailToken,
      emailTokenExp: new Date(Date.now() + 86400000), // 24h
    },
  });

  sendVerificationEmail({ name, email, emailToken });
  ctx.status = 204;
};
