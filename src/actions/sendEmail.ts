"use server";
import { z } from "zod";
import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/schemas";
import ContactFormEmail from "@/emails/ContactFormEmail";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: ContactFormInputs) => {
  const firstName = formData.firstName;
  const lastName = formData.lastName;
  const email = formData.email;
  const message = formData.message;

  let data;
  try {
    data = await resend.emails.send({
      from: "WDB Portfolio <onboarding@resend.dev>",
      to: "ronyortizop@gmail.com",
      subject: `Email from ${firstName} ${lastName} sent from WDB Portfolio`,
      reply_to: email as string,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ firstName, lastName, email, message }),
    });
  } catch (err: any) {
    return { error: `Failed to send email. Error: ${err.message}` };
  }
  return data;
};
