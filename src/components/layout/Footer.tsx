import Link from "next/link";
import { Logo } from "./Logo";
import { WHATSAPP_URL, PHONE_PRIMARY, PHONE_SECONDARY, EMAIL, COMPANY_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary-900)] text-[rgba(255,255,255,0.72)] py-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 mb-12">

          <div className="max-w-xs">
            <Logo dark />
            <p className="text-[0.875rem] leading-relaxed text-[rgba(255,255,255,0.64)] mt-4">
              Tecnologia pra saúde pública municipal. Servidor em nuvem, monitoramento
              dos indicadores APS e painel de chamadas pras UBSs — tudo integrado ao PEC e-SUS.
            </p>
          </div>

          <div>
            <h5 className="text-[0.75rem] tracking-[0.1em] uppercase text-[rgba(255,255,255,0.56)] mb-4 font-semibold font-[family-name:var(--font-ui)]">
              Produtos
            </h5>
            <ul className="flex flex-col gap-2 list-none p-0 m-0 text-[0.875rem]">
              <li><Link href="#produtos" className="text-[rgba(255,255,255,0.86)] hover:text-white transition-colors">Servidor em Nuvem</Link></li>
              <li><Link href="#produtos" className="text-[rgba(255,255,255,0.86)] hover:text-white transition-colors">Indica eSUS</Link></li>
              <li><Link href="#produtos" className="text-[rgba(255,255,255,0.86)] hover:text-white transition-colors">Painel de Chamadas</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[0.75rem] tracking-[0.1em] uppercase text-[rgba(255,255,255,0.56)] mb-4 font-semibold font-[family-name:var(--font-ui)]">
              Institucional
            </h5>
            <ul className="flex flex-col gap-2 list-none p-0 m-0 text-[0.875rem]">
              <li><Link href="#pra-quem"    className="text-[rgba(255,255,255,0.86)] hover:text-white transition-colors">Pra quem é</Link></li>
              <li><Link href="#diferenciais" className="text-[rgba(255,255,255,0.86)] hover:text-white transition-colors">Diferenciais</Link></li>
              <li><Link href="#faq"         className="text-[rgba(255,255,255,0.86)] hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#contato"     className="text-[rgba(255,255,255,0.86)] hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[0.75rem] tracking-[0.1em] uppercase text-[rgba(255,255,255,0.56)] mb-4 font-semibold font-[family-name:var(--font-ui)]">
              Contato
            </h5>
            <ul className="flex flex-col gap-2 list-none p-0 m-0 text-[0.875rem] text-[rgba(255,255,255,0.72)]">
              <li>{PHONE_PRIMARY}</li>
              <li>{PHONE_SECONDARY}</li>
              <li>{EMAIL}</li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                   className="text-[rgba(255,255,255,0.86)] hover:text-white transition-colors">
                  WhatsApp →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-wrap justify-between gap-4 text-[0.75rem] text-[rgba(255,255,255,0.5)]">
          <div>© 2026 {COMPANY_NAME} · CNPJ sob consulta</div>
          <div className="flex gap-4">
            <span>Política de Privacidade</span>
            <span>Termos de Uso</span>
            <span>LGPD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
