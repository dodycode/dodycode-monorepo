import { publicProcedure } from "../../trpc";

// get NextAuth.js session from the tRPC context. details please check trpc.ts file
export const getSessionHandler = publicProcedure.query(({ ctx }) => {
  return ctx.session;
});
