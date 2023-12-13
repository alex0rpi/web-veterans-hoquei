import { buildJsonSchemas } from 'fastify-zod';
import {
  userLoginResponse,
  userLoginSchema,
  userRegisterSchema,
} from './userRoutesSchema';
import {
  chapterCreateSchema,
  chapterGetResponseSchema,
  chaptersGetResponseSchema,
} from './chapterRoutesSchema';

export const { schemas: schemas, $ref } = buildJsonSchemas({
  userRegisterSchema,
  userLoginSchema,
  userLoginResponse,
  chapterCreateSchema,
  chapterGetResponseSchema,
  chaptersGetResponseSchema,
});
