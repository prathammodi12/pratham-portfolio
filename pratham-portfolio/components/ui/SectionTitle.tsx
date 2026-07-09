import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionTitleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  subtitle: React.ReactNode;
  title: React.ReactNode;
  subtitleColorClassName?: string;
  center?: boolean;
}

export function SectionTitle({
  subtitle,
  title,
  subtitleColorClassName = "text-indigo-400 dark:text-indigo-400",
  center = true,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-20 flex flex-col",
        center ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "font-bold tracking-widest text-sm uppercase mb-4 block",
          subtitleColorClassName
        )}
      >
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white glow-text leading-tight tracking-tight">
        {title}
      </h2>
    </div>
  );
}
