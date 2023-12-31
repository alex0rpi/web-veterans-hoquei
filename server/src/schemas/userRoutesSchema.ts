import { z } from 'zod';
import { userSchema } from './user';
import { passwordRegex } from './passwordRegex';

export const userRegisterSchema = userSchema
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

export const userLoginSchema = userSchema.pick({
  email: true,
  password: true,
});

export const userLoginResponse = userSchema.pick({
  id: true,
  name: true,
});

export type TLoginUser = z.infer<typeof userLoginSchema>;
export type TRegisterUser = z.infer<typeof userRegisterSchema>;
