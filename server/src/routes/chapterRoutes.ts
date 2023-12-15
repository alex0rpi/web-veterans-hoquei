import Router from '@koa/router';
import { z } from 'zod';
import {
  createChapter,
  getChapters,
  getChapterById,
  getUserChapters,
  modifyChapter,
} from '../controllers';
import { authenticate, authorize, validate } from '../middleware';
import { chapterCreateSchema } from '../schemas';
import { pathRoot } from './allRoutes';
import { USER_ROLE } from '@prisma/client';

const chapterRouter = new Router();

chapterRouter.prefix(pathRoot.v1.chapters);

chapterRouter.get('/me', authenticate, authorize(USER_ROLE.ADMIN), getUserChapters);

chapterRouter.post(
  '/',
  authenticate,
  authorize(USER_ROLE.ADMIN),
  validate(z.object({ body: chapterCreateSchema })),
  createChapter
);

chapterRouter.get('/', getChapters);

chapterRouter.get(
  '/id/:chapterId',
  validate(z.object({ params: z.object({ chapterId: z.string() }) })),
  getChapterById
);

chapterRouter.patch('/', authenticate, authorize(USER_ROLE.ADMIN), modifyChapter);

export { chapterRouter };
