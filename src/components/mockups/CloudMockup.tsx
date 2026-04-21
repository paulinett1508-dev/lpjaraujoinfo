import { Spark } from "./Spark";

/* Estilos mantidos como objetos tipados — componente é uma ilustração de UI,
   não um componente de produto. Cores hardcoded são intencionais aqui. */
const s = {
  frame:       { width: "100%", height: "100%", background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", overflow: "hidden" as const, display: "flex", flexDirection: "column" as const, boxShadow: "0 1px 2px rgba(15,23,42,0.04)" },
  chrome:      { display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderBottom: "1px solid #E2E8F0", background: "#F8FAFC" },
  dots:        { display: "flex", gap: 5 },
  dot:         { width: 10, height: 10, borderRadius: "50%" as const },
  url:         { fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "#64748B", background: "#fff", padding: "4px 12px", borderRadius: 6, border: "1px solid #E2E8F0", flex: 1, textAlign: "center" as const },
  body:        { display: "flex", flex: 1, minHeight: 0 },
  sideNav:     { width: 132, borderRight: "1px solid #E2E8F0", padding: 12, display: "flex", flexDirection: "column" as const, gap: 4, background: "#FAFBFD" },
  navItem:     { display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 6, fontSize: 12, color: "#475569", fontWeight: 500 },
  navItemActive: { background: "#E8ECF7", color: "#1E2A5E", fontWeight: 600 },
  navDot:      { width: 6, height: 6, borderRadius: "50%" as const, background: "#10B981" },
  navDotIdle:  { width: 6, height: 6, borderRadius: "50%" as const, background: "#CBD5E1" },
  main:        { flex: 1, padding: 18, display: "flex", flexDirection: "column" as const, gap: 14, overflow: "hidden" as const },
  header:      { display: "flex", justifyContent: "space-between", alignItems: "flex-start" },
  crumb:       { fontSize: 10.5, color: "#64748B", fontFamily: "JetBrains Mono, monospace", letterSpacing: 0.5, textTransform: "uppercase" as const },
  title:       { fontSize: 15, fontWeight: 600, color: "#0F172A", marginTop: 4 },
  status:      { display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 600, color: "#059669", background: "#D1FAE5", padding: "5px 10px", borderRadius: 20 },
  statusDot:   { width: 6, height: 6, borderRadius: "50%" as const, background: "#10B981", boxShadow: "0 0 0 3px rgba(16,185,129,0.25)" },
  metrics:     { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 },
  metric:      { padding: 12, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 8 },
  metricLabel: { fontSize: 10.5, color: "#64748B", fontWeight: 500, textTransform: "uppercase" as const, letterSpacing: 0.4 },
  metricValue: { fontSize: 20, fontWeight: 600, color: "#0F172A", marginTop: 2, marginBottom: 6 },
  backupCard:  { padding: 14, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 10 },
  backupHead:  { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  backupTitle: { fontSize: 12.5, fontWeight: 600, color: "#1E2A5E" },
  backupTime:  { fontSize: 11, color: "#64748B", marginTop: 2 },
  backupBadge: { fontSize: 10.5, fontWeight: 600, color: "#059669", background: "#D1FAE5", padding: "4px 9px", borderRadius: 20 },
  backupBar:   { display: "flex", gap: 3 },
  backupTick:  { flex: 1, height: 24, borderRadius: 3 },
  backupFoot:  { display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: 10.5, color: "#64748B" },
} as const;

export function CloudMockup() {
  return (
    <div style={s.frame} role="img" aria-label="Dashboard do Servidor em Nuvem">
      <div style={s.chrome}>
        <div style={s.dots}>
          <i style={{ ...s.dot, background: "#EF4444" }} />
          <i style={{ ...s.dot, background: "#F59E0B" }} />
          <i style={{ ...s.dot, background: "#10B981" }} />
        </div>
        <div style={s.url}>servidor.araujoinformatica.com.br</div>
      </div>
      <div style={s.body}>
        <div style={s.sideNav}>
          <div style={{ ...s.navItem, ...s.navItemActive }}><span style={s.navDot} /> Infra</div>
          <div style={s.navItem}><span style={s.navDotIdle} /> Backups</div>
          <div style={s.navItem}><span style={s.navDotIdle} /> Acessos</div>
          <div style={s.navItem}><span style={s.navDotIdle} /> Logs</div>
        </div>
        <div style={s.main}>
          <div style={s.header}>
            <div>
              <div style={s.crumb}>PEC e-SUS · Produção</div>
              <div style={s.title}>Servidor PEC · Município</div>
            </div>
            <div style={s.status}><span style={s.statusDot} /> Operacional</div>
          </div>
          <div style={s.metrics}>
            <div style={s.metric}>
              <div style={s.metricLabel}>CPU</div>
              <div style={s.metricValue}>18%</div>
              <Spark values={[30, 22, 18, 24, 20, 18, 15, 18]} color="#3B82F6" />
            </div>
            <div style={s.metric}>
              <div style={s.metricLabel}>Memória</div>
              <div style={s.metricValue}>42%</div>
              <Spark values={[38, 40, 42, 41, 42, 43, 42, 42]} color="#10B981" />
            </div>
            <div style={s.metric}>
              <div style={s.metricLabel}>Disco</div>
              <div style={s.metricValue}>61%</div>
              <Spark values={[55, 57, 58, 59, 60, 61, 61, 61]} color="#F59E0B" />
            </div>
          </div>
          <div style={s.backupCard}>
            <div style={s.backupHead}>
              <div>
                <div style={s.backupTitle}>Último backup</div>
                <div style={s.backupTime}>Hoje · 02:00 · criptografado AES-256</div>
              </div>
              <div style={s.backupBadge}>✓ Concluído</div>
            </div>
            <div style={s.backupBar}>
              {Array.from({ length: 14 }, (_, i) => (
                <i key={i} style={{ ...s.backupTick, background: i < 13 ? "#10B981" : "#E2E8F0" }} />
              ))}
            </div>
            <div style={s.backupFoot}>
              <span>14 dias consecutivos</span>
              <span>Próximo: amanhã 02:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
