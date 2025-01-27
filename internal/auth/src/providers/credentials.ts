import "server-only";

import Credentials from "next-auth/providers/credentials";

import { authService } from "@dodycode/utilities";

export const CredentialsProvider = Credentials({
  credentials: {
    email: { label: "Email", type: "text" },
    password: { label: "Password", type: "password" },
    name: { label: "Name", type: "text" },
    action: { label: "Action", type: "text" },
  },
  async authorize(credentials) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!credentials) return null;

    if (credentials.action === "sign-in") {
      const { email, password } = credentials as {
        email: string;
        password: string;
      };

      if (!email || !password) {
        return null;
      }

      const user = await authService.signInWithCredentials(email, password);

      return user;
    }

    if (credentials.action === "sign-up") {
      const { name, email, password } = credentials as {
        name: string;
        email: string;
        password: string;
      };

      if (!name || !email || !password) {
        return null;
      }

      const user = await authService.signUpWithCredentials(
        name,
        email,
        password,
      );

      return user;
    }

    return null;
  },
});
