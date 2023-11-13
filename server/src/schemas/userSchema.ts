import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

const createUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

const updateUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export const { schemas: userSchemas, $ref } = buildJsonSchemas({
  createUserSchema,
  loginUserSchema,
  updateUserSchema,
});

export type TCreateUser = z.infer<typeof createUserSchema>;
export type TLoginUser = z.infer<typeof loginUserSchema>;
export type TUpdateUser = z.infer<typeof updateUserSchema>;
