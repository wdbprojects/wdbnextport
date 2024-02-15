import { z } from "zod";

export const ContactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Email must be in the right format" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .min(4, { message: "Message must be at least 4 characters long" }),
});
