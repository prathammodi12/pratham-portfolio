import * as React from "react";
import { cn } from "@/lib/utils";

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  from?: string;
  to?: string;
  className?: string;
}

export function GradientText({
  children,
  className,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
