export interface Diff {
  icon: string;
  title: string;
  body: string;
}

export const DIFFS: Diff[] = [
  {
    icon: "shield",
    title: "LGPD desde o dia zero",
    body: "Tratamento de dados de saúde com DPO dedicado, termos claros e contratos que protegem o município.",
  },
  {
    icon: "cloud",
    title: "Backup diário automático",
    body: "Retenção de 30 dias, restauração em minutos e testes periódicos — seus dados nunca ficam expostos.",
  },
  {
    icon: "lock",
    title: "Criptografia AES-256",
    body: "Dados em trânsito e em repouso, VPN nos acessos administrativos e 2FA pra contas sensíveis.",
  },
  {
    icon: "headphones",
    title: "Suporte humano",
    body: "Atendimento por WhatsApp, reuniões de acompanhamento e migração assistida — sem chatbot no meio.",
  },
  {
    icon: "refreshCw",
    title: "Integrado ao PEC",
    body: "Sincronização nativa com o PEC e-SUS — o painel e as chamadas lêem os dados reais, sem duplicidade.",
  },
  {
    icon: "trendingUp",
    title: "Foco em cofinanciamento",
    body: "O Indica eSUS mostra exatamente os indicadores que o Ministério usa pra calcular a nota do seu município.",
  },
  {
    icon: "users",
    title: "Implantação guiada",
    body: "Não largamos o município na mão. Acompanhamos do setup até o primeiro ciclo completo de uso.",
  },
  {
    icon: "clock",
    title: "SLA 99,9%",
    body: "Disponibilidade garantida em contrato. Se cair, você sabe antes pelo nosso monitoramento.",
  },
];
