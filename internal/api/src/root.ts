import { authRouter } from "./router/auth/_router";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
