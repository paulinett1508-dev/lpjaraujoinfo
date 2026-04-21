import { Sparkles } from "@/components/ui/icons";
import { PERSONAS } from "@/lib/data/personas";

export function Personas() {
  return (
    <section className="bg-[var(--color-primary-50)] py-24 relative overflow-hidden" id="pra-quem">
      <div className="container">
        <span className="eyebrow">Pra quem é</span>
        <h2 className="mt-4 max-w-[18ch]">
          Três perfis, uma mesma dor: a nota do quadrante.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PERSONAS.map((persona) => (
            <article
              key={persona.role}
              className={[
                "bg-[var(--color-surface)] border border-[var(--color-border)]",
                "rounded-[var(--radius-xl)] p-8",
                "flex flex-col gap-4",
                "transition-all duration-[220ms]",
                "hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)]",
              ].join(" ")}
            >
              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-[var(--radius-lg)] grid place-items-center shrink-0"
                style={{ background: "linear-gradient(135deg,var(--color-primary-50),var(--color-tech-100))" }}
                aria-hidden="true"
              >
                <span className="font-[family-name:var(--font-display)] font-medium text-2xl text-[var(--color-primary)]">
                  {persona.initials}
                </span>
              </div>

              {/* Cabeçalho */}
              <div>
                <h4 className="mb-1 text-[var(--color-primary)]">{persona.role}</h4>
                <p className="text-[0.9375rem]">{persona.lede}</p>
              </div>

              {/* Dores */}
              <ul className="list-none p-0 m-0 border-t border-[var(--color-border)] pt-4 flex flex-col gap-3">
                {persona.pains.map((pain) => (
                  <li
                    key={pain}
                    className="flex gap-2.5 items-start text-[0.875rem] text-[var(--color-text)] leading-[1.5]"
                  >
                    {/* Ícone de alerta inline */}
                    <span
                      className="shrink-0 mt-[3px] w-4 h-4 rounded-[4px] bg-[var(--color-warning-100)] grid place-items-center"
                      aria-hidden="true"
                    >
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1.5 14.5 13H1.5L8 1.5Z" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round"/>
                        <path d="M8 6v4M8 11.5v.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                    {pain}
                  </li>
                ))}
              </ul>

              {/* Win */}
              <div className="mt-auto pt-4 flex gap-2 items-start text-[0.875rem] text-[var(--color-success-600)] font-medium leading-[1.5]">
                <Sparkles size={14} className="shrink-0 mt-[3px]" aria-hidden="true" />
                {persona.win}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
