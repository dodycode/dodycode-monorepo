"use client";

import type { Session } from "@dodycode/auth";
import { createContext } from "react";

import { api } from "~/trpc/react";

interface Props {
  children: React.ReactNode;
  initialData: Omit<Session, "sessionToken">;
}

interface SessionContextValue {
  session: Omit<Session, "sessionToken">;
  isLoading: boolean;
}

const SessionContext = createContext<SessionContextValue | null>(null);

const SessionProvider: React.FC<Props> = ({ children, initialData }) => {
  const { data: session, isLoading } = api.auth.getSession.useQuery(undefined, {
    initialData,
    placeholderData: initialData,
    staleTime: 10_000,
  });

  if (!session) return null;

  return (
    <SessionContext value={{ session, isLoading }}>{children}</SessionContext>
  );
};

export { SessionProvider };
