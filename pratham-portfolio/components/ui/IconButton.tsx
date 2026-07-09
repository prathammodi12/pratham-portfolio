import * as React from "react";
import { Button, type ButtonProps } from "./Button";
import { cn } from "@/lib/utils";

export interface IconButtonProps extends ButtonProps {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size="icon"
        variant="outline"
        className={cn(
          "h-14 w-14 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow",
          className
        )}
        {...props}
      />
    );
  }
);
IconButton.displayName = "IconButton";

export { IconButton };
