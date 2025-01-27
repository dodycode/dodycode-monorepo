import Link from "next/link";

import { Icon } from "@dodycode/ui/icons";

import { AuthForm } from "./auth-form";

interface Props {
  children: React.ReactNode;
}

const AuthSider: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <div className="flex justify-center gap-2 md:justify-start">
        <Link href="/" className="flex items-center gap-2 font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Icon type="galleryVerticalEnd" className="size-4" />
          </div>
          DramaID
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <AuthForm>{children}</AuthForm>
        </div>
      </div>
    </div>
  );
};

export { AuthSider };
