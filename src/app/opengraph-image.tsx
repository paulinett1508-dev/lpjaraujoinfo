import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "J Araújo Informática — Tecnologia para Saúde Pública Municipal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1E2A5E",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Grid geométrico de fundo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Gradiente radial */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(59,130,246,0.25), transparent 70%)",
          }}
        />

        {/* Logotipo simplificado */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, position: "relative" }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: "#3B82F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontWeight: 700, fontSize: 22 }}>JA</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontSize: 18, fontWeight: 600, fontFamily: "sans-serif", letterSpacing: "-0.02em" }}>
              J Araújo Informática
            </span>
            <span style={{ color: "rgba(165,180,252,1)", fontSize: 13, fontFamily: "sans-serif" }}>
              Tecnologia para Saúde Pública
            </span>
          </div>
        </div>

        {/* Headline principal */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "relative" }}>
          <div
            style={{
              fontSize: 13,
              fontFamily: "sans-serif",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#A5B4FC",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div style={{ width: 18, height: 1, backgroundColor: "#A5B4FC" }} />
            Indica eSUS · Servidor em Nuvem · Painel de Chamadas
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 500,
              color: "white",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
            }}
          >
            Sua APS nota máxima
            <br />
            no Saúde Brasil 360.
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.72)",
              fontFamily: "sans-serif",
              lineHeight: 1.5,
              maxWidth: 680,
            }}
          >
            Monitoramento em tempo real dos indicadores APS,
            infraestrutura em nuvem e gestão de filas na UBS.
          </div>
        </div>

        {/* Rodapé com os 3 produtos */}
        <div
          style={{
            display: "flex",
            gap: 16,
            position: "relative",
          }}
        >
          {[
            { num: "01", name: "Servidor em Nuvem", desc: "Infraestrutura gerenciada" },
            { num: "02", name: "Indica eSUS", desc: "Monitoramento APS" },
            { num: "03", name: "Painel de Chamadas", desc: "Gestão de filas UBS" },
          ].map((p) => (
            <div
              key={p.num}
              style={{
                flex: 1,
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 12,
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span style={{ color: "#A5B4FC", fontSize: 12, fontFamily: "sans-serif", fontWeight: 600 }}>
                {p.num}
              </span>
              <span style={{ color: "white", fontSize: 17, fontFamily: "sans-serif", fontWeight: 600 }}>
                {p.name}
              </span>
              <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontFamily: "sans-serif" }}>
                {p.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
