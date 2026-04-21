import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon, ArrowRight } from "@/components/ui/icons";
import { IndicaMockup } from "@/components/mockups/IndicaMockup";
import { WHATSAPP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 pb-24" id="top">
      <div className="geo-grid" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_1fr] gap-12 items-center">

          {/* Texto */}
          <div>
            <span className="eyebrow">Tecnologia pra saúde pública</span>
            <h1 className="mt-6 max-w-[12ch]">
              Infraestrutura{" "}
              <em className="not-italic text-[var(--color-tech)] font-[400] tracking-[-0.04em]">digital</em>{" "}
              pro seu município{" "}
              <em className="not-italic text-[var(--color-tech)] font-[400] tracking-[-0.04em]">performar</em>{" "}
              no Saúde Brasil 360.
            </h1>
            <p className="mt-6 text-[1.1875rem] text-[var(--color-muted)] leading-[1.55] max-w-[52ch]">
              Hospedamos o PEC e-SUS em nuvem, monitoramos os indicadores da APS em
              tempo real e organizamos o fluxo das UBSs — pra que a sua Secretaria de
              Saúde suba no ranking, garanta o cofinanciamento e atenda melhor quem
              precisa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="#contato">
                  Quero uma demonstração <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon width={18} height={18} /> Falar agora no WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { value: "3 soluções",      desc: "Nuvem, monitoramento e painel de chamadas" },
                { value: "100% integrado",  desc: "PEC e-SUS · Saúde Brasil 360" },
                { value: "Backup diário",   desc: "Criptografia AES-256 · LGPD" },
              ].map(({ value, desc }) => (
                <div key={value} className="flex flex-col gap-0.5">
                  <strong className="font-[family-name:var(--font-display)] text-[1.75rem] font-[500] text-[var(--color-primary)] tracking-[-0.02em] leading-none">
                    {value}
                  </strong>
                  <span className="text-[0.8125rem] text-[var(--color-muted)] max-w-[18ch] leading-[1.3]">
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative aspect-[5/4] rounded-[var(--radius-2xl)]">
            <IndicaMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
