import { z } from 'zod';

export const UserValidationSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email format'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password must be at least 6 characters'),
});

export const UserValidation = {
    UserValidationSchema
}