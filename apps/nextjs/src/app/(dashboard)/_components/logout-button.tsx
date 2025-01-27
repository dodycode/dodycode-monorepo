"use client";

import { Button } from "@dodycode/ui/button";
import { toast } from "@dodycode/ui/toast";

import { api } from "~/trpc/react";

const LogoutButton: React.FC = () => {
  const utils = api.useUtils();

  const logout = api.auth.signOut.useMutation({
    onMutate: () => {
      toast.loading("Logging out...");
    },
    onSettled: async () => {
      // Invalidate session query in the context
      await utils.auth.getSession.invalidate();
      toast.success("You have been logged out");
    },
  });

  return (
    <Button isLoading={logout.isPending} onClick={() => logout.mutate()}>
      Logout
    </Button>
  );
};

export { LogoutButton };
