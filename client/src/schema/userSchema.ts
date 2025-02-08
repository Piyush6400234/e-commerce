import { z } from "zod";

export const userSignupSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "must be six character"),
  fullname: z.string().min(1, "fullname is required"),
  contact: z.string().min(10, "contact must be 10 digit"),
});

export type SignupInputState = z.infer<typeof userSignupSchema>;

export const userLoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "must be six character"),
});

export type LoginInputState = z.infer<typeof userLoginSchema>;
