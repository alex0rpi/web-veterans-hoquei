import { Context } from 'koa';

export const logout = async (ctx: Context) => {
  ctx.cookies.set('token', null);
  ctx.status = 204;
};
