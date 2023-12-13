import Router from '@koa/router';
import { z } from 'zod';
import {
  createChapter,
  getChapters,
  getSingleChapter,
  getUserChapters,
} from '../controllers';
// import { validate, authenticate } from '../middleware';
// import { userLoginSchema, userRegisterSchema } from '../schemas';
import { pathRoot } from './routes';

const chapterRouter = new Router();

chapterRouter.prefix(pathRoot.v1.chapters);

// chapterRouter.post('/register', validate(z.object({ body: userRegisterSchema })), register);
chapterRouter.post('/', createChapter);

chapterRouter.get('/', getChapters);

chapterRouter.get('/:chapterId', getSingleChapter);

chapterRouter.get('/:userId', getUserChapters);

export { chapterRouter };
