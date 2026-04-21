J Araújo Informática e Telecomunicação LTDA — Landing Page institucional

Empresa B2G de tecnologia pra saúde pública municipal (PEC e-SUS / Saúde Brasil 360).
Três produtos: Servidor em Nuvem, Indica eSUS (Brasil 360), Painel de Chamadas UBS.

Stack: Next.js 15 (App Router) + TypeScript strict + Tailwind v4 (CSS-first) + Radix UI
Submodulo: .agnostic-core/

Personas alvo: Secretário(a) de Saúde · Coordenador(a) APS · Prefeito(a) / Gabinete

Comandos essenciais:
  dev:       npm run dev          (http://localhost:3000)
  build:     npm run build
  lint:      npm run lint
  typecheck: npx tsc --noEmit

Deploy: Vercel (preview por PR, produção via main)
Referência visual: design-handoff/ — NÃO copiar verbatim, reescrever conforme convenções

Regras de código:
  - TypeScript strict: sem `any`, sem `!` não-nulo desnecessário
  - Componentes: PascalCase, um por arquivo
  - Utilitários/hooks: camelCase
  - CSS: Tailwind utility classes; sem inline styles (exceto mockups — veja src/components/mockups/)
  - Cores: sempre via var(--*) ou tokens do @theme; sem hex hardcoded fora do globals.css
  - Ícones: lucide-react + WhatsAppIcon custom em src/components/ui/icons.tsx
  - Dados de conteúdo: src/lib/data/*.ts (não embutir no JSX)
  - Constantes globais: src/lib/constants.ts (WHATSAPP_NUMBER, EMAIL, etc.)
  - Server Actions: src/app/actions/ (formulário de lead)

Estrutura:
  src/app/             ← layout.tsx, page.tsx, globals.css, actions/
  src/components/
    ui/                ← Button, Badge, Card, icons (CVA)
    layout/            ← Nav, Footer, Logo, WhatsAppFloat
    sections/          ← Hero, Problem, Products… (10 seções)
    mockups/           ← CloudMockup, IndicaMockup, PanelMockup (style objects OK aqui)
  src/lib/
    utils.ts           ← cn() (clsx + tailwind-merge)
    constants.ts       ← WHATSAPP_NUMBER, EMAIL, SITE_URL
    data/              ← personas.ts, diffs.ts, faq.ts, products.ts

Guardrails — NUNCA fazer sem perguntar:
  - Mudar paleta de cores ou tipografia
  - Adicionar biblioteca de animação (Framer Motion, etc.)
  - Criar página além de / (rota adicional)
  - Adicionar banco de dados ou autenticação
  - Mudar o número de WhatsApp ou e-mail de contato
  - Deploy em produção (só preview automático é OK)

Submodulo: .agnostic-core/

---

Antes de implementar:

Backend:
  REST API design:    .agnostic-core/skills/backend/rest-api-design.md
  Error handling:     .agnostic-core/skills/backend/error-handling.md
  Seguranca de API:   .agnostic-core/skills/security/api-hardening.md
  OWASP checklist:    .agnostic-core/skills/security/owasp-checklist.md
  Banco de dados:     .agnostic-core/skills/database/query-compliance.md
  Schema design:      .agnostic-core/skills/database/schema-design.md
  Node.js patterns:   .agnostic-core/skills/nodejs/nodejs-patterns.md
  Express setup:      .agnostic-core/skills/nodejs/express-best-practices.md
  OpenAPI:            .agnostic-core/skills/documentation/openapi-swagger.md

Frontend:
  HTML e CSS:          .agnostic-core/skills/frontend/html-css-audit.md
  Acessibilidade:      .agnostic-core/skills/frontend/accessibility.md
  UX Guidelines:       .agnostic-core/skills/frontend/ux-guidelines.md
  CSS Governance:      .agnostic-core/skills/frontend/css-governance.md
  Tailwind:            .agnostic-core/skills/frontend/tailwind-patterns.md
  SEO:                 .agnostic-core/skills/frontend/seo-checklist.md
  Design com MCP:      .agnostic-core/skills/design/paper-mcp-workflow.md

Qualidade:
  Testes unitarios:    .agnostic-core/skills/testing/unit-testing.md
  Testes integracao:   .agnostic-core/skills/testing/integration-testing.md
  Testes E2E:          .agnostic-core/skills/testing/e2e-testing.md
  TDD workflow:        .agnostic-core/skills/testing/tdd-workflow.md
  Performance:         .agnostic-core/skills/performance/performance-audit.md
  Caching:             .agnostic-core/skills/performance/caching-strategies.md
  Validacao:           .agnostic-core/skills/audit/validation-checklist.md

Operacional:
  Commits:             .agnostic-core/skills/git/commit-conventions.md
  Branching:           .agnostic-core/skills/git/branching-strategy.md
  Deploy procedures:   .agnostic-core/skills/devops/deploy-procedures.md
  Documentacao:        .agnostic-core/skills/documentation/technical-docs.md
  Fact checking:       .agnostic-core/skills/ai/fact-checker.md
  Debugging:           .agnostic-core/skills/audit/systematic-debugging.md

AI / LLM (se aplicavel):
  AI patterns:         .agnostic-core/skills/ai/ai-integration-patterns.md
  Prompt engineering:  .agnostic-core/skills/ai/prompt-engineering.md

Planejamento:
  Goal-backward:       .agnostic-core/skills/workflow/goal-backward-planning.md
  Workflow 6 fases:    .agnostic-core/skills/workflow/project-workflow.md
  Context management:  .agnostic-core/skills/workflow/context-management.md
  Claude Code tips:    .agnostic-core/skills/workflow/claude-code-productivity.md

Antes de fazer deploy:
  .agnostic-core/skills/devops/pre-deploy-checklist.md
  .agnostic-core/skills/devops/deploy-procedures.md

---

Todos os Agents disponiveis:

Reviewers:
  Security Reviewer:       .agnostic-core/agents/reviewers/security-reviewer.md
  Frontend Reviewer:       .agnostic-core/agents/reviewers/frontend-reviewer.md
  Code Inspector (SPARC):  .agnostic-core/agents/reviewers/code-inspector.md
  Test Reviewer:           .agnostic-core/agents/reviewers/test-reviewer.md
  Performance Reviewer:    .agnostic-core/agents/reviewers/performance-reviewer.md
  Codebase Mapper:         .agnostic-core/agents/reviewers/codebase-mapper.md

Validators:
  Migration Validator:     .agnostic-core/agents/validators/migration-validator.md

Generators:
  Project Planner:         .agnostic-core/agents/generators/project-planner.md
  Boilerplate Generator:   .agnostic-core/agents/generators/boilerplate-generator.md
  Docs Generator:          .agnostic-core/agents/generators/docs-generator.md
  UI Designer (Paper MCP): .agnostic-core/agents/generators/ui-designer.md

Specialists:
  DevOps Engineer:         .agnostic-core/agents/specialists/devops-engineer.md
  Database Architect:      .agnostic-core/agents/specialists/database-architect.md
  Mobile Developer:        .agnostic-core/agents/specialists/mobile-developer.md
  SEO Specialist:          .agnostic-core/agents/specialists/seo-specialist.md

Workflows:
  Brainstorm:              .agnostic-core/commands/workflows/brainstorm.md
  Create:                  .agnostic-core/commands/workflows/create.md
  Debug:                   .agnostic-core/commands/workflows/debug.md
  Deploy:                  .agnostic-core/commands/workflows/deploy.md

Guia de roteamento (qual agent/skill usar):
  .agnostic-core/docs/agent-routing-guide.md

---

Git Auto-Push Workflow:
  Após cada commit, o hook PostToolUse faz push automático para a branch atual.
  Hook script:       .agnostic-core/scripts/hooks/post-tool-use-autopush
  Configuração:      ~/.claude/settings.json (PostToolUse → Bash matcher)
  Instalação:        scripts/install.sh configura automaticamente (passo 5/6)
  Comportamento:     detecta "git commit" → push origin <branch> → retry 1x se falhar

---

Convencoes do projeto:

  Frontend: Next.js 15 (App Router) + React 19 + TypeScript 5 strict
  CSS: Tailwind v4 (CSS-first, @theme no globals.css)
  Componentes base: Radix UI (Accordion, Slot)
  Ícones: lucide-react + WhatsAppIcon custom
  CVA: class-variance-authority (variantes de componentes)
  Utilitários CSS: clsx + tailwind-merge (via cn())
  Testes: — (não definido ainda)
  CI/CD: Vercel (deploy automático por push)
  Deploy: Vercel (preview por branch, produção via main)
  Estilo de commits: Conventional Commits (inglês)
  Comentários de domínio: português
