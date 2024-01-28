import { z } from 'zod';
import { userSchema } from './user';
import { passwordRegex } from './passwordRegex';

export const userRegisterSchema = userSchema
  .pick({
    email: true,
    name: true,
  })
  .extend({
    password: z.string().regex(passwordRegex),
    confirmPassword: z.string().regex(passwordRegex),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

export const userVerifySchema = userSchema.pick({
  emailToken: true,
});
export const userVerifyResponse = userSchema.pick({
  isVerified: true,
});

export const userLoginSchema = userSchema.pick({
  email: true,
  password: true,
});

export const userLoginResponse = userSchema.pick({
  id: true,
  name: true,
  isVerified: true,
});

export type TLoginUser = z.infer<typeof userLoginSchema>;
export type TRegisterUser = z.infer<typeof userRegisterSchema>;
export type TVerifyUser = z.infer<typeof userVerifySchema>;

const userEmailVerifySchema = userSchema.pick({
  email: true,
  name: true,
  emailToken: true,
});

export type TUserForVerification = z.infer<typeof userEmailVerifySchema>;
