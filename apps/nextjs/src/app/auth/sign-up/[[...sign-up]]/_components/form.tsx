"use client";

import type { SignUpValues } from "@dodycode/validators/auth";
import { useRouter } from "next/navigation";

import { cn } from "@dodycode/ui";
import { Form, useForm } from "@dodycode/ui/form";
import { signUpSchema } from "@dodycode/validators/auth";

import { signUpAction } from "~/app/auth/_actions/signUp";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SignUpForm: React.FC<Props> = ({ children, className }) => {
  const router = useRouter();

  const form = useForm({
    schema: signUpSchema,
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (data: SignUpValues) => {
    await signUpAction(data.name, data.email, data.password);
    router.push("/");
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

export { SignUpForm };
