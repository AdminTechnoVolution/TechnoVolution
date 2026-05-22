import { cn } from "@/lib/utils";

type PageMainProps = {
  children: React.ReactNode;
  className?: string;
};

/** Wrapper for inner pages — offsets fixed header */
export function PageMain({ children, className }: PageMainProps) {
  return <div className={cn("pt-20", className)}>{children}</div>;
}
