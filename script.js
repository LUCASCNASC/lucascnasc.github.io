const translations = {
  pt: {
    'page.title': 'Lucas Camargo | QA Engineer',
    'page.description':
      'Portfólio de Lucas Camargo, QA Engineer com experiência em automação, testes de API, CI/CD e inteligência artificial.',
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.skills': 'Ferramentas',
    'nav.results': 'Resultados',
    'nav.projects': 'Skills & projetos',
    'nav.education': 'Formação',
    'nav.languages': 'Idiomas',
    'nav.contact': 'Contato',
    'accessibility.navigation': 'Navegação principal',
    'accessibility.siteActions': 'Ações do site',
    'accessibility.languageSelector': 'Selecionar idioma',
    'accessibility.profile': 'Perfil',
    'accessibility.portrait': 'Retrato de Lucas Camargo',
    'hero.role': 'QA Engineer | Playwright & Cypress | CI/CD | IA | Testes Manuais',
    'hero.description':
      'QA Engineer com mais de 4 anos de experiência em automação, testes de API, validação funcional e processos com IA para produtos web, mobile, ERP, fintech e seguros.',
    'hero.linkedin': 'LinkedIn',
    'hero.email': 'Contato',
    'section.about': 'Sobre',
    'about.title': 'Perfil profissional',
    'about.summary':
      'QA Engineer focado em automação estratégica, inteligência artificial e testes manuais para melhorar a qualidade do ciclo de vida do software, reduzir riscos, acelerar entregas e otimizar o time-to-market. Trabalho com projetos web, mobile, ERP, financeiros, seguros e integrações governamentais. E para tudo isso funcionar, atuo em total colaboração com o time e negócio.',
    'stats.years': 'Anos de experiência',
    'stats.projects': 'Projetos e sistemas',
    'stats.ai': 'QA com IA',
    'stats.languages': 'Bilíngue',
    'section.experience': 'Experiência',
    'experience.title': 'Trajetória profissional',
    'date.gazin': 'Ago 2025 - Atual',
    'date.finnet': 'Fev 2025 - Jul 2025',
    'date.sabium': 'Jan 2024 - Fev 2025',
    'date.ncs': 'Dez 2021 - Dez 2023',
    'experience.gazin':
      'Desenvolvi e mantive framework Playwright, integrando com GitLab CI em projeto de Seguros, com uso massivo de LLMs. Fui o responsável por testes de integração com terceiros via API Rest, com Postman e Swagger. Utilizei agents de IA para automatizar processos de QA, como geração de casos de teste, massa de teste, artefatos de teste, entre outros. Monitorei logs e métricas de qualidade com Datadog e Grafana. Fui um dos responsáveis na manutenção de sistemas legados, com foco em testes de regressão, validação de regras de negócio e análise de dados em PostgreSQL e SQL Server. Além disso, atuei efetivamente na implementação de novas features em um aplicativo mobile bancário.',
    'experience.fintech':
      'Liderei testes de integração de APIs governamentais para sistemas de crédito. Desenvolvi e mantive framework de testes E2E com Cypress, TypeScript e JavaScript, utilizando LLMs como um potencializador, integrando com Bitbucket. Automatizei testes de API com Postman, além de ter sido o responsável por validar regras de negócio, analisar logs e executar lambdas na AWS. Liderei homologações em produção pós daily e atuei constantemente direto com os usuários do sistema, visando entender suas dores.',
    'experience.sabium':
      'Desenvolvi e mantive a primeira framework de testes E2E com Cypress, TypeScript e JavaScript, da empresa, com auxílio de LLMs. Liderei o desenvolvimento na automação de smoke testes para APIs Rest via Postman. Criei documentações de teste, buscando dar visibilidade das entregas aos stakeholders. Fui responsável pela criação e execução de casos de teste para sistemas legados Fiscal/Contábil para varejistas.',
    'experience.ncs':
      'Liderei QA em projetos de migração de ERP para web, atuando diretamente no levantamento de requisitos, regras de negócio e critérios de aceite. Implementei as primeiras suítes de automação de testes com Cypress e integração com GitHub Actions. Fui o responsável pela criação de documentação interna e externa, visando auxiliar todos. Atuei na escrita e execução de casos de teste em sistemas legados para depósitos de materiais de construção.',
    'section.skills': 'Ferramentas',
    'skills.title': 'Principais ferramentas',
    'skills.aiAgents': 'Agentes de IA',
    'section.results': 'Resultados',
    'results.title': 'Principais conquistas',
    'section.portfolio': 'Portfólio',
    'projects.title': 'Skills & projetos',
    'projects.testCaseWriting': 'Escrita de casos de teste',
    'projects.testPrioritization': 'Priorização de testes',
    'testPrioritization.pageTitle': 'Como priorizo os testes? | Lucas Camargo',
    'testPrioritization.pageDescription':
      'Aqui mostro como priorizo testes de API e interface.',
    'testPrioritization.back': 'Voltar a Home',
    'testPrioritization.eyebrow': 'Guia prático',
    'testPrioritization.title': 'Como priorizo os testes?',
    'testPrioritization.description':
      'Aqui mostro como priorizo testes de API e interface.',
    'testPrioritization.sections': 'Seções da página',
    'testPrioritization.api': 'API',
    'testPrioritization.interface': 'Interface',
    'testPrioritization.openApi': 'Abrir documentação da API',
    'testPrioritization.openInterface': 'Abrir aplicação',
    'testPrioritization.frameworkTitle': 'Critérios de priorização',
    'testPrioritization.frameworkIntro':
      'A prioridade combina impacto da falha e probabilidade de ocorrência. Ajusto a ordem considerando também exposição, mudanças recentes, dependências e o custo de execução. Prioridade indica quando executar o teste; severidade descreve o impacto de um defeito encontrado.',
    'testPrioritization.scaleTitle': 'Níveis de prioridade',
    'testPrioritization.p0Title': 'P0 · Bloqueador',
    'testPrioritization.p0Body':
      'Fluxo essencial, risco de segurança ou perda/corrupção de dados. Executar primeiro e bloquear a liberação quando falhar.',
    'testPrioritization.p1Title': 'P1 · Alta',
    'testPrioritization.p1Body':
      'Regra de negócio importante ou caminho frequente, com impacto significativo. Executar a cada mudança relacionada e antes da liberação.',
    'testPrioritization.p2Title': 'P2 · Média',
    'testPrioritization.p2Body':
      'Variação, filtro ou cenário menos frequente, com alternativa ou impacto limitado. Incluir na regressão planejada.',
    'testPrioritization.p3Title': 'P3 · Baixa',
    'testPrioritization.p3Body':
      'Baixa exposição e baixo impacto, normalmente visual ou de conveniência. Executar quando houver capacidade ou mudança relevante.',
    'testPrioritization.orderTitle': 'Como aplicar na prática',
    'testPrioritization.order1':
      'Mapear objetivos de negócio, usuários, dados sensíveis e jornadas essenciais.',
    'testPrioritization.order2':
      'Avaliar impacto e probabilidade com evidências: histórico de defeitos, complexidade, frequência de uso, dependências e escopo da mudança.',
    'testPrioritization.order3':
      'Ordenar os testes por risco; executar primeiro o menor conjunto que dá confiança nos caminhos críticos.',
    'testPrioritization.order4':
      'Repriorizar quando o código, os incidentes, os requisitos ou o contexto de uso mudarem; registrar a justificativa.',
    'testPrioritization.apiHeading': 'Priorização para API',
    'testPrioritization.apiIntro':
      'No ServeRest, priorizo o contrato de autenticação e as operações que criam, alteram ou removem dados. Depois cubro filtros, variações de entrada e condições menos comuns.',
    'testPrioritization.apiExamplesTitle': 'Exemplos em ordem de execução',
    'testPrioritization.apiCase1Title': 'P0 · Login e autenticação',
    'testPrioritization.apiCase1Body':
      'POST /login com credenciais válidas e inválidas; verificar status, mensagem e emissão (ou ausência) do token. A falha impede autenticação e pode afetar todas as rotas protegidas.',
    'testPrioritization.apiCase2Title': 'P0 · Acesso protegido e dados',
    'testPrioritization.apiCase2Body':
      'Usar o token em uma operação protegida, como criar um carrinho, e conferir a associação à conta. Autorização incorreta pode permitir acesso indevido ou interromper uma jornada essencial.',
    'testPrioritization.apiCase3Title': 'P1 · Cadastro e unicidade do e-mail',
    'testPrioritization.apiCase3Body':
      'POST /usuarios com dados válidos e tentativa de repetir um e-mail. A criação e a regra de unicidade são centrais para identidade e consistência dos dados.',
    'testPrioritization.apiCase4Title': 'P1 · Atualização e exclusão com regras',
    'testPrioritization.apiCase4Body':
      'PUT /usuarios/{_id} para atualizar ou criar conforme o contrato; DELETE /usuarios/{_id} para validar exclusão e bloqueio quando existe carrinho associado. São operações mutáveis, então use dados isolados e limpeza.',
    'testPrioritization.apiCase5Title': 'P2 · Filtros e combinações',
    'testPrioritization.apiCase5Body':
      'GET /usuarios com filtros por ID, nome, e-mail ou administrador. Priorize filtros alterados e combinações importantes para consumidores da API.',
    'testPrioritization.apiCase6Title': 'P2/P3 · Entradas de borda e contrato',
    'testPrioritization.apiCase6Body':
      'Campos omitidos, formatos inesperados e consultas sem resultados. A especificação não define todos esses resultados; confirme o contrato esperado antes de torná-los bloqueadores.',
    'testPrioritization.interfaceHeading': 'Priorização para interface',
    'testPrioritization.interfaceIntro':
      'Na interface ServeRest, começo pela jornada de login e pelos dois caminhos de cadastro. Dou prioridade alta à escolha entre usuário normal e administrador, porque ela afeta os acessos disponíveis.',
    'testPrioritization.interfaceExamplesTitle': 'Exemplos em ordem de execução',
    'testPrioritization.uiCase1Title': 'P0 · Entrar e rejeitar credenciais inválidas',
    'testPrioritization.uiCase1Body':
      'Validar login válido, credenciais inválidas e retorno de erro sem abrir uma sessão. É o ponto de entrada para usuários existentes e protege o acesso às áreas autenticadas.',
    'testPrioritization.uiCase2Title': 'P0 · Respeitar o papel da conta',
    'testPrioritization.uiCase2Body':
      'Criar uma conta com a opção “Cadastrar como administrador?” desmarcada e outra marcada; validar os acessos de cada papel. Atribuição incorreta pode conceder privilégios indevidos ou bloquear trabalho.',
    'testPrioritization.uiCase3Title': 'P1 · Cadastro pelos dois caminhos',
    'testPrioritization.uiCase3Body':
      'Acessar o cadastro público por “Cadastre-se” e o cadastro autenticado pelo header ou card. Confirmar que ambos aplicam as mesmas regras e permitem concluir a jornada.',
    'testPrioritization.uiCase4Title': 'P1 · Impedir e-mail duplicado',
    'testPrioritization.uiCase4Body':
      'Tentar cadastrar novamente um e-mail existente nos dois caminhos. A duplicidade afeta identidade e consistência dos dados.',
    'testPrioritization.uiCase5Title': 'P1/P2 · Validações dos campos',
    'testPrioritization.uiCase5Body':
      'Verificar campos obrigatórios e formato do e-mail. Eleve a prioridade se a validação mudou ou se defeitos recentes indicarem regressão.',
    'testPrioritization.uiCase6Title': 'P2/P3 · Variações visuais e conveniência',
    'testPrioritization.uiCase6Body':
      'Verificar fechamento de alertas, navegação de retorno, mensagens e detalhes visuais. Suba a prioridade quando um problema impedir a conclusão ou afetar acessibilidade.',
    'testPrioritization.safetyNote':
      'As prioridades são exemplos iniciais, não uma classificação permanente. Ajuste-as ao impacto para o negócio, à mudança atual, ao histórico de falhas e aos critérios de liberação do produto. Use contas e dados descartáveis em operações que alteram o ambiente.',
    'testCases.pageTitle': 'Como eu escrevo meus casos de teste? | Lucas Camargo',
    'testCases.pageDescription': 'Exemplos de escrita de casos de teste manuais para API e interface.',
    'testCases.back': 'Voltar a Home',
    'testCases.eyebrow': 'Guia prático',
    'testCases.title': 'Como eu escrevo meus casos de teste?',
    'testCases.description': 'Exemplos de testes manuais para API e interface.',
    'testCases.sections': 'Seções da página',
    'testCases.api': 'API',
    'testCases.apiHeading': 'ServeRest API',
    'testCases.interface': 'Interface',
    'testCases.interfaceHeading': 'ServeRest Front',
    'testCases.brandLabel': 'Portfólio de Lucas Camargo',
    'testCases.openApi': 'Abrir documentação da API',
    'testCases.openInterface': 'Abrir aplicação',
    'testCases.empty': 'Nenhum caso adicionado ainda. Inclua casos no arquivo de dados desta seção.',
    'testCases.caseGroup': '{endpoint} · Casos de teste ({count})',
    'testCases.loginGroup': 'Login',
    'testCases.usersGroup': 'Usuários',
    'testCases.userRegistrationGroup': 'Cadastro de usuário',
    'testCases.loadError': 'Não foi possível carregar os casos de teste de {file}. Confira se o arquivo existe e contém uma lista cases válida.',
    'testCases.id': 'ID',
    'testCases.objective': 'Objetivo',
    'testCases.preconditions': 'Pré-condições',
    'testCases.steps': 'Passos',
    'testCases.expectedResult': 'Resultado esperado',
    'testCases.priority': 'Prioridade',
    'testCases.searchLabel': 'Buscar casos de teste',
    'testCases.searchPlaceholder': 'ID, título, endpoint ou texto do cenário',
    'testCases.endpointFilter': 'Endpoint ou fluxo',
    'testCases.allEndpoints': 'Todos os endpoints e fluxos',
    'testCases.priorityFilter': 'Prioridade',
    'testCases.allPriorities': 'Todas as prioridades',
    'testCases.priorityHigh': 'Alta',
    'testCases.priorityMedium': 'Média',
    'testCases.priorityLow': 'Baixa',
    'testCases.resultCount': 'Exibindo {visible} de {total} casos',
    'testCases.noResults': 'Nenhum caso corresponde aos filtros.',
    'results.item1': 'Liderei a validação de APIs governamentais brasileiras para um sistema de empréstimos e ajudei a empresa a entrar entre as mais rápidas da integração, gerando aumento de 24x nas vendas.',
    'results.item2': 'Reduzi o tempo de execução de suítes de regressão em 50% ao desenvolver do zero suítes de automação de testes com Cypress e Playwright focadas em risco e arquitetura POM, entregando o produto de maneira mais rápida e confiável',
    'results.item3': 'Utilizei MCP Gitlab + LLM para revisar commits e compará-los com a documentação criada por meio de cards, também usando MCP Jira.',
    'results.item4': 'Liderei a estratégia de QA, desde o levantamento de requisitos e regras de negócio, para migração de ERP para web, alémcontribuir para aprovação do cliente com alto nível de qualidade e usabilidade.',
    'section.education': 'Formação',
    'education.title': 'Formação acadêmica',
    'education.degree': 'Bacharelado em Engenharia de Software',
    'section.languages': 'Idiomas',
    'languages.title': 'Idiomas',
    'languages.portuguese': 'Português',
    'languages.pt': 'Nativo / Bilíngue',
    'languages.en': 'Proficiência profissional completa',
    'section.contact': 'Contato',
    'contact.title': 'Vamos conversar',
  },
  en: {
    'page.title': 'Lucas Camargo | QA Engineer',
    'page.description':
      'Lucas Camargo’s portfolio: QA Engineer experienced in test automation, API testing, CI/CD, and artificial intelligence.',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Tools',
    'nav.results': 'Results',
    'nav.projects': 'Skills & Projects',
    'nav.education': 'Education',
    'nav.languages': 'Languages',
    'nav.contact': 'Contact',
    'accessibility.navigation': 'Main navigation',
    'accessibility.siteActions': 'Site actions',
    'accessibility.languageSelector': 'Select language',
    'accessibility.profile': 'Profile',
    'accessibility.portrait': 'Portrait of Lucas Camargo',
    'hero.role': 'QA Engineer | Playwright & Cypress | CI/CD | AI Prompt | Manual Testing',
    'hero.description':
      'QA Engineer with 4+ years of experience in automation, API testing, functional validation, and AI-assisted QA workflows for web, mobile, ERP, fintech, and insurance products.',
    'hero.linkedin': 'LinkedIn',
    'hero.email': 'Contact',
    'section.about': 'About',
    'about.title': 'Professional profile',
    'about.summary':
      'QA Engineer focused on strategic automation and AI to improve SDLC quality, reduce risk, accelerate delivery, and optimize time-to-market. I work across web, mobile, ERP, financial, insurance, and government integration projects.',
    'stats.years': 'Years of experience',
    'stats.projects': 'Projects and systems',
    'stats.ai': 'AI-assisted QA',
    'stats.languages': 'Bilingual',
    'section.experience': 'Experience',
    'experience.title': 'Career journey',
    'date.gazin': 'Aug 2025 - Present',
    'date.finnet': 'Feb 2025 - Jul 2025',
    'date.sabium': 'Jan 2024 - Feb 2025',
    'date.ncs': 'Dec 2021 - Dec 2023',
    'experience.gazin':
      'Built and maintained a Playwright framework, integrating it with GitLab CI on an insurance project and making extensive use of LLMs. I was responsible for third-party integration testing via REST APIs using Postman and Swagger. I used AI agents to automate QA processes, such as generating test cases, test data, and test artifacts. I monitored logs and quality metrics with Datadog and Grafana. I also helped maintain legacy systems, focusing on regression testing, business-rule validation, and data analysis in PostgreSQL and SQL Server. In addition, I actively contributed to implementing new features in a mobile banking app.',
    'experience.fintech':
      'Led integration testing of government APIs for credit systems. Developed and maintained an E2E testing framework with Cypress, TypeScript, and JavaScript, using LLMs as an enabler and integrating it with Bitbucket. Automated API tests with Postman and was responsible for validating business rules, analyzing logs, and running AWS Lambdas. Led production acceptance testing after daily releases and worked directly with system users to understand their pain points.',
    'experience.sabium':
      'Developed and maintained the company’s first E2E testing framework, using Cypress, TypeScript, and JavaScript, with the help of LLMs. Led the development of automated API smoke tests with Postman. Created test documentation to provide stakeholders with visibility into deliveries. Was responsible for creating and executing test cases for legacy tax and accounting systems used by retailers.',
    'experience.ncs':
      'Led QA on ERP-to-web migration projects, directly contributing to requirements gathering, business rules, and acceptance criteria. Implemented the first test automation suites with Cypress and integrated them with GitHub Actions. Was responsible for creating internal and external documentation to support the team. Wrote and executed test cases for legacy systems used by building-material warehouses.',
    'section.skills': 'Tools',
    'skills.title': 'Key tools',
    'skills.aiAgents': 'AI agents',
    'section.results': 'Results',
    'results.title': 'Key achievements',
    'section.portfolio': 'Portfolio',
    'projects.title': 'Skills & Projects',
    'projects.testCaseWriting': 'Test Case Writing',
    'projects.testPrioritization': 'Test Prioritization',
    'testPrioritization.pageTitle': 'How do I prioritize tests? | Lucas Camargo',
    'testPrioritization.pageDescription':
      'Here I show how I prioritize API and interface tests.',
    'testPrioritization.back': 'Back to portfolio',
    'testPrioritization.eyebrow': 'Practical guide',
    'testPrioritization.title': 'How do I prioritize tests?',
    'testPrioritization.description':
      'Here I show how I prioritize API and interface tests.',
    'testPrioritization.sections': 'Page sections',
    'testPrioritization.api': 'API',
    'testPrioritization.interface': 'Interface',
    'testPrioritization.openApi': 'Open API documentation',
    'testPrioritization.openInterface': 'Open application',
    'testPrioritization.frameworkTitle': 'Prioritization criteria',
    'testPrioritization.frameworkIntro':
      'Priority combines failure impact and likelihood. I also consider exposure, recent changes, dependencies, and execution cost when ordering tests. Priority tells us when to run a test; severity describes the impact of a defect found.',
    'testPrioritization.scaleTitle': 'Priority levels',
    'testPrioritization.p0Title': 'P0 · Blocker',
    'testPrioritization.p0Body':
      'Essential flow, security risk, or data loss/corruption. Run first and block release if it fails.',
    'testPrioritization.p1Title': 'P1 · High',
    'testPrioritization.p1Body':
      'Important business rule or frequent path with significant impact. Run for every related change and before release.',
    'testPrioritization.p2Title': 'P2 · Medium',
    'testPrioritization.p2Body':
      'Variation, filter, or less frequent scenario with a workaround or limited impact. Include in planned regression.',
    'testPrioritization.p3Title': 'P3 · Low',
    'testPrioritization.p3Body':
      'Low exposure and low impact, usually visual or convenience-related. Run when capacity or relevant changes warrant it.',
    'testPrioritization.orderTitle': 'How to apply it',
    'testPrioritization.order1':
      'Map business goals, users, sensitive data, and essential journeys.',
    'testPrioritization.order2':
      'Assess impact and likelihood using evidence: defect history, complexity, usage frequency, dependencies, and change scope.',
    'testPrioritization.order3':
      'Order tests by risk; run the smallest set that builds confidence in critical paths first.',
    'testPrioritization.order4':
      'Reprioritize when code, incidents, requirements, or usage context change; record the rationale.',
    'testPrioritization.apiHeading': 'API prioritization',
    'testPrioritization.apiIntro':
      'For ServeRest, I prioritize the authentication contract and operations that create, update, or delete data. Then I cover filters, input variations, and less common conditions.',
    'testPrioritization.apiExamplesTitle': 'Examples in execution order',
    'testPrioritization.apiCase1Title': 'P0 · Login and authentication',
    'testPrioritization.apiCase1Body':
      'POST /login with valid and invalid credentials; verify status, message, and token issuance (or absence). Failure blocks authentication and may affect every protected route.',
    'testPrioritization.apiCase2Title': 'P0 · Protected access and data',
    'testPrioritization.apiCase2Body':
      'Use the token in a protected operation, such as creating a cart, and verify its association with the account. Incorrect authorization can allow unauthorized access or interrupt an essential journey.',
    'testPrioritization.apiCase3Title': 'P1 · User creation and email uniqueness',
    'testPrioritization.apiCase3Body':
      'POST /usuarios with valid data and an attempt to reuse an email. Creation and uniqueness are central to identity and data consistency.',
    'testPrioritization.apiCase4Title': 'P1 · Updates and deletion rules',
    'testPrioritization.apiCase4Body':
      'PUT /usuarios/{_id} to update or create as defined by the contract; DELETE /usuarios/{_id} to verify deletion and the block when a cart exists. These operations mutate data, so use isolated data and clean it up.',
    'testPrioritization.apiCase5Title': 'P2 · Filters and combinations',
    'testPrioritization.apiCase5Body':
      'GET /usuarios with filters for ID, name, email, or administrator. Prioritize changed filters and combinations important to API consumers.',
    'testPrioritization.apiCase6Title': 'P2/P3 · Edge inputs and contract',
    'testPrioritization.apiCase6Body':
      'Omitted fields, unexpected formats, and queries with no results. The specification does not define every outcome; confirm the expected contract before making these release blockers.',
    'testPrioritization.interfaceHeading': 'Interface prioritization',
    'testPrioritization.interfaceIntro':
      'For the ServeRest interface, I start with login and the two user-registration paths. I give high priority to the choice between standard and administrator accounts because it affects available access.',
    'testPrioritization.interfaceExamplesTitle': 'Examples in execution order',
    'testPrioritization.uiCase1Title': 'P0 · Sign in and reject invalid credentials',
    'testPrioritization.uiCase1Body':
      'Validate successful login, invalid credentials, and an error response without starting a session. This is the entry point for existing users and protects authenticated areas.',
    'testPrioritization.uiCase2Title': 'P0 · Enforce the account role',
    'testPrioritization.uiCase2Body':
      'Create one account with “Register as administrator?” (“Cadastrar como administrador?”) unchecked and another checked; validate access for each role. Incorrect assignment can grant undue privileges or block work.',
    'testPrioritization.uiCase3Title': 'P1 · Registration through both paths',
    'testPrioritization.uiCase3Body':
      'Open public registration through “Sign up” (“Cadastre-se”) and authenticated registration through the header or card. Confirm both paths apply the same rules and complete the journey.',
    'testPrioritization.uiCase4Title': 'P1 · Prevent duplicate email addresses',
    'testPrioritization.uiCase4Body':
      'Attempt to register an existing email through both paths. Duplicates affect identity and data consistency.',
    'testPrioritization.uiCase5Title': 'P1/P2 · Field validation',
    'testPrioritization.uiCase5Body':
      'Check required fields and email format. Raise priority when validation changes or recent defects indicate regression risk.',
    'testPrioritization.uiCase6Title': 'P2/P3 · Visual and convenience variations',
    'testPrioritization.uiCase6Body':
      'Check alert dismissal, return navigation, messages, and visual details. Raise priority when an issue blocks completion or affects accessibility.',
    'testPrioritization.safetyNote':
      'These priorities are starting examples, not permanent classifications. Adjust them to business impact, current changes, defect history, and product release criteria. Use disposable accounts and data for operations that change the environment.',
    'testCases.pageTitle': 'How I write my test cases | Lucas Camargo',
    'testCases.pageDescription': 'Manual test case writing examples for APIs and user interfaces.',
    'testCases.back': 'Back to portfolio',
    'testCases.eyebrow': 'Practical guide',
    'testCases.title': 'How I write my test cases',
    'testCases.description': 'Manual testing examples for APIs and user interfaces.',
    'testCases.sections': 'Page sections',
    'testCases.api': 'API',
    'testCases.apiHeading': 'ServeRest API',
    'testCases.interface': 'Interface',
    'testCases.interfaceHeading': 'ServeRest Frontend',
    'testCases.brandLabel': 'Lucas Camargo portfolio',
    'testCases.openApi': 'Open API documentation',
    'testCases.openInterface': 'Open application',
    'testCases.empty': 'No test cases added yet. Add cases to this section’s data file.',
    'testCases.caseGroup': '{endpoint} · Test cases ({count})',
    'testCases.loginGroup': 'Login',
    'testCases.usersGroup': 'Users',
    'testCases.userRegistrationGroup': 'User registration',
    'testCases.loadError': 'Could not load test cases from {file}. Check that the file exists and defines a valid cases list.',
    'testCases.id': 'ID',
    'testCases.objective': 'Objective',
    'testCases.preconditions': 'Preconditions',
    'testCases.steps': 'Steps',
    'testCases.expectedResult': 'Expected result',
    'testCases.priority': 'Priority',
    'testCases.searchLabel': 'Search test cases',
    'testCases.searchPlaceholder': 'ID, title, endpoint, or scenario text',
    'testCases.endpointFilter': 'Endpoint or flow',
    'testCases.allEndpoints': 'All endpoints and flows',
    'testCases.priorityFilter': 'Priority',
    'testCases.allPriorities': 'All priorities',
    'testCases.priorityHigh': 'High',
    'testCases.priorityMedium': 'Medium',
    'testCases.priorityLow': 'Low',
    'testCases.resultCount': 'Showing {visible} of {total} test cases',
    'testCases.noResults': 'No test cases match the filters.',
    'results.item1': 'Led validation of Brazilian government APIs for a loan platform, helping the company rank among the fastest to integrate and driving a 24-fold increase in sales.',
    'results.item2': 'Reduced regression suite execution time by 50% by building Cypress and Playwright test automation suites from scratch, focusing on risk and POM architecture to deliver the product faster and more reliably.',
    'results.item3': 'Used GitLab MCP and LLMs to review commits against documentation created in Jira cards, also using the Jira MCP.',
    'results.item4': 'Led the QA strategy for an ERP-to-web migration, from requirements gathering and business-rule analysis through to supporting customer approval with a high standard of quality and usability.',
    'section.education': 'Education',
    'education.title': 'Academic background',
    'education.degree': 'Bachelor’s Degree in Software Engineering',
    'section.languages': 'Languages',
    'languages.title': 'Languages',
    'languages.portuguese': 'Portuguese',
    'languages.pt': 'Native / Bilingual',
    'languages.en': 'Full professional proficiency',
    'section.contact': 'Contact',
    'contact.title': 'Let’s connect',
  }
};

