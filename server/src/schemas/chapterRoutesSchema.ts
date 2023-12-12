import { z } from 'zod';
import { chapterSchema } from './chapter';
import { buildJsonSchemas } from 'fastify-zod';

const chapterCreateSchema = chapterSchema.pick({
  season: true,
  titlePro: true,
  contentPro: true,
  titleBases: true,
  contentBases: true,
  userId: true,
});

const chapterGetResponseSchema = chapterSchema.pick({
  id: true,
  season: true,
  titlePro: true,
  contentPro: true,
  titleBases: true,
  contentBases: true,
  createdAt: true,
  updatedAt: true,
});

const chaptersGetResponseSchema = z.array(chapterGetResponseSchema);

export type TCreateChapter = z.infer<typeof chapterCreateSchema>;

export const { schemas: chapterSchemas, $ref } = buildJsonSchemas({
  chapterCreateSchema,
  chapterGetResponseSchema,
  chaptersGetResponseSchema,
});
