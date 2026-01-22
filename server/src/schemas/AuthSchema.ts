import * as z from 'zod';

export const urlQuerySchema = z.object({
  urlPassword: z.string().min(1, 'Password is required')
});