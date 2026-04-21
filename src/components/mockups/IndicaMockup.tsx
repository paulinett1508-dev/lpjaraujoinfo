import { Spark } from "./Spark";

const esfData = [
  { name: "ESF 01 · Centro",    coverage: 87, visits: 412 },
  { name: "ESF 02 · Cajueiro",  coverage: 74, visits: 318 },
  { name: "ESF 03 · Riacho",    coverage: 68, visits: 289 },
  { name: "ESF 04 · Boa Vista", coverage: 91, visits: 456 },
];

const s = {
  frame:       { width: "100%", height: "100%", background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", display: "flex", flexDirection: "column" as const, overflow: "hidden" as const, boxShadow: "0 1px 2px rgba(15,23,42,0.04)" },
  header:      { padding: "12px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", background: "linear-gradient(180deg,#FFFFFF 0%,#F8FAFC 100%)" },
  brand:       { display: "flex", gap: 10, alignItems: "center" },
  logoMark:    { width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#1E2A5E,#3B82F6)", color: "#fff", display: "grid", placeItems: "center" as const, fontFamily: "Fraunces, serif", fontSize: 16, fontWeight: 600 },
  brandName:   { fontSize: 13, fontWeight: 700, color: "#0F172A", letterSpacing: -0.2 },
  muni:        { fontSize: 10.5, color: "#64748B", marginTop: 1 },
  userPill:    { display: "flex", alignItems: "center", gap: 8, padding: "4px 10px 4px 4px", background: "#F1F5F9", borderRadius: 20, fontSize: 11, color: "#475569", fontWeight: 500 },
  avatar:      { width: 24, height: 24, borderRadius: "50%" as const, background: "#1E2A5E", color: "#fff", display: "grid", placeItems: "center" as const, fontSize: 9.5, fontWeight: 700 },
  tabs:        { display: "flex", gap: 4, padding: "8px 14px", borderBottom: "1px solid #E2E8F0", alignItems: "center" },
  tab:         { padding: "6px 12px", fontSize: 11.5, color: "#64748B", fontWeight: 500, borderRadius: 6 },
  tabActive:   { background: "#E8ECF7", color: "#1E2A5E", fontWeight: 600 },
  filter:      { fontSize: 10.5, color: "#64748B", padding: "5px 10px", border: "1px solid #E2E8F0", borderRadius: 6 },
  body:        { padding: 16, display: "flex", flexDirection: "column" as const, gap: 14, flex: 1, overflow: "hidden" as const },
  kpis:        { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 },
  kpi:         { padding: 12, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 8 },
  kpiLabel:    { fontSize: 10, color: "#64748B", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: 0.5 },
  kpiRow:      { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 4, marginBottom: 6 },
  kpiValue:    { fontSize: 22, fontWeight: 600, color: "#0F172A", fontFamily: "Fraunces, serif", letterSpacing: -1, lineHeight: 1 },
  kpiDelta:    { fontSize: 10.5, fontWeight: 600, color: "#059669", background: "#D1FAE5", padding: "3px 7px", borderRadius: 10 },
  progressTrack: { height: 6, background: "#E2E8F0", borderRadius: 3, overflow: "hidden" as const },
  panel:       { border: "1px solid #E2E8F0", borderRadius: 10, overflow: "hidden" as const, flex: 1, display: "flex", flexDirection: "column" as const },
  panelHead:   { padding: "10px 14px", borderBottom: "1px solid #E2E8F0", display: "flex", justifyContent: "space-between", background: "#FAFBFD" },
  panelTitle:  { fontSize: 12, fontWeight: 600, color: "#1E2A5E" },
  panelLink:   { fontSize: 11, color: "#3B82F6", fontWeight: 500 },
  row:         { padding: "8px 14px", borderBottom: "1px solid #F1F5F9", display: "grid", gridTemplateColumns: "1.2fr 2fr 0.8fr", gap: 12, alignItems: "center", fontSize: 11.5 },
  rowName:     { color: "#0F172A", fontWeight: 500 },
  rowBar:      { display: "flex", alignItems: "center", gap: 8 },
  barTrack:    { flex: 1, height: 6, background: "#E2E8F0", borderRadius: 3, overflow: "hidden" as const },
  rowPct:      { fontSize: 11, color: "#475569", fontWeight: 600, minWidth: 32, textAlign: "right" as const },
  rowVisits:   { textAlign: "right" as const, color: "#0F172A", fontWeight: 500 },
} as const;

export function IndicaMockup() {
  return (
    <div style={s.frame} role="img" aria-label="Dashboard Indica eSUS — painel de indicadores APS">
      <div style={s.header}>
        <div style={s.brand}>
          <div style={s.logoMark}>i</div>
          <div>
            <div style={s.brandName}>Indica eSUS</div>
            <div style={s.muni}>Município · Quadrimestre 1/2026</div>
          </div>
        </div>
        <div style={s.userPill}>
          <div style={s.avatar}>AC</div>
          <span>Coord. APS</span>
        </div>
      </div>
      <div style={s.tabs}>
        <div style={{ ...s.tab, ...s.tabActive }}>ESF</div>
        <div style={s.tab}>ESB</div>
        <div style={s.tab}>eMulti</div>
        <div style={s.tab}>Cadastro</div>
        <div style={{ flex: 1 }} />
        <div style={s.filter}>Filtro: Todas equipes ▾</div>
      </div>
      <div style={s.body}>
        <div style={s.kpis}>
          <div style={s.kpi}>
            <div style={s.kpiLabel}>Nota do quadrante</div>
            <div style={s.kpiRow}>
              <div style={s.kpiValue}>8,4</div>
              <div style={s.kpiDelta}>↑ 0,6</div>
            </div>
            <div style={s.progressTrack}>
              <div style={{ height: "100%", width: "84%", background: "#10B981", borderRadius: 3 }} />
            </div>
          </div>
          <div style={s.kpi}>
            <div style={s.kpiLabel}>Cobertura APS</div>
            <div style={s.kpiRow}>
              <div style={s.kpiValue}>79<span style={{ fontSize: 13, color: "#64748B", marginLeft: 2, fontFamily: "Plus Jakarta Sans" }}>%</span></div>
              <div style={s.kpiDelta}>↑ 4p.p.</div>
            </div>
            <Spark values={[68, 70, 71, 73, 75, 76, 78, 79]} color="#3B82F6" height={24} />
          </div>
          <div style={s.kpi}>
            <div style={s.kpiLabel}>Produção mensal</div>
            <div style={s.kpiRow}>
              <div style={s.kpiValue}>1.475</div>
              <div style={{ ...s.kpiDelta, color: "#F59E0B", background: "#FEF3C7" }}>meta 1.600</div>
            </div>
            <Spark values={[1100, 1180, 1220, 1310, 1290, 1380, 1420, 1475]} color="#1E2A5E" height={24} />
          </div>
        </div>
        <div style={s.panel}>
          <div style={s.panelHead}>
            <div style={s.panelTitle}>Equipes de Saúde da Família</div>
            <div style={s.panelLink}>Ver todas →</div>
          </div>
          <div>
            {esfData.map((row) => {
              const barColor = row.coverage >= 80 ? "#10B981" : row.coverage >= 70 ? "#3B82F6" : "#F59E0B";
              return (
                <div key={row.name} style={s.row}>
                  <div style={s.rowName}>{row.name}</div>
                  <div style={s.rowBar}>
                    <div style={s.barTrack}>
                      <div style={{ height: "100%", width: `${row.coverage}%`, background: barColor, borderRadius: 3 }} />
                    </div>
                    <div style={s.rowPct}>{row.coverage}%</div>
                  </div>
                  <div style={s.rowVisits}>{row.visits} <span style={{ color: "#94A3B8" }}>atend.</span></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
