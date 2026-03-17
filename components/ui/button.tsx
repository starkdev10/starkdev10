import * as React from "react";
import { cn } from "@/lib/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "outline";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-md px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        variant === "default" && "bg-accent text-white hover:opacity-90",
        variant === "ghost" && "hover:bg-white/5",
        variant === "outline" && "border border-border hover:bg-white/5",
        className
      )}
      {...props}
    />
  );
}