window.portfolioTranslations = translations;

const langButtons = document.querySelectorAll('.lang-btn');

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.pt;

  document.title = dictionary[document.body.dataset.titleKey || 'page.title'];
  document.querySelector('meta[name="description"]').content =
    dictionary[document.body.dataset.descriptionKey || 'page.description'];

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      const text = element.dataset.i18nFile
        ? dictionary[key].replace('{file}', element.dataset.i18nFile)
        : dictionary[key];
      const translatedText = element.dataset.i18nCount
        ? text.replace('{count}', element.dataset.i18nCount)
        : text;
      const contextualText = element.dataset.i18nEndpoint
        ? translatedText.replace('{endpoint}', element.dataset.i18nEndpoint)
        : translatedText;
      element.textContent = `${contextualText}${element.dataset.i18nSuffix || ''}`;
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', dictionary[element.dataset.i18nAriaLabel]);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.setAttribute('alt', dictionary[element.dataset.i18nAlt]);
  });

  langButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  document.documentElement.lang = lang === 'en' ? 'en-US' : 'pt-BR';
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = text;
  return element;
}

function createTranslatedElement(tagName, className, key, dictionary) {
  const element = createTextElement(tagName, className, dictionary[key]);
  element.dataset.i18n = key;
  return element;
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function normalizeSearchText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function renderTestCase(testCase, dictionary, endpoint) {
  if (
    !testCase ||
    !isNonEmptyString(testCase.id) ||
    !isNonEmptyString(testCase.title) ||
    !isNonEmptyString(testCase.objective) ||
    !Array.isArray(testCase.preconditions) ||
    !Array.isArray(testCase.steps) ||
    testCase.steps.length === 0 ||
    !testCase.steps.every(
      (step) =>
        step &&
        isNonEmptyString(step.action) &&
        isNonEmptyString(step.expectedResult)
    ) ||
    (testCase.priority !== undefined && !isNonEmptyString(testCase.priority))
  ) {
    throw new Error('Invalid test case format.');
  }

  const card = document.createElement('details');
  card.className = 'test-case-card';
  card.dataset.endpoint = endpoint;
  card.dataset.priority = testCase.priority || '';
  card.dataset.search = normalizeSearchText(
    [
      endpoint,
      testCase.id,
      testCase.title,
      testCase.objective,
      ...testCase.preconditions,
      ...testCase.steps.flatMap((step) => [step.action, step.expectedResult]),
      testCase.priority || '',
    ].join(' ')
  );

  const summary = document.createElement('summary');
  summary.className = 'test-case-summary';
  summary.textContent = `${testCase.id} — ${testCase.title}`;
  card.append(summary);

  const content = document.createElement('div');
  content.className = 'test-case-content';
  content.append(
    createTranslatedElement('h5', 'test-case-label', 'testCases.objective', dictionary)
  );
  content.append(createTextElement('p', 'test-case-text', testCase.objective));

  if (testCase.priority) {
    const priority = document.createElement('p');
    priority.className = 'test-case-priority';
    const label = document.createElement('strong');
    label.textContent = `${dictionary['testCases.priority']}:`;
    label.dataset.i18n = 'testCases.priority';
    label.dataset.i18nSuffix = ':';
    priority.append(label, document.createTextNode(' '), document.createTextNode(testCase.priority));
    content.append(priority);
  }

  if (testCase.preconditions.length > 0) {
    content.append(
      createTranslatedElement(
        'h5',
        'test-case-label',
        'testCases.preconditions',
        dictionary
      )
    );
    const preconditions = document.createElement('ul');
    testCase.preconditions.forEach((precondition) => {
      if (!isNonEmptyString(precondition)) {
        throw new Error('Invalid test case precondition.');
      }
      preconditions.append(createTextElement('li', '', precondition));
    });
    content.append(preconditions);
  }

  content.append(
    createTranslatedElement('h5', 'test-case-label', 'testCases.steps', dictionary)
  );
  const steps = document.createElement('ol');
  testCase.steps.forEach((step) => {
    const item = document.createElement('li');
    item.append(createTextElement('p', 'test-case-text', step.action));
    const expected = document.createElement('p');
    expected.className = 'test-case-expected';
    const label = document.createElement('strong');
    label.textContent = `${dictionary['testCases.expectedResult']}:`;
    label.dataset.i18n = 'testCases.expectedResult';
    label.dataset.i18nSuffix = ':';
    expected.append(label, document.createTextNode(` ${step.expectedResult}`));
    item.append(expected);
    steps.append(item);
  });
  content.append(steps);
  card.append(content);

  return card;
}

function createTestCaseFilters(container, endpointGroups, caseTranslations, dictionary, language) {
  const filters = document.createElement('div');
  filters.className = 'test-case-filters';

  const searchField = document.createElement('div');
  searchField.className = 'test-case-filter';
  const searchId = `test-case-search-${container.dataset.testCaseType}`;
  const searchLabel = createTranslatedElement(
    'label',
    'test-case-filter-label',
    'testCases.searchLabel',
    dictionary
  );
  searchLabel.htmlFor = searchId;
  const searchInput = document.createElement('input');
  searchInput.id = searchId;
  searchInput.type = 'search';
  searchInput.className = 'test-case-filter-control';
  searchInput.dataset.testCaseSearch = '';
  searchInput.placeholder = dictionary['testCases.searchPlaceholder'];
  searchInput.value = container.dataset.filterSearch || '';
  searchField.append(searchLabel, searchInput);

  const endpointField = document.createElement('div');
  endpointField.className = 'test-case-filter';
  const endpointId = `test-case-endpoint-${container.dataset.testCaseType}`;
  const endpointLabel = createTranslatedElement(
    'label',
    'test-case-filter-label',
    'testCases.endpointFilter',
    dictionary
  );
  endpointLabel.htmlFor = endpointId;
  const endpointSelect = document.createElement('select');
  endpointSelect.id = endpointId;
  endpointSelect.className = 'test-case-filter-control';
  endpointSelect.dataset.testCaseEndpoint = '';

  const allEndpoints = document.createElement('option');
  allEndpoints.value = '';
  allEndpoints.textContent = dictionary['testCases.allEndpoints'];
  endpointSelect.append(allEndpoints);
  endpointGroups.forEach((cases, endpoint) => {
    const option = document.createElement('option');
    option.value = endpoint;
    option.textContent =
      language === 'en'
        ? caseTranslations?.[cases[0].id]?.endpoint || endpoint
        : endpoint;
    endpointSelect.append(option);
  });
  endpointSelect.value = container.dataset.filterEndpoint || '';
  endpointField.append(endpointLabel, endpointSelect);

  const priorityField = document.createElement('div');
  priorityField.className = 'test-case-filter';
  const priorityId = `test-case-priority-${container.dataset.testCaseType}`;
  const priorityLabel = createTranslatedElement(
    'label',
    'test-case-filter-label',
    'testCases.priorityFilter',
    dictionary
  );
  priorityLabel.htmlFor = priorityId;
  const prioritySelect = document.createElement('select');
  prioritySelect.id = priorityId;
  prioritySelect.className = 'test-case-filter-control';
  prioritySelect.dataset.testCasePriority = '';
  [
    ['', 'testCases.allPriorities'],
    ['High', 'testCases.priorityHigh'],
    ['Medium', 'testCases.priorityMedium'],
    ['Low', 'testCases.priorityLow'],
  ].forEach(([value, key]) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = dictionary[key];
    prioritySelect.append(option);
  });
  prioritySelect.value = container.dataset.filterPriority || '';
  priorityField.append(priorityLabel, prioritySelect);

  const resultCount = document.createElement('p');
  resultCount.className = 'test-case-filter-count';
  resultCount.setAttribute('role', 'status');
  resultCount.setAttribute('aria-live', 'polite');

  const noResults = createTranslatedElement(
    'p',
    'test-case-status test-case-no-results',
    'testCases.noResults',
    dictionary
  );
  noResults.hidden = true;

  filters.append(searchField, endpointField, priorityField);
  container.append(filters, resultCount, noResults);

  const applyFilters = () => {
    const query = normalizeSearchText(searchInput.value.trim());
    const selectedEndpoint = endpointSelect.value;
    const selectedPriority = prioritySelect.value;
    container.dataset.filterSearch = searchInput.value;
    container.dataset.filterEndpoint = selectedEndpoint;
    container.dataset.filterPriority = selectedPriority;

    let visibleCount = 0;
    container.querySelectorAll('.test-case-card').forEach((card) => {
      const matches =
        (!query || card.dataset.search.includes(query)) &&
        (!selectedEndpoint || card.dataset.endpoint === selectedEndpoint) &&
        (!selectedPriority || card.dataset.priority === selectedPriority);
      card.hidden = !matches;
      if (matches) {
        visibleCount += 1;
      }
    });

    const hasActiveFilter = Boolean(query || selectedEndpoint || selectedPriority);
    container.querySelectorAll('.test-case-group').forEach((group) => {
      const hasVisibleCases = Boolean(
        group.querySelector('.test-case-card:not([hidden])')
      );
      group.hidden = !hasVisibleCases;
      if (hasActiveFilter && hasVisibleCases) {
        group.open = true;
      }
    });

    resultCount.textContent = dictionary['testCases.resultCount']
      .replace('{visible}', String(visibleCount))
      .replace('{total}', String(container.querySelectorAll('.test-case-card').length));
    noResults.hidden = visibleCount > 0;
  };

  searchInput.addEventListener('input', applyFilters);
  endpointSelect.addEventListener('change', applyFilters);
  prioritySelect.addEventListener('change', applyFilters);

  return applyFilters;
}

