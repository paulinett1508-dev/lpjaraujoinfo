import {
  Shield, Cloud, Lock, Headphones, RefreshCw,
  TrendingUp, Users, Clock,
} from "@/components/ui/icons";
import { DIFFS } from "@/lib/data/diffs";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  shield:     Shield,
  cloud:      Cloud,
  lock:       Lock,
  headphones: Headphones,
  refreshCw:  RefreshCw,
  trendingUp: TrendingUp,
  users:      Users,
  clock:      Clock,
};

export function Diffs() {
  return (
    <section className="py-24 bg-[var(--color-surface)] border-y border-[var(--color-border)]" id="diferenciais">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mb-12">
          <div>
            <span className="eyebrow">Diferenciais</span>
            <h2 className="mt-3">Oito compromissos que a gente assina em contrato.</h2>
          </div>
          <p className="lede lg:text-right max-w-[48ch]">
            Segurança, continuidade e proximidade — o que uma Secretaria de Saúde precisa,
            sem firula.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DIFFS.map((diff) => {
            const Icon = ICON_MAP[diff.icon];
            return (
              <div
                key={diff.title}
                className={[
                  "p-6 border border-[var(--color-border)] rounded-[var(--radius-lg)]",
                  "bg-[var(--color-surface)] flex flex-col gap-3",
                  "relative overflow-hidden",
                  "transition-all duration-[220ms]",
                  "hover:border-[var(--color-primary)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]",
                ].join(" ")}
              >
                <div className="w-10 h-10 rounded-[10px] bg-[var(--color-primary-50)] text-[var(--color-primary)] grid place-items-center">
                  {Icon && <Icon size={20} aria-hidden="true" />}
                </div>
                <h4 className="text-[1rem] text-[var(--color-primary)] m-0">{diff.title}</h4>
                <p className="text-[0.875rem] leading-[1.55]">{diff.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
