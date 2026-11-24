import { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../data/api-test-cases.js';
import '../data/api-test-cases.en.js';
import '../data/interface-test-cases.js';
import '../data/interface-test-cases.en.js';
import '../script.js';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const translations = window.portfolioTranslations;
const testCases = window.testCases;
const testCaseTranslations = window.testCaseTranslations;

if (!translations || !testCases || !testCaseTranslations) {
  throw new Error('Test case data or portfolio translations failed to load.');
}

function normalizeSearchText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function getEndpointGroups(data) {
  const groups = new Map();
  data.cases.forEach((testCase) => {
    const endpoint = testCase.endpoint || data.endpoint;
    if (!groups.has(endpoint)) {
      groups.set(endpoint, []);
    }
    groups.get(endpoint).push(testCase);
  });
  return groups;
}

function getParentGroup(type, endpoint) {
  if (type === 'api' && endpoint.includes('/usuarios')) {
    return ['testCases.usersGroup', 'test-case-users-group'];
  }
  if (
    (type === 'api' && endpoint.includes('/login')) ||
    (type === 'interface' && endpoint === 'Login')
  ) {
    return ['testCases.loginGroup', 'test-case-login-group'];
  }
  if (type === 'interface' && endpoint.startsWith('Cadastro de usuário')) {
    return ['testCases.userRegistrationGroup', 'test-case-user-registration-group'];
  }
  return null;
}

function TestCaseCard({ testCase, dictionary }) {
  return (
    <details className="test-case-card">
      <summary className="test-case-summary">
        {testCase.id} — {testCase.title}
      </summary>
      <div className="test-case-content">
        <h5 className="test-case-label">{dictionary['testCases.objective']}</h5>
        <p className="test-case-text">{testCase.objective}</p>
        {testCase.priority && (
          <p className="test-case-priority">
            <strong>{dictionary['testCases.priority']}:</strong> {testCase.priority}
          </p>
        )}
        {testCase.preconditions.length > 0 && (
          <>
            <h5 className="test-case-label">
              {dictionary['testCases.preconditions']}
            </h5>
            <ul>
              {testCase.preconditions.map((precondition, index) => (
                <li key={`${testCase.id}-precondition-${index}`}>{precondition}</li>
              ))}
            </ul>
          </>
        )}
        <h5 className="test-case-label">{dictionary['testCases.steps']}</h5>
        <ol>
          {testCase.steps.map((step, index) => (
            <li key={`${testCase.id}-step-${index}`}>
              <p className="test-case-text">{step.action}</p>
              <p className="test-case-expected">
                <strong>{dictionary['testCases.expectedResult']}:</strong>{' '}
                {step.expectedResult}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </details>
  );
}

function EndpointGroup({ endpoint, cases, dictionary, language, translationsForType, filtered }) {
  if (cases.length === 0) {
    return null;
  }

  const translatedEndpoint =
    language === 'en'
      ? translationsForType[cases[0].id]?.endpoint || endpoint
      : endpoint;
  const summary = dictionary['testCases.caseGroup']
    .replace('{endpoint}', translatedEndpoint)
    .replace('{count}', String(cases.length));

  return (
    <details className="test-case-group" open={filtered}>
      <summary className="test-case-group-summary">{summary}</summary>
      <div className="test-case-list">
        {cases.map((testCase) => (
          <TestCaseCard
            key={testCase.id}
            testCase={testCase}
            dictionary={dictionary}
          />
        ))}
      </div>
    </details>
  );
}

function TestCaseList({ type, language, dictionary }) {
  const data = testCases[type];
  const translationsForType = testCaseTranslations[type];
  const [query, setQuery] = useState('');
  const [selectedEndpoint, setSelectedEndpoint] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const endpointGroups = useMemo(() => getEndpointGroups(data), [data]);
  const groups = useMemo(
    () =>
      data.cases.map((testCase) => {
        const translation = language === 'en' ? translationsForType[testCase.id] : null;
        if (language === 'en' && !translation) {
          throw new Error(`Missing English translation for test case ${testCase.id}.`);
        }
        const displayCase = translation ? { ...testCase, ...translation } : testCase;
        const endpoint = testCase.endpoint || data.endpoint;
        const searchableText = [
          endpoint,
          displayCase.id,
          displayCase.title,
          displayCase.objective,
          ...displayCase.preconditions,
          ...displayCase.steps.flatMap((step) => [step.action, step.expectedResult]),
          displayCase.priority || '',
        ].join(' ');
        return {
          ...testCase,
          displayCase,
          endpoint,
          searchableText: normalizeSearchText(searchableText),
        };
      }),
    [data, language, translationsForType]
  );
  const normalizedQuery = normalizeSearchText(query.trim());
  const visibleCases = groups.filter(
    (testCase) =>
      (!normalizedQuery || testCase.searchableText.includes(normalizedQuery)) &&
      (!selectedEndpoint || testCase.endpoint === selectedEndpoint) &&
      (!selectedPriority || testCase.priority === selectedPriority)
  );
  const visibleCaseIds = new Set(visibleCases.map((testCase) => testCase.id));
  const filteredGroups = Array.from(endpointGroups, ([endpoint, cases]) => [
    endpoint,
    cases
      .filter((testCase) => visibleCaseIds.has(testCase.id))
      .map((testCase) => groups.find((item) => item.id === testCase.id).displayCase),
  ]);
  const parentGroups = new Map();
  const ungroupedGroups = [];

  filteredGroups.forEach((group) => {
    if (group[1].length === 0) {
      return;
    }
    const parent = getParentGroup(type, group[0]);
    if (!parent) {
      ungroupedGroups.push(group);
      return;
    }
    if (!parentGroups.has(parent[1])) {
      parentGroups.set(parent[1], { translationKey: parent[0], groups: [] });
    }
    parentGroups.get(parent[1]).groups.push(group);
  });

  const hasActiveFilter = Boolean(query || selectedEndpoint || selectedPriority);
  const priorityOptions = [
    ['', 'testCases.allPriorities'],
    ['High', 'testCases.priorityHigh'],
    ['Medium', 'testCases.priorityMedium'],
    ['Low', 'testCases.priorityLow'],
  ];

  return (
    <div
      className="test-case-container"
      data-test-case-list
      data-test-case-type={type}
    >
      <div className="test-case-filters">
        <div className="test-case-filter">
          <label
            className="test-case-filter-label"
            htmlFor={`test-case-search-${type}`}
          >
            {dictionary['testCases.searchLabel']}
          </label>
          <input
            id={`test-case-search-${type}`}
            className="test-case-filter-control"
            data-test-case-search=""
            type="search"
            placeholder={dictionary['testCases.searchPlaceholder']}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="test-case-filter">
          <label
            className="test-case-filter-label"
            htmlFor={`test-case-endpoint-${type}`}
          >
            {dictionary['testCases.endpointFilter']}
          </label>
          <select
            id={`test-case-endpoint-${type}`}
            className="test-case-filter-control"
            data-test-case-endpoint=""
            value={selectedEndpoint}
            onChange={(event) => setSelectedEndpoint(event.target.value)}
          >
            <option value="">{dictionary['testCases.allEndpoints']}</option>
            {Array.from(endpointGroups, ([endpoint, cases]) => {
              const label =
                language === 'en'
                  ? translationsForType[cases[0].id]?.endpoint || endpoint
                  : endpoint;
              return (
                <option key={endpoint} value={endpoint}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="test-case-filter">
          <label
            className="test-case-filter-label"
            htmlFor={`test-case-priority-${type}`}
          >
            {dictionary['testCases.priorityFilter']}
          </label>
          <select
            id={`test-case-priority-${type}`}
            className="test-case-filter-control"
            data-test-case-priority=""
            value={selectedPriority}
            onChange={(event) => setSelectedPriority(event.target.value)}
          >
            {priorityOptions.map(([value, key]) => (
              <option key={value || 'all'} value={value}>
                {dictionary[key]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className="test-case-filter-count" role="status" aria-live="polite">
        {dictionary['testCases.resultCount']
          .replace('{visible}', String(visibleCases.length))
          .replace('{total}', String(data.cases.length))}
      </p>
      {visibleCases.length === 0 && (
        <p className="test-case-status test-case-no-results">
          {dictionary['testCases.noResults']}
        </p>
      )}
      {Array.from(parentGroups, ([className, parent]) => (
        <details
          key={className}
          className={`test-case-group ${className}`}
          open={hasActiveFilter}
        >
          <summary className="test-case-group-summary">
            {dictionary[parent.translationKey]}
          </summary>
          {parent.groups.map(([endpoint, cases]) => (
            <EndpointGroup
              key={endpoint}
              endpoint={endpoint}
              cases={cases}
              dictionary={dictionary}
              language={language}
              translationsForType={translationsForType}
              filtered={hasActiveFilter}
            />
          ))}
        </details>
      ))}
      {ungroupedGroups.map(([endpoint, cases]) => (
        <EndpointGroup
          key={endpoint}
          endpoint={endpoint}
          cases={cases}
          dictionary={dictionary}
          language={language}
          translationsForType={translationsForType}
          filtered={hasActiveFilter}
        />
      ))}
    </div>
  );
}

function TestCasePage() {
  const [language, setLanguage] = useState('pt');
  const dictionary = translations[language];

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]');
    if (!description) {
      throw new Error('The page description meta tag is missing.');
    }
    document.title = dictionary['testCases.pageTitle'];
    description.content = dictionary['testCases.pageDescription'];
    document.documentElement.lang = language === 'en' ? 'en-US' : 'pt-BR';
  }, [dictionary, language]);

  return (
    <div className="page-shell">
      <header className="topbar subpage-topbar">
        <a
          className="brand"
          href="index.html"
          aria-label={dictionary['testCases.brandLabel']}
        >
          <span className="brand-name">lucas</span>
          <span className="brand-tag">@qa</span>
        </a>
        <div
          className="nav-actions subpage-actions"
          aria-label={dictionary['accessibility.siteActions']}
        >
          <LanguageSwitcher
            language={language}
            onChange={setLanguage}
            dictionary={dictionary}
          />
          <a className="secondary-btn" href="index.html">
            {dictionary['testCases.back']}
          </a>
        </div>
      </header>
      <main>
        <section className="hero subpage-hero">
          <div className="hero-content">
            <div className="hero-copy">
              <span className="eyebrow">{dictionary['testCases.eyebrow']}</span>
              <h1>{dictionary['testCases.title']}</h1>
              <p>{dictionary['testCases.description']}</p>
              <nav
                className="skills-list"
                aria-label={dictionary['testCases.sections']}
              >
                <a href="#api">{dictionary['testCases.api']}</a>
                <a href="#interface">{dictionary['testCases.interface']}</a>
              </nav>
            </div>
          </div>
        </section>
        <section className="section" id="api">
          <div className="section-head">
            <span className="eyebrow">{dictionary['testCases.api']}</span>
            <h3>{dictionary['testCases.apiHeading']}</h3>
          </div>
          <a
            className="primary-btn"
            href="https://serverest.dev/?lang=en#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dictionary['testCases.openApi']}
          </a>
          <TestCaseList type="api" language={language} dictionary={dictionary} />
        </section>
        <section className="section" id="interface">
          <div className="section-head">
            <span className="eyebrow">{dictionary['testCases.interface']}</span>
            <h3>{dictionary['testCases.interfaceHeading']}</h3>
          </div>
          <a
            className="primary-btn"
            href="https://front.serverest.dev/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dictionary['testCases.openInterface']}
          </a>
          <TestCaseList type="interface" language={language} dictionary={dictionary} />
        </section>
      </main>
    </div>
  );
}

const rootElement = document.getElementById('test-case-app');
if (!rootElement) {
  throw new Error('The React root element is missing.');
}

createRoot(rootElement).render(<TestCasePage />);
