import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  overline,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={cn("mb-14 flex flex-col gap-4", alignClass, className)}>
      {overline ? (
        <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="h-px w-6 bg-cyan-brand/50" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-brand">
            {overline}
          </span>
          <span className="h-px w-6 bg-cyan-brand/50" />
        </div>
      ) : null}
      <h2 className="bg-gradient-to-r from-cyan-brand via-purple-brand to-magenta-brand bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className={cn("max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function GradientText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-cyan-brand via-purple-brand to-magenta-brand bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}
