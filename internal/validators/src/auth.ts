import { z } from "zod";

export const authSchema = z.discriminatedUnion("action", [
  z.object({
    action: z.literal("sign-up"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z.string().min(1, "Password is required"),
  }),
  z.object({
    action: z.literal("sign-in"),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z.string().min(1, "Password is required"),
  }),
]);

export type AuthFormValues = z.infer<typeof authSchema>;
