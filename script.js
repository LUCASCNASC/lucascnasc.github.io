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
    'testCases.pageTitle': 'Como eu escrevo os casos de teste? | Lucas Camargo',
    'testCases.pageDescription': 'Exemplos de escrita de casos de teste manuais para API e interface.',
    'testCases.back': 'Voltar ao portfólio',
    'testCases.eyebrow': 'Guia prático',
    'testCases.title': 'Como eu escrevo os casos de teste?',
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

function renderTestCase(testCase, dictionary) {
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
            renderTestCase(translation ? { ...testCase, ...translation } : testCase, dictionary)
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
    } catch (error) {
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
