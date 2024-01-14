import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import fs from 'fs';
import Koa from 'koa';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import { HttpMethodEnum, koaBody } from 'koa-body';
import path from 'path';
import serve from 'koa-static';
import * as Routes from './routes';
import { errorMiddleware } from './middleware';

dotenv.config();

fs.mkdir(path.join(__dirname, '/static/media'), { recursive: true }, (err) => {
  // eslint-disable-next-line no-console
  if (err) console.log('Static/media folder was not created');
});
const app = new Koa();

app.use(cors());
app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
      imgSrc: ["'self'"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameAncestors: ["'self'", 'http://localhost:3000'],
    },
  })
);
// set Cache-Control headers so the pdf document is then cached by the browser.
app.use(async (ctx, next) => {
  await next();
  if (ctx.url.startsWith('/public/documents')) {
    ctx.set('Cache-Control', 'public, max-age=31536000');
  }
});

// Body parser
app.use(
  koaBody({
    parsedMethods: [
      HttpMethodEnum.POST,
      HttpMethodEnum.PUT,
      HttpMethodEnum.PATCH,
      HttpMethodEnum.DELETE,
    ],
  })
);
app.use(errorMiddleware);

// Serve static files from the 'public' folder
app.use(serve(path.join(__dirname, 'public')));

// Routes
app.use(Routes.userRouter.routes());
app.use(Routes.chapterRouter.routes());

// Only listen if launched from terminal
// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
// if (process.env.NODE_ENV !== 'test') {
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`);
});
// }
export { app };
