import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../script.js';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const translations = window.portfolioTranslations;

if (!translations) {
  throw new Error('Portfolio translations failed to load.');
}

const priorityLevels = [
  ['priority-p0', 'testPrioritization.p0Title', 'testPrioritization.p0Body'],
  ['priority-p1', 'testPrioritization.p1Title', 'testPrioritization.p1Body'],
  ['priority-p2', 'testPrioritization.p2Title', 'testPrioritization.p2Body'],
  ['priority-p3', 'testPrioritization.p3Title', 'testPrioritization.p3Body'],
];

const apiExamples = [
  ['P0', 'priority-tag-p0', 'testPrioritization.apiCase1Title', 'testPrioritization.apiCase1Body'],
  ['P0', 'priority-tag-p0', 'testPrioritization.apiCase2Title', 'testPrioritization.apiCase2Body'],
  ['P1', 'priority-tag-p1', 'testPrioritization.apiCase3Title', 'testPrioritization.apiCase3Body'],
  ['P1', 'priority-tag-p1', 'testPrioritization.apiCase4Title', 'testPrioritization.apiCase4Body'],
  ['P2', 'priority-tag-p2', 'testPrioritization.apiCase5Title', 'testPrioritization.apiCase5Body'],
  ['P2/P3', 'priority-tag-p2', 'testPrioritization.apiCase6Title', 'testPrioritization.apiCase6Body'],
];

const interfaceExamples = [
  ['P0', 'priority-tag-p0', 'testPrioritization.uiCase1Title', 'testPrioritization.uiCase1Body'],
  ['P0', 'priority-tag-p0', 'testPrioritization.uiCase2Title', 'testPrioritization.uiCase2Body'],
  ['P1', 'priority-tag-p1', 'testPrioritization.uiCase3Title', 'testPrioritization.uiCase3Body'],
  ['P1', 'priority-tag-p1', 'testPrioritization.uiCase4Title', 'testPrioritization.uiCase4Body'],
  ['P1/P2', 'priority-tag-p2', 'testPrioritization.uiCase5Title', 'testPrioritization.uiCase5Body'],
  ['P2/P3', 'priority-tag-p3', 'testPrioritization.uiCase6Title', 'testPrioritization.uiCase6Body'],
];

function ExampleGrid({ examples, dictionary }) {
  return (
    <div className="prioritization-example-grid">
      {examples.map(([priority, className, titleKey, bodyKey]) => (
        <article className="prioritization-example" key={titleKey}>
          <span className={`priority-tag ${className}`}>{priority}</span>
          <h4>{dictionary[titleKey]}</h4>
          <p>{dictionary[bodyKey]}</p>
        </article>
      ))}
    </div>
  );
}

function PrioritizationPage() {
  const [language, setLanguage] = useState('pt');
  const dictionary = translations[language];

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]');
    if (!description) {
      throw new Error('The page description meta tag is missing.');
    }
    document.title = dictionary['testPrioritization.pageTitle'];
    description.content = dictionary['testPrioritization.pageDescription'];
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
          <a className="secondary-btn" href="index.html#projects">
            {dictionary['testPrioritization.back']}
          </a>
        </div>
      </header>

      <main>
        <section className="hero subpage-hero">
          <div className="hero-content">
            <div className="hero-copy">
              <span className="eyebrow">
                {dictionary['testPrioritization.eyebrow']}
              </span>
              <h1>{dictionary['testPrioritization.title']}</h1>
              <p>{dictionary['testPrioritization.description']}</p>
              <nav
                className="skills-list"
                aria-label={dictionary['testPrioritization.sections']}
              >
                <a href="#api">{dictionary['testPrioritization.api']}</a>
                <a href="#interface">
                  {dictionary['testPrioritization.interface']}
                </a>
              </nav>
            </div>
          </div>
        </section>

        <section
          className="section"
          aria-labelledby="prioritization-framework-title"
        >
          <div className="section-head">
            <span className="eyebrow">
              {dictionary['testPrioritization.eyebrow']}
            </span>
            <h2 id="prioritization-framework-title">
              {dictionary['testPrioritization.frameworkTitle']}
            </h2>
            <p>{dictionary['testPrioritization.frameworkIntro']}</p>
          </div>
          <h3 className="prioritization-subtitle">
            {dictionary['testPrioritization.scaleTitle']}
          </h3>
          <div className="priority-level-grid">
            {priorityLevels.map(([className, titleKey, bodyKey]) => (
              <article
                className={`priority-level ${className}`}
                key={titleKey}
              >
                <h4>{dictionary[titleKey]}</h4>
                <p>{dictionary[bodyKey]}</p>
              </article>
            ))}
          </div>
          <h3 className="prioritization-subtitle">
            {dictionary['testPrioritization.orderTitle']}
          </h3>
          <ol className="prioritization-steps">
            {[
              'testPrioritization.order1',
              'testPrioritization.order2',
              'testPrioritization.order3',
              'testPrioritization.order4',
            ].map((key) => (
              <li key={key}>{dictionary[key]}</li>
            ))}
          </ol>
        </section>

        <section className="section prioritization-section" id="api">
          <div className="section-head">
            <span className="eyebrow">
              {dictionary['testPrioritization.api']}
            </span>
            <h2>{dictionary['testPrioritization.apiHeading']}</h2>
            <p>{dictionary['testPrioritization.apiIntro']}</p>
          </div>
          <a
            className="primary-btn"
            href="https://serverest.dev/?lang=en#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dictionary['testPrioritization.openApi']}
          </a>
          <h3 className="prioritization-subtitle">
            {dictionary['testPrioritization.apiExamplesTitle']}
          </h3>
          <ExampleGrid examples={apiExamples} dictionary={dictionary} />
        </section>

        <section
          className="section prioritization-section"
          id="interface"
        >
          <div className="section-head">
            <span className="eyebrow">
              {dictionary['testPrioritization.interface']}
            </span>
            <h2>{dictionary['testPrioritization.interfaceHeading']}</h2>
            <p>{dictionary['testPrioritization.interfaceIntro']}</p>
          </div>
          <a
            className="primary-btn"
            href="https://front.serverest.dev/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dictionary['testPrioritization.openInterface']}
          </a>
          <h3 className="prioritization-subtitle">
            {dictionary['testPrioritization.interfaceExamplesTitle']}
          </h3>
          <ExampleGrid examples={interfaceExamples} dictionary={dictionary} />
        </section>
        <aside className="prioritization-note" role="note">
          {dictionary['testPrioritization.safetyNote']}
        </aside>
      </main>
    </div>
  );
}

const rootElement = document.getElementById('prioritization-app');
if (!rootElement) {
  throw new Error('The React root element is missing.');
}

createRoot(rootElement).render(<PrioritizationPage />);
