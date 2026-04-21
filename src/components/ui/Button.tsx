import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-semibold leading-none whitespace-nowrap cursor-pointer",
    "border border-transparent",
    "transition-all duration-[180ms]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "active:translate-y-px",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--color-primary)] text-white",
          "shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_8px_24px_-8px_rgba(30,42,94,0.5)]",
          "hover:bg-[var(--color-primary-900)] hover:-translate-y-px",
          "hover:shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_12px_28px_-8px_rgba(30,42,94,0.6)]",
          "focus-visible:ring-[var(--color-primary)]",
        ],
        secondary: [
          "bg-[var(--color-surface)] text-[var(--color-primary)]",
          "border-[var(--color-border-strong)]",
          "hover:border-[var(--color-primary)]",
          "focus-visible:ring-[var(--color-primary)]",
        ],
        ghost: [
          "bg-transparent text-[var(--color-primary)]",
          "hover:bg-[var(--color-primary-50)]",
          "focus-visible:ring-[var(--color-primary)]",
        ],
        whatsapp: [
          "bg-[var(--color-success)] text-white",
          "shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_8px_24px_-8px_rgba(16,185,129,0.45)]",
          "hover:bg-[var(--color-success-600)] hover:-translate-y-px",
          "hover:shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_12px_28px_-8px_rgba(16,185,129,0.55)]",
          "focus-visible:ring-[var(--color-success)]",
        ],
      },
      size: {
        sm: "px-3.5 py-2 text-[0.8125rem] rounded-[var(--radius-md)]",
        md: "px-[22px] py-3 text-[0.9375rem] rounded-[var(--radius-lg)]",
        lg: "px-7 py-4 text-base rounded-[var(--radius-xl)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
