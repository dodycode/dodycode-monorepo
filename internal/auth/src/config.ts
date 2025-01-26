import type {
  DefaultSession,
  NextAuthConfig,
  Session as NextAuthSession,
} from "next-auth";
import { skipCSRFCheck } from "@auth/core";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { encode as defaultEncode } from "next-auth/jwt";
import Discord from "next-auth/providers/discord";
import { v4 as uuid } from "uuid";

import { db } from "@dodycode/db/client";
import { Account, Session, User } from "@dodycode/db/schema";

import { env } from "../env";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

const adapter = DrizzleAdapter(db, {
  usersTable: User,
  accountsTable: Account,
  sessionsTable: Session,
});

export const isSecureContext = env.NODE_ENV !== "development";

export const authConfig = {
  adapter,
  // In development, we need to skip checks to allow Expo to work
  ...(!isSecureContext
    ? {
        skipCSRFCheck: skipCSRFCheck,
        trustHost: true,
      }
    : {}),
  secret: env.AUTH_SECRET,
  providers: [
    Discord({
      clientId: env.AUTH_DISCORD_ID,
      clientSecret: env.AUTH_DISCORD_SECRET,
    }),
  ],
  callbacks: {
    session: (opts) => {
      if (!("user" in opts))
        throw new Error("unreachable with session strategy");

      return {
        ...opts.session,
        user: {
          ...opts.session.user,
          id: opts.user.id,
        },
      };
    },
    jwt({ token, account }) {
      // Initiate new custom property on the token to be used later
      token.credentials = false;
      if (account?.provider === "credentials") {
        token.credentials = true;
      }
      return token;
    },
  },
  // Next Auth credentials provider with database strategy
  // https://youtu.be/rZ-WNsxu17s?si=x92I8z-QGqgh2kEt
  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        if (!params.token.sub) {
          throw new Error("No user id found in token");
        }

        const sessionToken = await createSessionToken({
          userId: params.token.sub,
        });

        if (!sessionToken) return defaultEncode(params);

        return sessionToken;
      }

      return defaultEncode(params);
    },
  },
} satisfies NextAuthConfig;

export const validateToken = async (
  token: string,
): Promise<NextAuthSession | null> => {
  const sessionToken = token.slice("Bearer ".length);
  const session = await adapter.getSessionAndUser?.(sessionToken);
  return session
    ? {
        user: {
          ...session.user,
        },
        expires: session.session.expires.toISOString(),
      }
    : null;
};

export const invalidateSessionToken = async (token: string) => {
  const sessionToken = token.slice("Bearer ".length);
  await adapter.deleteSession?.(sessionToken);
};

export const createSessionToken = async ({ userId }: { userId?: string }) => {
  if (!userId) return;

  const sessionToken = uuid();
  const session = await adapter.createSession?.({
    sessionToken,
    userId,

    // expires in 1 hour
    expires: new Date(Date.now() + 60 * 60 * 1000),
  });

  if (!session) throw new Error("Failed to create session");

  return sessionToken;
};
