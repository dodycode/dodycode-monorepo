"use client";

import type { SignInValues } from "@dodycode/validators/auth";
import { useRouter } from "next/navigation";

import { cn } from "@dodycode/ui";
import { Form, useForm } from "@dodycode/ui/form";
import { signInSchema } from "@dodycode/validators/auth";

import { signInAction } from "../../../_actions/signIn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SignInForm: React.FC<Props> = ({ children, className }) => {
  const router = useRouter();

  const form = useForm({
    schema: signInSchema,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInValues) => {
    await signInAction(data.email, data.password);
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

export { SignInForm };
