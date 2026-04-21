"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "@/components/ui/icons";
import { IndicaMockup } from "@/components/mockups/IndicaMockup";
import { PanelMockup } from "@/components/mockups/PanelMockup";

function AuthScreen() {
  return (
    <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#1E2A5E 0%,#141C42 100%)", borderRadius: 12, display: "grid", placeItems: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "32px 32px" }} aria-hidden="true" />
      <div style={{ background: "#fff", padding: 28, borderRadius: 14, width: 280, boxShadow: "0 24px 48px rgba(0,0,0,0.3)", position: "relative" }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg,#1E2A5E,#3B82F6)", color: "#fff", display: "grid", placeItems: "center", fontFamily: "Fraunces,serif", fontSize: 18, fontWeight: 500, marginBottom: 16 }}>i</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#1E2A5E" }}>Indica eSUS</div>
        <div style={{ fontSize: 11, color: "#64748B", marginBottom: 16 }}>Acesso ao painel do município</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ padding: "10px 12px", border: "1px solid #E2E8F0", borderRadius: 8, fontSize: 11, color: "#475569" }}>cpf@municipio.gov.br</div>
          <div style={{ padding: "10px 12px", border: "1px solid #3B82F6", borderRadius: 8, fontSize: 11, color: "#475569", boxShadow: "0 0 0 3px rgba(59,130,246,0.15)" }}>••••••••••</div>
          <div style={{ padding: 10, background: "#1E2A5E", color: "#fff", borderRadius: 8, fontSize: 12, fontWeight: 600, textAlign: "center" }}>Entrar</div>
        </div>
      </div>
    </div>
  );
}

function CitizenList() {
  const rows = [
    { cns: "702 8034 5621 0034", name: "Ana Paula dos Santos",   team: "ESF 01", age: 34, last: "12/04" },
    { cns: "702 1094 5811 0928", name: "Carlos Eduardo Lima",    team: "ESF 02", age: 58, last: "08/04" },
    { cns: "702 5567 2341 0872", name: "Maria José da Silva",    team: "ESF 03", age: 72, last: "15/04" },
    { cns: "702 8899 1203 0456", name: "João Batista Oliveira",  team: "ESF 01", age: 41, last: "03/04" },
    { cns: "702 4321 9080 1123", name: "Rita de Cássia Moura",   team: "ESF 04", age: 29, last: "11/04" },
    { cns: "702 6789 0123 4567", name: "Sebastião Pereira",      team: "ESF 02", age: 66, last: "09/04" },
  ];
  return (
    <div style={{ background: "#fff", width: "100%", height: "100%", borderRadius: 12, border: "1px solid #E2E8F0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "12px 16px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#1E2A5E" }}>Listagem de cidadãos</div>
        <div style={{ flex: 1 }} />
        <div style={{ fontSize: 11, padding: "5px 10px", border: "1px solid #E2E8F0", borderRadius: 6, color: "#64748B" }}>Filtro · Equipe ▾</div>
        <div style={{ fontSize: 11, padding: "5px 10px", border: "1px solid #E2E8F0", borderRadius: 6, color: "#64748B" }}>Idade ▾</div>
      </div>
      <div style={{ padding: "6px 16px", borderBottom: "1px solid #E2E8F0", display: "grid", gridTemplateColumns: "1.4fr 1.2fr 0.6fr 0.6fr", gap: 10, fontSize: 10, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: 0.5 }}>
        <div>CNS · Nome</div><div>Equipe</div><div>Idade</div><div>Últ. atend.</div>
      </div>
      {rows.map((r) => (
        <div key={r.cns} style={{ padding: "8px 16px", borderBottom: "1px solid #F1F5F9", display: "grid", gridTemplateColumns: "1.4fr 1.2fr 0.6fr 0.6fr", gap: 10, fontSize: 11, alignItems: "center" }}>
          <div>
            <div style={{ color: "#0F172A", fontWeight: 500 }}>{r.name}</div>
            <div style={{ fontFamily: "JetBrains Mono,monospace", fontSize: 9.5, color: "#94A3B8" }}>{r.cns}</div>
          </div>
          <div><span style={{ padding: "3px 8px", background: "#E8ECF7", color: "#1E2A5E", borderRadius: 10, fontSize: 10, fontWeight: 600 }}>{r.team}</span></div>
          <div style={{ color: "#475569" }}>{r.age}</div>
          <div style={{ color: "#475569" }}>{r.last}</div>
        </div>
      ))}
    </div>
  );
}

function ProdCalendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const intensities = [0, 0.2, 0.4, 0.5, 0.7, 0.9, 0.3, 0, 0.5, 0.8, 0.9, 0.6, 0, 0, 0.7, 0.9, 1, 0.7, 0.4, 0.8, 0.5, 0.3, 0, 0, 0.6, 0.9, 0.7, 0.5, 0.4, 0.2];
  return (
    <div style={{ background: "#fff", width: "100%", height: "100%", borderRadius: 12, border: "1px solid #E2E8F0", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#1E2A5E" }}>Calendário de produtividade · abril/2026</div>
          <div style={{ fontSize: 11, color: "#64748B" }}>ESF 01 · Centro</div>
        </div>
        <div style={{ fontSize: 11, color: "#64748B", padding: "5px 10px", border: "1px solid #E2E8F0", borderRadius: 6 }}>‹ mar abr mai ›</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4 }}>
        {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => <div key={`h${i}`} style={{ fontSize: 10, color: "#94A3B8", fontWeight: 600, textAlign: "center" }}>{d}</div>)}
        {[0, 1].map((i) => <div key={`e${i}`} />)}
        {days.map((d) => {
          const v = intensities[d - 1] ?? 0;
          const bg = v === 0 ? "#F1F5F9" : `rgba(16,185,129,${0.15 + v * 0.75})`;
          return <div key={d} style={{ aspectRatio: "1/1", background: bg, color: v > 0.5 ? "#fff" : "#475569", borderRadius: 6, display: "grid", placeItems: "center", fontSize: 11, fontWeight: 500 }}>{d}</div>;
        })}
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 10, color: "#64748B", marginTop: "auto" }}>
        <span>Menos</span>
        {[0.15, 0.35, 0.6, 0.85].map((v, i) => <i key={i} style={{ width: 14, height: 14, borderRadius: 3, background: `rgba(16,185,129,${v})` }} />)}
        <span>Mais</span>
        <div style={{ flex: 1 }} />
        <span style={{ fontFamily: "JetBrains Mono,monospace" }}>1.475 atendimentos</span>
      </div>
    </div>
  );
}

