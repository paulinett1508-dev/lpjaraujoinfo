import { Check } from "@/components/ui/icons";

const CREDITS = [
  "PEC e-SUS APS",
  "Saúde Brasil 360",
  "Cofinanciamento APS",
  "LGPD compliant",
];

export function CreditStrip() {
  return (
    <section className="border-y border-[var(--color-border)] py-6 bg-[var(--color-surface)]">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <span className="font-[family-name:var(--font-mono)] text-[0.75rem] tracking-[0.08em] text-[var(--color-muted)] uppercase">
            Integrado ao ecossistema SUS
          </span>
          <div className="flex flex-wrap gap-8 items-center">
            {CREDITS.map((label) => (
              <div key={label} className="flex items-center gap-2 text-[0.875rem] text-[var(--color-primary)] font-medium">
                <Check size={16} className="text-[var(--color-success)] shrink-0" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
