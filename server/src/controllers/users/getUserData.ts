import { Context, Middleware } from 'koa';

export const getUserData: Middleware = (ctx: Context) => {
  if (ctx.user) {
    const { name, email } = ctx.user;
    const userInfos = { name, email };
    ctx.status = 200;
    ctx.body = userInfos;
  } else {
    ctx.status = 404;
    ctx.body = 'No user found';
    ctx.cookies.set('token', '', { expires: new Date(1), httpOnly: true });
  }
};
