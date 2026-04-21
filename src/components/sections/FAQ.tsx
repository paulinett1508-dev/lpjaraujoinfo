"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import Link from "next/link";
import { Plus, WhatsAppIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import { FAQ_ITEMS } from "@/lib/data/faq";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FAQ() {
  return (
    <section className="py-24" id="faq">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

          {/* Lado esquerdo */}
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4">Perguntas que ouvimos toda semana.</h2>
            <p className="lede mt-6">
              Não achou o que procurava? Fala com a gente no WhatsApp — respondemos em
              minutos, de verdade.
            </p>
            <Button variant="whatsapp" className="mt-6" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon width={18} height={18} /> Perguntar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Accordion */}
          <AccordionPrimitive.Root type="single" collapsible defaultValue="item-0">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionPrimitive.Item
                key={item.q}
                value={`item-${i}`}
                className="border-b border-[var(--color-border)] first:border-t py-6"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "w-full flex items-center justify-between gap-6 text-left",
                      "text-[1.0625rem] font-semibold text-[var(--color-primary)] tracking-[-0.01em]",
                      "cursor-pointer bg-transparent border-0 p-0",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded",
                      "[&[data-state=open]_.chev]:bg-[var(--color-primary)]",
                      "[&[data-state=open]_.chev]:text-white",
                      "[&[data-state=open]_.chev]:border-[var(--color-primary)]",
                      "[&[data-state=open]_.chev]:rotate-45",
                    )}
                  >
                    {item.q}
                    <span
                      className={cn(
                        "chev shrink-0 w-8 h-8 rounded-full",
                        "border border-[var(--color-border)]",
                        "grid place-items-center",
                        "transition-all duration-[220ms]",
                        "text-[var(--color-primary)]",
                      )}
                      aria-hidden="true"
                    >
                      <Plus size={14} />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content
                  className={cn(
                    "overflow-hidden",
                    "data-[state=open]:animate-[accordion-down_280ms_ease-out]",
                    "data-[state=closed]:animate-[accordion-up_280ms_ease-out]",
                  )}
                >
                  <p className="pt-4 max-w-[64ch] text-[var(--color-muted)] leading-[1.7]">
                    {item.a}
                  </p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>
      </div>
    </section>
  );
}
