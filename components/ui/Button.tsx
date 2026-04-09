"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8835] disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-[#ff8835] text-white rounded-full hover:bg-[#ffaa6b] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,136,53,0.35)]",
      secondary:
        "border border-[#ff8835] text-[#ff8835] rounded-full hover:bg-[#fff0e6] hover:-translate-y-0.5",
      ghost:
        "text-[#2a2420] underline underline-offset-4 hover:text-[#ff8835]",
    };

    const sizes = {
      sm: "px-5 py-2 text-sm",
      md: "px-8 py-3.5 text-sm",
      lg: "px-10 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
