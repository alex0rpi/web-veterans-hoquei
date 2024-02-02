import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  name: z
    .string({
      required_error: 'Invalid name.',
      invalid_type_error: 'Name must be a string.',
    })
    .min(1)
    .max(50),
  email: z
    .string({
      required_error: 'Invalid email address.',
      invalid_type_error: 'Email must be a string.',
    })
    .max(100)
    .email(),
  resetToken: z.string().nullable(),
  isVerified: z.boolean(),
  emailToken: z.string().nullable(),
  password: z
    .string({
      required_error: 'Invalid password.',
      invalid_type_error: 'Password must be a string.',
    })
    .min(8)
    .max(100),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  role: z.enum(['ADMIN', 'REGISTERED']),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
