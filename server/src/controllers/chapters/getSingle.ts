import { Context, Middleware } from 'koa';

export const getSingleChapter: Middleware = (ctx: Context) => {
  console.log('getOneChapter');
  ctx.status = 200;
};
