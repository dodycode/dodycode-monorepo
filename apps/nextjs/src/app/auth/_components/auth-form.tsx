"use client";

import type { AuthFormValues } from "@dodycode/validators/auth";

import { cn } from "@dodycode/ui";
import { Form, useForm } from "@dodycode/ui/form";
import { toast } from "@dodycode/ui/toast";
import { authSchema } from "@dodycode/validators/auth";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const AuthForm: React.FC<Props> = ({ children, className }) => {
  const form = useForm({
    schema: authSchema,
    defaultValues: {
      action: "sign-in",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: AuthFormValues) => {
    if (data.action === "sign-in") {
      toast.info("Sign In Clicked");
    }

    if (data.action === "sign-up") {
      toast.info("Sign Up Clicked");
    }

    console.log("data", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6", className)}
      >
        {children}
      </form>
    </Form>
  );
};

export { AuthForm };
