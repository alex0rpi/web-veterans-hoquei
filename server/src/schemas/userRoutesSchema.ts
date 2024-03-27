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
export type TVerifyUser = z.infer<typeof userVerifySchema>;

export const requestPasswordResetSchema = userSchema.pick({
  email: true,
});
export type TRequestPasswordReset = z.infer<typeof requestPasswordResetSchema>;

export const userUpdatePasswordSchema = userSchema
  .pick({
    resetToken: true,
  })
  .extend({
    newPassword: z.string().regex(passwordRegex),
    confirmNewPassword: z.string().regex(passwordRegex),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Passwords do not match.',
    path: ['confirmNewPassword'],
  });

export type TUpdateUserPassword = z.infer<typeof userUpdatePasswordSchema>;

export const userLoginSchema = userSchema.pick({
  email: true,
  // password: true,
});

export const userLoginResponse = userSchema.pick({
  id: true,
  name: true,
  isVerified: true,
});

export type TLoginUser = z.infer<typeof userLoginSchema>;
export type TRegisterUser = z.infer<typeof userRegisterSchema>;

const userEmailVerifySchema = userSchema.pick({
  email: true,
  name: true,
  emailToken: true,
});
export type TUserForVerification = z.infer<typeof userEmailVerifySchema>;

export type UserPatchData = {
  email?: string;
  name?: string;
  password?: string;
  confirmPassword?: string;
};

export const userPatchSchema = userSchema
  .pick({
    email: true,
    name: true,
  })
  .partial()
  .optional();
