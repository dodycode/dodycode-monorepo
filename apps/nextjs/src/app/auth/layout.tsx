import Image from "next/image";

import { AuthSider } from "./_components/auth-sider";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <AuthSider>{children}</AuthSider>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="placeholder"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          fill
        />
      </div>
    </div>
  );
}
