"use client";

import { useEffect, useState } from "react";

import { Button } from "@dodycode/ui/button";
import { toast } from "@dodycode/ui/toast";

import { signInWithDiscordAction } from "../_actions/signInWithDiscord";

const SignInWithDiscordButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      toast.loading("Logging in...");
    }
  }, [isLoading]);

  return (
    <Button
      variant="outline"
      type="submit"
      form="discord-form"
      isLoading={isLoading}
      onClick={async () => {
        setIsLoading(true);
        await signInWithDiscordAction();
        setIsLoading(false);
      }}
    >
      Login with Discord
    </Button>
  );
};

export { SignInWithDiscordButton };
