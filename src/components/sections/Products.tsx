import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight } from "@/components/ui/icons";
import { CloudMockup } from "@/components/mockups/CloudMockup";
import { IndicaMockup } from "@/components/mockups/IndicaMockup";
import { PanelMockup } from "@/components/mockups/PanelMockup";
import { PRODUCTS } from "@/lib/data/products";
import type { Product } from "@/lib/data/products";

function ProductMockup({ mockup, darkMockup }: Pick<Product, "mockup" | "darkMockup">) {
  return (
    <div
      className="relative aspect-[4/3] rounded-[var(--radius-2xl)] border border-[var(--color-border)] shadow-[var(--shadow-lg)] overflow-hidden"
      style={{
        background: darkMockup ? "#0F172A" : "linear-gradient(145deg,var(--color-primary-50),var(--color-surface))",
        padding: darkMockup ? 8 : 16,
      }}
    >
      {mockup === "cloud"  && <CloudMockup />}
      {mockup === "indica" && <IndicaMockup />}
      {mockup === "panel"  && <PanelMockup />}
    </div>
  );
}

export function Products() {
  return (
    <section className="py-24" id="produtos">
      <div className="container">

        {/* Cabeçalho da seção */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mb-16">
          <div>
            <span className="eyebrow">Os 3 produtos</span>
            <h2 className="mt-3 max-w-[18ch]">
              Uma base estável, olhos em tudo e fila organizada na recepção.
            </h2>
          </div>
          <p className="lede lg:text-right max-w-[48ch]">
            Cada produto resolve uma parte específica do problema — e os três funcionam
            juntos, integrados ao PEC e-SUS.
          </p>
        </div>

        {/* Rows de produto */}
        <div className="flex flex-col">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.number}
              className={[
                "grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16 items-center py-16",
                i > 0 ? "border-t border-[var(--color-border)]" : "",
              ].join(" ")}
            >
              <div className={`flex flex-col gap-4 ${product.reverse ? "lg:order-2" : ""}`}>
                <div className="font-[family-name:var(--font-mono)] text-[0.8125rem] text-[var(--color-muted)] tracking-[0.05em]">
                  {product.number} · {product.category}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-[2rem] font-[450] tracking-[-0.025em] leading-[1.1] max-w-[14ch]">
                  {product.name}
                </h3>
                <p className="text-base max-w-[52ch] leading-[1.65]">{product.description}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mt-4 list-none p-0">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex gap-2.5 items-start text-[0.875rem] text-[var(--color-text)] leading-[1.5]">
                      <Check size={16} className="text-[var(--color-success)] shrink-0 mt-[3px]" aria-hidden="true" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-6">
                  <Button asChild>
                    <Link href={product.primaryCta.href}>
                      {product.primaryCta.label} <ArrowRight size={14} />
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href={product.secondaryCta.href}>{product.secondaryCta.label}</Link>
                  </Button>
                </div>
              </div>

              <div className={product.reverse ? "lg:order-1" : ""}>
                <ProductMockup mockup={product.mockup} darkMockup={product.darkMockup} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
