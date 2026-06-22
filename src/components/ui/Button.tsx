import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "pastel-teal" | "pastel-mint" | "pastel-blush" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-forest-ink)] text-[var(--color-cream-paper)] shadow-[var(--shadow-subtle)] hover:opacity-90",
  outline:
    "border border-[var(--color-forest-ink)] text-[var(--color-forest-ink)] bg-transparent hover:bg-[var(--color-forest-ink)] hover:text-[var(--color-cream-paper)]",
  "pastel-teal":
    "bg-[var(--color-sticky-note-teal)] text-[var(--color-forest-ink)] hover:brightness-95",
  "pastel-mint":
    "bg-[var(--color-sticky-note-mint)] text-[var(--color-forest-ink)] hover:brightness-95",
  "pastel-blush":
    "bg-[var(--color-sticky-note-blush)] text-[var(--color-forest-ink)] hover:brightness-95",
  ghost:
    "text-[var(--color-forest-ink)] opacity-70 hover:opacity-100 hover:bg-[var(--color-whisper-gray)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-10 py-[19px] text-base gap-2",
};

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = "primary", size = "md", arrow, className, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-banana-yellow)]",
      "disabled:opacity-40 disabled:pointer-events-none",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (props.href) {
      const { href, ...linkProps } = props as ButtonAsLink;
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...linkProps}
        >
          {arrow && <span aria-hidden="true">→ </span>}
          {children}
        </Link>
      );
    }

    const { ...buttonProps } = props as ButtonAsButton;
    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...buttonProps}
      >
        {arrow && <span aria-hidden="true">→ </span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonVariant, type ButtonSize, type ButtonProps };
