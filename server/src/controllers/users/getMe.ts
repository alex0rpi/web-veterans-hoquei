import { Context, Middleware } from 'koa';

export const getMe: Middleware = (ctx: Context) => {
  if (ctx.user) {
    ctx.status = 200;
    ctx.body = ctx.user;
  } else {
    // ctx.status = 404;
    ctx.body = 'No user connected found';
    ctx.cookies.set('token', '', { expires: new Date(1), httpOnly: true });
  }
};
