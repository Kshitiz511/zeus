"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants = {
  primary:
    "bg-zeus-gold text-zeus-black font-semibold hover:bg-zeus-gold-light shadow-sm hover:shadow-elevated transition-all duration-300",
  secondary:
    "border border-zeus-gold/40 text-zeus-gold hover:bg-zeus-gold/10 backdrop-blur-sm transition-all duration-300",
  ghost:
    "text-zeus-gray-600 hover:text-zeus-black transition-colors duration-200",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-4 text-lg rounded-xl",
};

/**
 * Premium executive button / link component.
 * Renders as <Link> when href is provided, <button> otherwise.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center font-medium cursor-pointer select-none",
      variants[variant],
      sizes[size],
      className
    );

    if ("href" in props && props.href) {
      return (
        <Link href={props.href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...(props as ButtonAsButton)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
