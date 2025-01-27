import { SessionProvider } from "~/contexts/session-provider";
import { ensureAuth } from "~/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await ensureAuth();

  return <SessionProvider initialData={session}>{children}</SessionProvider>;
}
