import Koa from 'koa';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { NotFoundError, UnauthorizedError } from '../helpers/errors';
import prisma from '../config/prisma';

export const authenticate = async (ctx: Koa.Context, next: Koa.Next) => {
  const token = ctx.cookies.get('token');
  if (!token) {
    throw new UnauthorizedError();
  }

  const { userId } = jwt.verify(
    token,
    process.env.JWT_SECRET as Secret
  ) as JwtPayload;

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) throw new NotFoundError('User not found');

  ctx.user = user;
  await next();
};

/**
 * Extracts a user from a token and sets it in the context.
 * Unlike the authenticate middleware, it doesn't throw errors
 * for invalid tokens or non-existent users because it's used in
 * controllers that don't require authentication.
 */
export const getUserFromToken = async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.user = null;
  const token = ctx.cookies.get('token');
  if (token) {
    try {
      const { userId } = jwt.verify(
        token,
        process.env.JWT_SECRET as Secret
      ) as JwtPayload;
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          isVerified: true,
          status: true,
        },
      });
      if (user && user.isVerified === true && user.status === 'ACTIVE')
        ctx.user = user;
    } catch (error) {}
  }
  await next();
};
