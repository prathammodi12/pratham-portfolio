import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border-border text-foreground bg-transparent hover:bg-secondary/50",
        blue: "border-transparent bg-blue-100 text-blue-700 hover:bg-blue-200",
        indigo:
          "border-transparent bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
        emerald:
          "border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
        amber:
          "border-transparent bg-amber-100 text-amber-700 hover:bg-amber-200",
        slate:
          "border-transparent bg-slate-100 text-slate-700 hover:bg-slate-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
