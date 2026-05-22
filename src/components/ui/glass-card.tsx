"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
  hover?: boolean;
};

export function GlassCard({ children, className, accentColor, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.25)]",
        hover && "transition-colors hover:border-white/20 hover:bg-white/[0.06]",
        className,
      )}
    >
      {accentColor ? (
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-30"
          style={{ backgroundColor: accentColor }}
        />
      ) : null}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-purple-brand/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-cyan-brand/10 blur-3xl" />
      <div className="absolute left-[10%] top-[20%] h-px w-[60%] -rotate-[8deg] bg-cyan-brand/10" />
      <div className="absolute right-[5%] top-[45%] h-px w-[40%] rotate-[12deg] bg-purple-brand/10" />
      <div className="absolute bottom-[30%] left-[20%] h-px w-[50%] -rotate-[5deg] bg-magenta-brand/10" />
      <div className="absolute left-[10%] top-[20%] h-1.5 w-1.5 rounded-full bg-cyan-brand/20" />
      <div className="absolute right-[5%] top-[45%] h-1.5 w-1.5 rounded-full bg-purple-brand/20" />
      <div className="absolute bottom-[30%] left-[70%] h-1.5 w-1.5 rounded-full bg-magenta-brand/20" />
    </div>
  );
}
