import { z } from 'zod';

export const chapterSchema = z.object({
  id: z.string(),
  season: z
    .string({
      required_error: 'Season is required.',
      invalid_type_error: 'Name must be a string.',
    })
    .length(9),
  titlePro: z
    .string({
      required_error: 'Title Pro is required.',
      invalid_type_error: 'Title must be a string.',
    })
    .min(2)
    .max(100),
  contentPro: z
    .string({
      required_error: 'Content Pro is required.',
      invalid_type_error: 'Content must be a string.',
    })
    .min(2)
    .max(6000),

  titleBases: z
    .string({
      required_error: 'Title Bases is required.',
      invalid_type_error: 'Title must be a string.',
    })
    .min(2)
    .max(100),
  contentBases: z
    .string({
      required_error: 'Content Bases is required.',
      invalid_type_error: 'Content must be a string.',
    })
    .min(2)
    .max(6000),
  userId: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
