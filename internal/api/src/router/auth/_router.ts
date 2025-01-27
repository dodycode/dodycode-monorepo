import type { TRPCRouterRecord } from "@trpc/server";

import { getSessionHandler } from "./getSession.handler";
import { signOutHandler } from "./signOut.handler";

export const authRouter = {
  getSession: getSessionHandler,
  signOut: signOutHandler,
} satisfies TRPCRouterRecord;
