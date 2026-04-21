import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-2.5 py-[5px] text-xs font-semibold tracking-wide rounded-full border",
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--color-primary-50)] text-[var(--color-primary)]",
          "border-[var(--color-primary-100)]",
        ],
        tech: [
          "bg-[var(--color-tech-100)] text-[var(--color-tech-600)]",
          "border-[#BFD8FF]",
        ],
        success: [
          "bg-[var(--color-success-100)] text-[var(--color-success-600)]",
          "border-[#A7F3D0]",
        ],
        warning: [
          "bg-[var(--color-warning-100)] text-[#B45309]",
          "border-[#FDE68A]",
        ],
      },
      dot: {
        true: "before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-current",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      dot: false,
    },
  }
);

export interface BadgeProps
  extends ComponentPropsWithoutRef<"span">,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, dot, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, dot }), className)} {...props} />
  );
}
