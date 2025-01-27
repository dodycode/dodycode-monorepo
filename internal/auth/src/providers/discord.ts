import "server-only";

import Discord from "next-auth/providers/discord";

import { env } from "../../env";

export const DiscordProvider = Discord({
  clientId: env.AUTH_DISCORD_ID,
  clientSecret: env.AUTH_DISCORD_SECRET,
});
