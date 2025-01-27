import { invalidateSessionToken } from "@dodycode/auth";

import { protectedProcedure } from "../../trpc";

export const signOutHandler = protectedProcedure.mutation(async ({ ctx }) => {
  if (!ctx.token) {
    return { success: false };
  }
  await invalidateSessionToken(ctx.token);
  return { success: true };
});
