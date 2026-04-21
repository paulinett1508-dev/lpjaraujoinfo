import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

const cardVariants = cva(
  "bg-[var(--color-surface)] rounded-[var(--radius-xl)] border border-[var(--color-border)]",
  {
    variants: {
      padding: {
        base:    "p-8",
        feature: "p-12 rounded-[var(--radius-2xl)]",
        sm:      "p-6",
      },
      hoverable: {
        true: [
          "transition-all duration-200",
          "hover:border-[var(--color-border-strong)]",
          "hover:shadow-[var(--shadow-md)]",
          "hover:-translate-y-0.5",
        ],
        false: "",
      },
    },
    defaultVariants: {
      padding: "base",
      hoverable: false,
    },
  }
);

export interface CardProps
  extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof cardVariants> {}

export function Card({ className, padding, hoverable, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ padding, hoverable }), className)}
      {...props}
    />
  );
}