function loadTestCases() {
  const containers = document.querySelectorAll('[data-test-case-list]');

  containers.forEach((container) => {
    container.replaceChildren();
    const source = container.dataset.source;

    try {
      const data = window.testCases?.[container.dataset.testCaseType];
      if (
        !data ||
        !Array.isArray(data.cases) ||
        (data.cases.length > 0 &&
          (!isNonEmptyString(data.service) || !isNonEmptyString(data.endpoint)))
      ) {
        throw new Error('The data script must define a cases array, service, and endpoint.');
      }

      if (data.cases.length === 0) {
        const dictionary =
          translations[document.documentElement.lang === 'en-US' ? 'en' : 'pt'];
        container.append(
          createTranslatedElement('p', 'test-case-status', 'testCases.empty', dictionary)
        );
        return;
      }

      const dictionary =
        translations[document.documentElement.lang === 'en-US' ? 'en' : 'pt'];
      const language = document.documentElement.lang === 'en-US' ? 'en' : 'pt';
      const caseTranslations = window.testCaseTranslations?.[container.dataset.testCaseType];
      const endpointGroups = new Map();
      data.cases.forEach((testCase) => {
        const endpoint = testCase.endpoint || data.endpoint;
        if (!isNonEmptyString(endpoint)) {
          throw new Error('Invalid test case endpoint.');
        }
        if (!endpointGroups.has(endpoint)) {
          endpointGroups.set(endpoint, []);
        }
        endpointGroups.get(endpoint).push(testCase);
      });

      const applyFilters = createTestCaseFilters(
        container,
        endpointGroups,
        caseTranslations,
        dictionary,
        language
      );

      endpointGroups.forEach((cases, endpoint) => {
        const group = document.createElement('details');
        group.className = 'test-case-group';
        const translatedEndpoint =
          language === 'en'
            ? caseTranslations?.[cases[0].id]?.endpoint || endpoint
            : endpoint;

        const groupSummary = createTranslatedElement(
          'summary',
          'test-case-group-summary',
          'testCases.caseGroup',
          dictionary
        );
        groupSummary.dataset.i18nCount = String(cases.length);
        groupSummary.dataset.i18nEndpoint = translatedEndpoint;
        groupSummary.textContent = dictionary['testCases.caseGroup']
          .replace('{endpoint}', translatedEndpoint)
          .replace('{count}', cases.length);
        group.append(groupSummary);

        const list = document.createElement('div');
        list.className = 'test-case-list';
        cases.forEach((testCase) => {
          const translation = language === 'en' ? caseTranslations?.[testCase.id] : null;
          if (language === 'en' && !translation) {
            throw new Error(`Missing English translation for test case ${testCase.id}.`);
          }
          list.append(
            renderTestCase(
              translation ? { ...testCase, ...translation } : testCase,
              dictionary,
              translatedEndpoint
            )
          );
        });
        group.append(list);

        let parentGroupKey;
        let parentGroupClass;
        if (container.dataset.testCaseType === 'api' && endpoint.includes('/usuarios')) {
          parentGroupKey = 'testCases.usersGroup';
          parentGroupClass = 'test-case-users-group';
        } else if (
          container.dataset.testCaseType === 'api' &&
          endpoint.includes('/login')
        ) {
          parentGroupKey = 'testCases.loginGroup';
          parentGroupClass = 'test-case-login-group';
        } else if (
          container.dataset.testCaseType === 'interface' &&
          endpoint === 'Login'
        ) {
          parentGroupKey = 'testCases.loginGroup';
          parentGroupClass = 'test-case-login-group';
        } else if (
          container.dataset.testCaseType === 'interface' &&
          endpoint.startsWith('Cadastro de usuário')
        ) {
          parentGroupKey = 'testCases.userRegistrationGroup';
          parentGroupClass = 'test-case-user-registration-group';
        }

        if (parentGroupKey && parentGroupClass) {
          let parentGroup = container.querySelector(`.${parentGroupClass}`);
          if (!parentGroup) {
            parentGroup = document.createElement('details');
            parentGroup.className = `test-case-group ${parentGroupClass}`;
            parentGroup.append(
              createTranslatedElement(
                'summary',
                'test-case-group-summary',
                parentGroupKey,
                dictionary
              )
            );
            container.append(parentGroup);
          }
          parentGroup.append(group);
        } else {
          container.append(group);
        }
      });
      applyFilters();
    } catch (error) {
      container.replaceChildren();
      const dictionary =
        translations[document.documentElement.lang === 'en-US' ? 'en' : 'pt'];
      const message = dictionary['testCases.loadError'].replace('{file}', source);
      const status = createTextElement('p', 'test-case-status error', message);
      status.dataset.i18n = 'testCases.loadError';
      status.dataset.i18nFile = source;
      container.append(status);
      console.error(`Failed to load test cases from ${source}.`, error);
    }
  });

  applyLanguage(document.documentElement.lang === 'en-US' ? 'en' : 'pt');
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang);
    loadTestCases();
  });
});

applyLanguage('pt');
loadTestCases();
