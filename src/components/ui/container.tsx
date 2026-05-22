import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 lg:px-8",
        narrow ? "max-w-3xl" : "max-w-6xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "dark" | "darker" | "elevated";
};

export function Section({ children, id, className, variant = "dark" }: SectionProps) {
  const variants = {
    dark: "bg-navy-deep",
    darker: "bg-navy",
    elevated: "bg-navy-light",
  };

  return (
    <section id={id} className={cn("relative py-20 md:py-28", variants[variant], className)}>
      {children}
    </section>
  );
}
