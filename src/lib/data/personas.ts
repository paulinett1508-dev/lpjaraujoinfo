export interface Persona {
  initials: string;
  role: string;
  lede: string;
  pains: string[];
  win: string;
}

export const PERSONAS: Persona[] = [
  {
    initials: "SM",
    role: "Secretário(a) de Saúde",
    lede: "Responsável pelo recurso e pela performance do município.",
    pains: [
      "Descobre que o indicador caiu só no fim do quadrante",
      "Precisa justificar ao prefeito o risco de perder repasse",
      "Relatórios manuais atrasam a tomada de decisão",
    ],
    win: "Com o Indica eSUS, acompanha a nota em tempo real e age antes da apuração.",
  },
  {
    initials: "CE",
    role: "Coordenador(a) APS / Enfermeiro(a)",
    lede: "Na ponta, gerenciando equipes ESF/ESB/eMulti no dia a dia.",
    pains: [
      "Precisa comparar produção de equipes sem ferramenta",
      "Visitas e vacinas registradas, mas difíceis de auditar",
      "ACS sem visibilidade do próprio rendimento",
    ],
    win: "Vê produtividade por profissional, equipe e CBO, com filtros e calendário.",
  },
  {
    initials: "PR",
    role: "Prefeito(a) / Gabinete",
    lede: "Quer entregar saúde de qualidade sem perder o cofinanciamento.",
    pains: [
      "Risco político quando o repasse da APS é reduzido",
      "Falta de transparência no que acontece dentro das UBSs",
      "Pressão por modernização sem orçamento alto",
    ],
    win: "Tem um painel executivo claro e uma operação previsível nas UBSs.",
  },
];
