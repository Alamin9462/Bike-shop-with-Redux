import { z } from 'zod';

export const bikeSchema = z.object({
  name: z.string({ required_error: 'Name field is required' }),
  brand: z.string({ required_error: 'Brand field is required' }),
  price: z
    .string({ required_error: 'Price field is required' })
    .transform((v) => Number(v)),
  model: z.string({ required_error: 'Model field is required' }),
  stock: z
    .string({ required_error: 'Stock field is required' })
    .transform((v) => Number(v)),
});
