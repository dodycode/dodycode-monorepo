import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { GalleryHorizontalEndIcon } from "lucide-react";

import { cn } from ".";
import { SpinnerIcon } from "./icons/spinner-icon";

const icons = {
  galleryVerticalEnd: GalleryHorizontalEndIcon,
  spinner: SpinnerIcon,
} as const;

export type IconProps = Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>;
export type Icon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

export type IconType = keyof typeof icons;

const Icon: React.FC<{
  type: IconType;
  className?: string;
  style?: React.CSSProperties;
}> = ({ type, className, style }) => {
  const IconComponent = icons[type];

  return <IconComponent className={cn("size-5", className)} style={style} />;
};

export { Icon };
