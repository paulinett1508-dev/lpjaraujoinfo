export interface Product {
  number: string;
  category: string;
  name: string;
  description: string;
  features: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  mockup: "cloud" | "indica" | "panel";
  reverse?: boolean;
  darkMockup?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    number: "01",
    category: "Infraestrutura",
    name: "Servidor em Nuvem pro PEC e-SUS",
    description:
      "Hospedamos sua instância PEC em ambiente dedicado e criptografado. Acesso remoto, backup diário automático e monitoramento 24/7 — pro TI da Secretaria focar no que importa.",
    features: [
      "Backup diário com retenção de 30 dias",
      "Criptografia AES-256 em trânsito e repouso",
      "Alta disponibilidade (SLA 99,9%)",
      "Acesso remoto seguro (VPN + 2FA)",
      "Atualizações e manutenções inclusas",
      "Escalável conforme demanda",
    ],
    primaryCta: { label: "Falar sobre migração", href: "#contato" },
    secondaryCta: { label: "Ver segurança →", href: "#diferenciais" },
    mockup: "cloud",
  },
  {
    number: "02",
    category: "Monitoramento",
    name: "Indica eSUS · Painel do Brasil 360",
    description:
      "Todos os indicadores da APS em um só lugar. Acompanhe ESF, ESB e eMulti por equipe, veja a produção mensal, a cobertura e a nota do quadrante — e aja antes que o repasse seja afetado.",
    features: [
      "Dashboard por equipe (ESF, ESB, eMulti)",
      "Nota do quadrante em tempo real",
      "Relatórios por CBO e profissional",
      "Calendário de produtividade",
      "Filtros por equipe e cidadão",
      "Acesso web de qualquer lugar",
    ],
    primaryCta: { label: "Ver demonstração", href: "#contato" },
    secondaryCta: { label: "Ver telas →", href: "#galeria" },
    mockup: "indica",
    reverse: true,
  },
  {
    number: "03",
    category: "Experiência do paciente",
    name: "Painel de Chamadas pras UBSs",
    description:
      "Painel digital integrado ao PEC que chama o paciente pelo nome, indica a sala e identifica prioridades. Menos fila, menos ruído, menos desistência.",
    features: [
      "Integração nativa com o PEC",
      "Chamada por nome e número de senha",
      "Prioridades (gestantes, idosos, PCD)",
      "Áudio sincronizado com TV",
      "Relatório de tempos e atendimentos",
      "Setup rápido em qualquer UBS",
    ],
    primaryCta: { label: "Implantar na UBS", href: "#contato" },
    secondaryCta: { label: "Ver diferenciais →", href: "#diferenciais" },
    mockup: "panel",
    darkMockup: true,
  },
];
