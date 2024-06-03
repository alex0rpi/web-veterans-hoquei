import { z } from 'zod';
import { chapterSchema } from './chapter';

export const chapterCreateSchema = chapterSchema.pick({
  season: true,
  titlePro: true,
  contentPro: true,
  titleBases: true,
  contentBases: true,
});

export const chapterGetResponseSchema = chapterSchema.pick({
  id: true,
  season: true,
  titlePro: true,
  contentPro: true,
  titleBases: true,
  contentBases: true,
  createdAt: true,
  updatedAt: true,
});

export const chapterPatchSchema = chapterSchema.partial().pick({
  id: true,
  season: true,
  titlePro: true,
  contentPro: true,
  titleBases: true,
  contentBases: true,
});

export const chaptersGetResponseSchema = z.array(chapterGetResponseSchema);

export type TCreateChapter = z.infer<typeof chapterCreateSchema>;
export type TPatchChapter = z.infer<typeof chapterPatchSchema>;
