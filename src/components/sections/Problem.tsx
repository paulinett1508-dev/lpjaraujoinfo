const STATS = [
  {
    num: "4x",
    numSub: "por ano",
    title: "Avaliação por quadrantes",
    desc: "A nota do município é apurada a cada três meses — e o recurso do cofinanciamento depende dela.",
  },
  {
    num: "70%",
    numSub: "meta mínima",
    title: "Cobertura exigida da APS",
    desc: "Cadastro, acompanhamento, visitas, vacina, pré-natal — se não bate a meta, o valor integral não vem.",
  },
  {
    num: "0",
    numSub: "visibilidade",
    title: "É o que a maioria tem hoje",
    desc: "Dados presos no PEC, relatórios manuais demorados, gestor cego até o fim do quadrante.",
  },
];

export function Problem() {
  return (
    <section className="relative bg-[var(--color-primary)] text-white overflow-hidden py-24">
      <div className="geo-grid-white" aria-hidden="true" style={{ maskImage: "radial-gradient(circle at 85% 20%,black,transparent 70%)" }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">

          <div>
            <span className="eyebrow" style={{ color: "#A5B4FC" }}>O problema</span>
            <h2 className="text-white mt-4">
              Quando o indicador cai, o repasse também cai.
            </h2>
            <p className="mt-6 text-[1.125rem] text-[rgba(255,255,255,0.82)] leading-[1.6] max-w-[52ch]">
              O novo cofinanciamento da APS atrela o recurso federal à performance do
              município nos quadrantes. Sem uma base estável, sem monitoramento contínuo
              e sem organização das UBSs, o gestor descobre o problema tarde demais —
              quando o recurso já foi perdido.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {STATS.map(({ num, numSub, title, desc }) => (
              <div
                key={num}
                className="flex flex-col sm:flex-row gap-6 p-6 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-[var(--radius-lg)] hover:bg-[rgba(255,255,255,0.06)] transition-colors"
              >
                <div className="shrink-0 min-w-[100px]">
                  <span className="font-[family-name:var(--font-display)] text-[2.25rem] font-[450] text-white tracking-[-0.03em] leading-none">
                    {num}
                  </span>
                  <span className="block font-[family-name:var(--font-ui)] text-[0.75rem] text-[rgba(255,255,255,0.6)] font-medium mt-1.5 tracking-[0.02em]">
                    {numSub}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <strong className="text-white text-[0.9375rem] font-semibold">{title}</strong>
                  <span className="text-[rgba(255,255,255,0.68)] text-[0.875rem] leading-[1.5]">{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
