import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  dark?: boolean;
  className?: string;
}

export function Logo({ dark = false, className }: LogoProps) {
  return (
    <Link
      href="#top"
      className={cn(
        "flex items-center gap-2.5",
        "font-[family-name:var(--font-display)] font-medium text-[1.0625rem]",
        "tracking-[-0.02em] no-underline",
        dark ? "text-white" : "text-[var(--color-primary)]",
        className
      )}
    >
      <Image
        src="/logo-araujo.svg"
        alt="Araújo Informática"
        width={40}
        height={40}
        className="rounded-[10px] shrink-0"
        priority
      />
      <div className="flex flex-col leading-[1.1]">
        <span style={{ color: dark ? "#fff" : undefined }}>Araújo Informática</span>
        <small
          className={cn(
            "font-[family-name:var(--font-ui)] text-[0.6875rem] tracking-[0.04em] uppercase font-medium",
            dark ? "text-[rgba(255,255,255,0.56)]" : "text-[var(--color-muted)]"
          )}
        >
          Telecomunicação · PEC e-SUS
        </small>
      </div>
    </Link>
  );
}
