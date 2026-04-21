"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Produtos",      href: "#produtos"     },
  { label: "Pra quem é",   href: "#pra-quem"     },
  { label: "Dashboards",   href: "#galeria"       },
  { label: "Diferenciais", href: "#diferenciais"  },
  { label: "FAQ",          href: "#faq"           },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "bg-[rgba(248,250,252,0.72)] backdrop-saturate-[180%] backdrop-blur-[16px]",
        "border-b border-transparent",
        "transition-[border-color,background] duration-200",
        scrolled && "border-[var(--color-border)] bg-[rgba(255,255,255,0.85)]"
      )}
    >
      <div
        className="container flex items-center justify-between gap-8"
        style={{ height: "var(--nav-height)" }}
      >
        <Logo />

        <nav className="hidden lg:flex items-center gap-6" aria-label="Menu principal">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-[0.9375rem] font-medium text-[var(--color-text)]",
                "px-0.5 py-1.5 relative",
                "transition-colors duration-[160ms]",
                "hover:text-[var(--color-primary)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <Link href="#contato">Falar com time</Link>
          </Button>
          <Button variant="whatsapp" size="sm" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon width={16} height={16} />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
