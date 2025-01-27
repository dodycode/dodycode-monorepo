import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@dodycode/ui";
import { ThemeProvider } from "@dodycode/ui/theme";
import { Toaster } from "@dodycode/ui/toast";

import { TRPCReactProvider } from "~/trpc/react";

import "~/styles/globals.css";

import { env } from "~/env";

export const runtime = "nodejs";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://dodycode-monorepo.vercel.app"
      : "http://localhost:3000",
  ),
  title: "Dodycode Monorepo",
  description: "Production ready monorepo for full stack javascript apps",
  openGraph: {
    title: "Dodycode Monorepo",
    description: "Production ready monorepo for full stack javascript apps",
    url: "https://dodycode-monorepo.vercel.app",
    siteName: "Dodycode Monorepo",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dodypras__",
    creator: "@dodypras__",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TRPCReactProvider>{props.children}</TRPCReactProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
