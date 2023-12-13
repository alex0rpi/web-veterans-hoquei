import Router from '@koa/router';
import { z } from 'zod';
import {
  createChapter,
  getChapters,
  getSingleChapter,
  getUserChapters,
} from '../controllers';
import { authenticate, authorize, validate } from '../middleware';
import { chapterCreateSchema } from '../schemas';
import { pathRoot } from './allRoutes';
import { USER_ROLE } from '@prisma/client';

const chapterRouter = new Router();

chapterRouter.prefix(pathRoot.v1.chapters);

chapterRouter.post(
  '/',
  authenticate,
  authorize(USER_ROLE.ADMIN),
  validate(z.object({ body: chapterCreateSchema })),
  createChapter
);

chapterRouter.get('/', getChapters);

chapterRouter.get(
  '/:chapterId',
  authenticate,
  authorize(USER_ROLE.ADMIN),
  getSingleChapter
);

chapterRouter.get('/:userId', authenticate, authorize(USER_ROLE.ADMIN), getUserChapters);

export { chapterRouter };
