"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon, Phone, Mail, Check, ArrowRight } from "@/components/ui/icons";
import { submitLead } from "@/app/actions/lead";
import { WHATSAPP_URL, PHONE_PRIMARY, PHONE_SECONDARY, EMAIL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const CARGO_OPTIONS = [
  "Secretário(a) de Saúde",
  "Coordenador(a) APS",
  "Enfermeiro(a)",
  "Gabinete / Prefeito(a)",
  "TI / Gestão",
  "Outro",
];

function formatPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const inputClass = (hasError: boolean) =>
  cn(
    "w-full px-3.5 py-3 font-[family-name:var(--font-ui)] text-[0.9375rem]",
    "text-[var(--color-text)] bg-[var(--color-surface)]",
    "border rounded-[var(--radius-lg)] outline-none transition-all duration-[160ms]",
    "hover:border-[var(--color-muted-light)]",
    "focus:border-[var(--color-tech)] focus:shadow-[0_0_0_4px_rgba(59,130,246,0.15)]",
    hasError
      ? "border-red-500 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.12)]"
      : "border-[var(--color-border-strong)]"
  );

export function CTAFinal() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ nome: "", municipio: "", cargo: "", whatsapp: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const result = await submitLead(form);
    setLoading(false);
    if (result.ok) {
      setSubmitted(true);
    } else if (result.error) {
      setErrors({ [result.error]: "Campo obrigatório" });
    }
  }

  return (
    <section className="bg-[var(--color-primary)] text-white relative overflow-hidden py-24" id="contato">
      {/* Background geométrico */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 20% 80%,rgba(59,130,246,0.2),transparent 40%)",
          backgroundImage: "linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "auto,64px 64px,64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 items-start">

          {/* Lado esquerdo */}
          <div>
            <span className="eyebrow" style={{ color: "#A5B4FC" }}>Agendar conversa</span>
            <h2 className="text-white mt-4 max-w-[14ch]">
              Vamos olhar juntos a nota do seu município?
            </h2>
            <p className="mt-6 text-[rgba(255,255,255,0.78)] text-[1.0625rem] leading-[1.6] max-w-[40ch]">
              Em 30 minutos a gente entende onde sua APS está hoje, o que o Saúde Brasil
              360 cobra e mostra na prática como o Indica eSUS ajudaria a subir esse
              número.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex gap-3 items-center text-[0.9375rem] text-[rgba(255,255,255,0.92)]">
                <Phone size={18} className="text-[#A5B4FC] shrink-0" aria-hidden="true" />
                <span>
                  <strong className="text-white">{PHONE_PRIMARY}</strong>
                  {" · "}
                  <strong className="text-white">{PHONE_SECONDARY}</strong>
                </span>
              </div>
              <div className="flex gap-3 items-center text-[0.9375rem] text-[rgba(255,255,255,0.92)]">
                <Mail size={18} className="text-[#A5B4FC] shrink-0" aria-hidden="true" />
                {EMAIL}
              </div>
              <div className="flex gap-3 items-center text-[0.9375rem] text-[rgba(255,255,255,0.92)]">
                <WhatsAppIcon width={18} height={18} className="text-[#A5B4FC] shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white underline">
                  Falar no WhatsApp agora
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-[var(--color-surface)] text-[var(--color-text)] rounded-[var(--radius-2xl)] p-8 shadow-[var(--shadow-xl)]">
            {submitted ? (
              <div className="bg-[var(--color-success-100)] border border-[#A7F3D0] rounded-[var(--radius-lg)] p-6 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-[10px] bg-[var(--color-success)] text-white grid place-items-center shrink-0">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="m-0 mb-1 text-[var(--color-success-600)]">Recebemos sua mensagem!</h4>
                  <p className="text-[0.875rem] text-[var(--color-text)]">
                    Nosso time entrará em contato pelo WhatsApp{" "}
                    <strong>{form.whatsapp}</strong> ainda hoje. Obrigado pelo interesse,{" "}
                    {form.nome.split(" ")[0]}!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium mb-2">
                  Receba uma demonstração
                </h3>
                <p className="text-[0.875rem] text-[var(--color-muted)] mb-6">
                  Em menos de 24h entramos em contato pra agendar.
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nome" className="text-[0.8125rem] font-semibold text-[var(--color-primary)] tracking-[-0.005em]">
                      Seu nome
                    </label>
                    <input
                      id="nome"
                      className={inputClass(!!errors.nome)}
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      placeholder="Nome completo"
                      aria-describedby={errors.nome ? "nome-error" : undefined}
                    />
                    {errors.nome && <span id="nome-error" className="text-[0.75rem] text-red-500">{errors.nome}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="municipio" className="text-[0.8125rem] font-semibold text-[var(--color-primary)]">
                        Município / UF
                      </label>
                      <input
                        id="municipio"
                        className={inputClass(!!errors.municipio)}
                        value={form.municipio}
                        onChange={(e) => setForm({ ...form, municipio: e.target.value })}
                        placeholder="Ex: Floriano/PI"
                        aria-describedby={errors.municipio ? "municipio-error" : undefined}
                      />
                      {errors.municipio && <span id="municipio-error" className="text-[0.75rem] text-red-500">{errors.municipio}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="cargo" className="text-[0.8125rem] font-semibold text-[var(--color-primary)]">
                        Cargo
                      </label>
                      <select
                        id="cargo"
                        className={inputClass(!!errors.cargo)}
                        value={form.cargo}
                        onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                        aria-describedby={errors.cargo ? "cargo-error" : undefined}
                      >
                        <option value="">Selecione</option>
                        {CARGO_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.cargo && <span id="cargo-error" className="text-[0.75rem] text-red-500">{errors.cargo}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="whatsapp" className="text-[0.8125rem] font-semibold text-[var(--color-primary)]">
                      WhatsApp
                    </label>
                    <input
                      id="whatsapp"
                      className={inputClass(!!errors.whatsapp)}
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: formatPhone(e.target.value) })}
                      placeholder="(89) 9 9444-5244"
                      inputMode="tel"
                      aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
                    />
                    {errors.whatsapp && <span id="whatsapp-error" className="text-[0.75rem] text-red-500">{errors.whatsapp}</span>}
                  </div>
                </div>

                <div className="flex flex-wrap justify-between items-center mt-6 gap-4">
                  <p className="text-[0.75rem] text-[var(--color-muted)] flex-1 min-w-[200px]">
                    Ao enviar, você concorda com o contato via WhatsApp sobre produtos da Araújo Informática.
                  </p>
                  <Button type="submit" disabled={loading}>
                    {loading ? "Enviando…" : <></>}
                    {!loading && <>Enviar <ArrowRight size={14} /></>}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
