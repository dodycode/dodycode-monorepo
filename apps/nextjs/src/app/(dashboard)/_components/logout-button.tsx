"use client";

import { useState } from "react";

import { Button } from "@dodycode/ui/button";

import { signOutAction } from "~/app/auth/_actions/signOut";
import { api } from "~/trpc/react";

const LogoutButton: React.FC = () => {
  const utils = api.useUtils();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      isLoading={isLoading}
      onClick={async () => {
        setIsLoading(true);
        await signOutAction();
        await utils.auth.invalidate();
        setIsLoading(false);
      }}
    >
      Logout
    </Button>
  );
};

export { LogoutButton };
