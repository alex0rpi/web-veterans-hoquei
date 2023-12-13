import Koa from 'koa';
import jwt, { Secret } from 'jsonwebtoken';
import { checkPassword } from '../../helpers/passwordHash';
import prisma from '../../config/prisma';
import { userLoginResponse } from '../../schemas';

export const login = async (ctx: Koa.Context) => {
  const { email, password } = ctx.request.body;
  const expirationInMilliseconds = 86400000;

  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, name: true, password: true, status: true },
  });

  if (!user) {
    ctx.status = 404;
    ctx.body = { error: 'User not found' };
    return;
  }

  if (user.status !== 'ACTIVE') {
    ctx.status = 403;
    ctx.body = { error: 'Only active users can login' };
    return;
  }

  const isPasswordValid = await checkPassword(password, user.password);

  if (!isPasswordValid) {
    ctx.status = 422;
    ctx.body = { error: 'Invalid password' };
    return;
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
};
