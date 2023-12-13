import { Context, Middleware } from 'koa';

export const getMe: Middleware = (ctx: Context) => {
  ctx.status = 204;
};
