"use client";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "@/lib/schemas";
import { useForm } from "react-hook-form";
import { ReloadIcon } from "@radix-ui/react-icons";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { sendEmail } from "@/actions/sendEmail";
import { motion } from "framer-motion";
import { useInViewHook } from "@/lib/hooks";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SectionHeading from "./SectionHeading";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(true);

  const { ref } = useInViewHook("Contact", 0.9);

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ContactFormSchema>) => {
    const result: any = await sendEmail(data);
    if (result?.data) {
      toast.success("Email sent successfully");
      form.reset();
      return;
    } else if (result?.error) {
      toast.error("Something went wrong");
      return;
    }
  };

  useEffect(() => {
    setIsSubmitting(form.formState.isSubmitting);
  }, [form.formState.isSubmitting]);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="text-center scroll-mt-28 max-w-[50rem] mb-28 sm:mb-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading title="Contact" />
      <p>
        Please contact me directly at{" "}
        <a href="mailto:ronyortizop@gmail.com" className="underline">
          ronyortizop@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <div className="mt-8 max-w-[50rem] mx-auto text-left border p-4 sm:p-8 rounded dark:bg-black/10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col gap-4 mb-6">
              {/* FIRST NAME */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Only letters allowed"
                          className="bg-grey-50 dark:border-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              {/* LAST NAME */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Only letters allowed"
                          className="bg-grey-50 dark:border-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              {/* EMAIL */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Email Address"
                          className="bg-grey-50 dark:border-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              {/* MESSAGE */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Enter your message here..."
                          className="bg-grey-50 dark:border-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            {/* BUTTONS */}
            <div className="flex justify-between gap-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  form.reset();
                }}
              >
                Reset Form
              </Button>
              <Button type="submit" className="flex-1" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </motion.section>
  );
};

export default ContactForm;
