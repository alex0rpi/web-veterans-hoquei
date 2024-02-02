import Koa from 'koa';
import jwt, { Secret } from 'jsonwebtoken';
import { checkPassword } from '../../helpers/passwordHash';
import prisma from '../../config/prisma';
import { userLoginResponse } from '../../schemas';
import { TLoginUser } from '../../schemas/userRoutesSchema';
import { ValidationError } from '../../helpers/errors';

type TLoginUserWithPassword = TLoginUser & { password: string };

export const login = async (ctx: Koa.Context) => {
  const { email, password } = ctx.request.body as TLoginUserWithPassword;
  const expirationInMilliseconds = 86400000;

  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      password: true,
      isVerified: true,
      status: true,
    },
  });

  if (user) {
    if (user.isVerified === false || user.status !== 'ACTIVE') {
      ctx.status = 403;
      ctx.body = { error: 'Only verified and activated users can login' };
      return;
    }

    const isPasswordValid = await checkPassword(password, user.password);

    if (!isPasswordValid) {
      throw new ValidationError('Invalid password');
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as Secret, {
      expiresIn: expirationInMilliseconds.toString(),
    });

    ctx.cookies.set('token', token, {
      httpOnly: true,
      maxAge: expirationInMilliseconds,
    });

    const parsedUser = userLoginResponse.parse(user);

    ctx.status = 200;
    ctx.body = parsedUser;
  }
};
