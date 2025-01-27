"use server";

import { signIn } from "@dodycode/auth";

export const signInWithDiscordAction = async () => {
  await signIn("discord", {
    redirect: true,
    redirectTo: "/",
  });
};
