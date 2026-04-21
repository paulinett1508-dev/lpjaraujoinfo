export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Em quanto tempo vocês implantam o servidor em nuvem?",
    a: "O prazo médio de migração do PEC pra nossa nuvem é de 5 a 10 dias úteis, incluindo o período de testes. A operação é guiada pelo nosso time e não há interrupção do atendimento durante a janela de corte.",
  },
  {
    q: "O Indica eSUS funciona com o PEC que a gente já usa?",
    a: "Sim. O painel lê os dados diretamente da base do PEC e-SUS, sem duplicar cadastros. Se o seu município já opera o PEC (hospedado conosco ou não), o Indica pode ser conectado.",
  },
  {
    q: "Como vocês tratam a LGPD?",
    a: "Assinamos contrato de tratamento de dados, temos DPO dedicado e os dados ficam criptografados em trânsito (TLS) e em repouso (AES-256). O acesso administrativo exige VPN e 2FA, e todo acesso é registrado em log de auditoria.",
  },
  {
    q: "O painel de chamadas exige equipamento especial?",
    a: "Basta uma TV com entrada HDMI e um mini PC ou TV Box. A gente faz a instalação remota ou presencial, e o painel já entra integrado ao PEC — os pacientes são chamados pelo nome e número sem digitação extra na recepção.",
  },
  {
    q: "Qual a estrutura de cobrança?",
    a: "Trabalhamos com mensalidade por município, dimensionada pelo porte da rede (nº de UBSs e equipes). Não há custo de licença por usuário. Conversamos sobre o plano ideal na primeira reunião.",
  },
  {
    q: "E se tivermos um problema fora do horário comercial?",
    a: "O monitoramento é 24/7 — se algo cai na infra, nosso time é alertado antes do município. Pro suporte humano, atendemos por WhatsApp em horário estendido e com plantão em janelas críticas (campanhas, apuração de quadrante).",
  },
];
