"use client";

import { useState, useEffect } from "react";

const calls = [
  { n: "047", name: "Maria José S.",    room: "Consultório 02", pro: "Dra. Ana Ribeiro", priority: false },
  { n: "046", name: "João Batista O.", room: "Acolhimento",     pro: "Enf. Camila",     priority: false },
  { n: "045", name: "Rita de Cássia M.", room: "Consultório 01", pro: "Dr. Paulo",       priority: true  },
  { n: "044", name: "Sebastião P.",     room: "Vacina",         pro: "Téc. Juliana",    priority: false },
] as const;

const s = {
  frame:    { width: "100%", height: "100%", background: "#0F172A", borderRadius: 12, overflow: "hidden" as const, display: "flex", flexDirection: "column" as const, color: "#fff" },
  header:   { padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" },
  brand:    { display: "flex", gap: 12, alignItems: "center" },
  logo:     { width: 30, height: 30, borderRadius: 8, background: "#10B981", display: "grid", placeItems: "center" as const, position: "relative" as const },
  pulse:    { width: 10, height: 10, borderRadius: "50%" as const, background: "#fff", boxShadow: "0 0 0 4px rgba(255,255,255,0.2)" },
  ubs:      { fontSize: 13, fontWeight: 700 },
  time:     { fontSize: 10.5, color: "rgba(255,255,255,0.6)", fontFamily: "JetBrains Mono, monospace", marginTop: 2 },
  counter:  { fontSize: 11, color: "rgba(255,255,255,0.75)", padding: "5px 10px", background: "rgba(255,255,255,0.06)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)" },
  body:     { flex: 1, display: "grid", gridTemplateColumns: "1.5fr 1fr", minHeight: 0 },
  current:  { padding: "24px 20px", borderRight: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column" as const, justifyContent: "center", background: "radial-gradient(circle at 30% 30%,rgba(59,130,246,0.15),transparent 60%)" },
  curLabel: { fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "#A5B4FC" },
  curName:  { fontSize: 26, fontFamily: "Fraunces, serif", fontWeight: 500, letterSpacing: -0.8, marginTop: 8, lineHeight: 1.1 },
  curNumber: { fontSize: 52, fontFamily: "Fraunces, serif", fontWeight: 450, color: "#3B82F6", letterSpacing: -3, lineHeight: 1, marginTop: 4 },
  curRoute: { display: "flex", alignItems: "center", gap: 10, marginTop: 14, fontSize: 12 },
  curRoom:  { color: "#fff", padding: "5px 10px", background: "rgba(59,130,246,0.2)", borderRadius: 6, fontWeight: 500 },
  curArrow: { color: "#64748B" },
  curPro:   { color: "rgba(255,255,255,0.8)" },
  priority: { marginTop: 12, fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: "#F59E0B", padding: "4px 9px", background: "rgba(245,158,11,0.12)", borderRadius: 4, border: "1px solid rgba(245,158,11,0.3)", alignSelf: "flex-start" as const },
  queue:    { padding: 16, display: "flex", flexDirection: "column" as const, gap: 8 },
  queueLabel: { fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: "rgba(255,255,255,0.5)", textTransform: "uppercase" as const },
  queueList: { display: "flex", flexDirection: "column" as const, gap: 6 },
  queueItem: { padding: "8px 10px", background: "rgba(255,255,255,0.04)", borderRadius: 6, display: "grid", gridTemplateColumns: "36px 1fr auto", gap: 8, alignItems: "center", fontSize: 11, border: "1px solid rgba(255,255,255,0.06)" },
  queueN:   { fontFamily: "Fraunces, serif", fontSize: 14, fontWeight: 500, color: "#3B82F6" },
  queueName: { color: "rgba(255,255,255,0.9)", fontWeight: 500, whiteSpace: "nowrap" as const, overflow: "hidden" as const, textOverflow: "ellipsis" as const },
  queueRoom: { fontSize: 9.5, color: "rgba(255,255,255,0.5)" },
  footer:   { padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: 10.5, background: "rgba(0,0,0,0.3)" },
  syncDot:  { width: 6, height: 6, borderRadius: "50%" as const, background: "#10B981", boxShadow: "0 0 0 3px rgba(16,185,129,0.25)", display: "inline-block", marginRight: 6 },
} as const;

export function PanelMockup() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % calls.length), 3200);
    return () => clearInterval(t);
  }, []);

  const cur = calls[current];
  const queue = calls.filter((_, i) => i !== current).slice(0, 3);

  return (
    <div style={s.frame} role="img" aria-label="Painel de chamadas da UBS">
      <div style={s.header}>
        <div style={s.brand}>
          <div style={s.logo}><div style={s.pulse} /></div>
          <div>
            <div style={s.ubs}>UBS Vila Nova</div>
            <div style={s.time}>Ter, 22 abr · 14:32</div>
          </div>
        </div>
        <div style={s.counter}>{calls.length} chamadas na fila</div>
      </div>
      <div style={s.body}>
        <div style={s.current}>
          <div style={s.curLabel}>CHAMANDO AGORA</div>
          <div style={s.curName}>{cur.name}</div>
          <div style={s.curNumber}>#{cur.n}</div>
          <div style={s.curRoute}>
            <div style={s.curRoom}>{cur.room}</div>
            <div style={s.curArrow}>→</div>
            <div style={s.curPro}>{cur.pro}</div>
          </div>
          {cur.priority && <div style={s.priority}>★ PRIORITÁRIO</div>}
        </div>
        <div style={s.queue}>
          <div style={s.queueLabel}>Próximos</div>
          <div style={s.queueList}>
            {queue.map((c, i) => (
              <div key={c.n} style={{ ...s.queueItem, opacity: 1 - i * 0.22 }}>
                <div style={s.queueN}>#{c.n}</div>
                <div style={s.queueName}>{c.name}</div>
                <div style={s.queueRoom}>{c.room}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={s.footer}>
        <span><span style={s.syncDot} />Integrado ao PEC · sincronizado</span>
        <span style={{ color: "rgba(255,255,255,0.55)", fontFamily: "JetBrains Mono, monospace" }}>47 atendimentos hoje</span>
      </div>
    </div>
  );
}
