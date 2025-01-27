"use client";

import type { SignInValues, SignUpValues } from "@dodycode/validators/auth";
import { useFormContext } from "react-hook-form";

import { Button } from "@dodycode/ui/button";

import { SignInWithDiscordButton } from "./sign-in-with-discord-btn";

interface Props {
  actionText?: string;
}

const AuthActions: React.FC<Props> = ({ actionText = "Login" }) => {
  const { formState } = useFormContext<SignInValues | SignUpValues>();

  return (
    <>
      <Button
        type="submit"
        isLoading={formState.isSubmitting}
        className="w-full"
      >
        {actionText}
      </Button>
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
      <SignInWithDiscordButton />
    </>
  );
};

export { AuthActions };