const SLIDES = [
  { title: "Tela de autenticação",   sub: "Login individual por profissional",      node: <AuthScreen />,   dark: false },
  { title: "Painel inicial · equipes", sub: "Cobertura atual por ESF/ESB/eMulti",   node: <IndicaMockup />, dark: false },
  { title: "Listagem de cidadãos",   sub: "Busca + filtros por equipe",             node: <CitizenList />,  dark: false },
  { title: "Calendário de produtividade", sub: "Visão mensal por equipe",           node: <ProdCalendar />, dark: false },
  { title: "Painel de chamadas",     sub: "UBS Vila Nova · tempo real",             node: <PanelMockup />,  dark: true  },
];

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.children[i] as HTMLElement;
    if (item) track.scrollTo({ left: item.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActive(i);
  };

  return (
    <section className="py-24" id="galeria">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mb-12">
          <div>
            <span className="eyebrow">Dashboards</span>
            <h2 className="mt-3">Telas que o seu time vai usar todo dia.</h2>
          </div>
          <p className="lede lg:text-right max-w-[48ch]">
            Interface leve, feita pra ser entendida em poucos minutos — mesmo por quem
            nunca abriu um painel antes.
          </p>
        </div>
      </div>

      {/* Carousel — edge-to-edge */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8"
        style={{
          scrollPaddingLeft: "max(24px, calc((100vw - 1200px) / 2 + 24px))",
          paddingLeft: "max(24px, calc((100vw - 1200px) / 2 + 24px))",
          paddingRight: "max(24px, calc((100vw - 1200px) / 2 + 24px))",
        }}
        role="region"
        aria-label="Galeria de dashboards"
      >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.title}
            className="shrink-0 w-[86vw] max-w-[760px] snap-start aspect-[16/10] rounded-[var(--radius-xl)] border border-[var(--color-border)] shadow-[var(--shadow-md)] overflow-hidden relative"
            style={{ background: slide.dark ? "#0F172A" : "#fff" }}
          >
            <div className="p-4 h-full">{slide.node}</div>
            <div className="absolute bottom-3 left-3 bg-[rgba(15,23,42,0.82)] text-white text-[0.75rem] px-2.5 py-1.5 rounded-[var(--radius-md)] backdrop-blur-[8px] font-medium">
              {slide.title} · <span className="opacity-70">{slide.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Controles */}
      <div className="container mt-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-1.5" role="tablist" aria-label="Slide do carrossel">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.title}
                role="tab"
                aria-selected={i === active}
                aria-label={slide.title}
                onClick={() => scrollTo(i)}
                className={[
                  "h-1 rounded-sm cursor-pointer transition-all duration-200",
                  i === active
                    ? "bg-[var(--color-primary)] w-10"
                    : "bg-[var(--color-border-strong)] w-6",
                ].join(" ")}
              />
            ))}
          </div>
          <div className="flex gap-2">
            {[
              { label: "Anterior", dir: -1, Icon: ChevronLeft },
              { label: "Próximo",  dir:  1, Icon: ChevronRight },
            ].map(({ label, dir, Icon }) => (
              <button
                key={label}
                aria-label={label}
                onClick={() => scrollTo(Math.max(0, Math.min(SLIDES.length - 1, active + dir)))}
                className={[
                  "w-10 h-10 rounded-[var(--radius-lg)]",
                  "bg-[var(--color-surface)] border border-[var(--color-border)]",
                  "text-[var(--color-primary)] grid place-items-center",
                  "transition-colors hover:border-[var(--color-primary)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]",
                ].join(" ")}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
