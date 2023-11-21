import { z } from 'zod';
// import { buildJsonSchemas } from 'fastify-zod';
import { userSchema } from './userSchema';
import { passwordRegex } from './passwordRegex';

const userRegisterSchema = userSchema
  .pick({
    email: true,
    name: true,
  })
  .extend({
    password: z.string().min(8).regex(passwordRegex),
    confirmPassword: z.string().min(8).regex(passwordRegex),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

// const loginUserSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6).max(100),
// });

// export const { schemas: userSchemas, $ref } = buildJsonSchemas({
//   createUserSchema,
//   loginUserSchema,
// });

export type TCreateUser = z.infer<typeof userRegisterSchema>;
// export type TLoginUser = z.infer<typeof loginUserSchema>;
