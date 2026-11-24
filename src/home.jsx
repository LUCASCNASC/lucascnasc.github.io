import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import portrait from '../assets/foto.jpeg';
import '../script.js';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const translations = window.portfolioTranslations;

if (!translations) {
  throw new Error('Portfolio translations failed to load.');
}

const navigation = [
  ['#home', 'nav.home'],
  ['#about', 'nav.about'],
  ['#experience', 'nav.experience'],
  ['#skills', 'nav.skills'],
  ['#results', 'nav.results'],
  ['#projects', 'nav.projects'],
  ['#education', 'nav.education'],
  ['#languages', 'nav.languages'],
  ['#contact', 'nav.contact'],
];

const experiences = [
  ['date.gazin', 'QA Engineer | Gazin Tech', 'experience.gazin'],
  ['date.finnet', 'QA Engineer | Gooroo Crédito / Finnet', 'experience.fintech'],
  ['date.sabium', 'QA Analyst | Sabium Sistemas', 'experience.sabium'],
  ['date.ncs', 'Test Analyst | NCS Intelligent Systems', 'experience.ncs'],
];

const skills = [
  ['Playwright', 'https://playwright.dev/'],
  ['Cypress', 'https://www.cypress.io/'],
  ['Appium', 'https://appium.io/'],
  ['Postman', 'https://www.postman.com/'],
  ['Bruno', 'https://www.usebruno.com/'],
  ['Swagger', 'https://swagger.io/'],
  ['GitHub Copilot', 'https://github.com/features/copilot'],
  ['Gemini', 'https://gemini.google.com/'],
  ['Claude Code', 'https://docs.anthropic.com/en/docs/claude-code/overview'],
  ['skills.aiAgents'],
  ['CI/CD', 'https://about.gitlab.com/topics/ci-cd/'],
  ['GitLab', 'https://about.gitlab.com/'],
  ['GitHub Actions', 'https://github.com/features/actions'],
  ['Docker', 'https://www.docker.com/'],
  ['Jenkins', 'https://www.jenkins.io/'],
  ['Azure DevOps', 'https://azure.microsoft.com/products/devops'],
  ['Bitbucket', 'https://bitbucket.org/product/'],
  ['PostgreSQL', 'https://www.postgresql.org/'],
  ['SQL Server', 'https://learn.microsoft.com/sql/sql-server/?view=sql-server-ver17'],
  ['Mongo DB', 'https://www.mongodb.com/'],
  ['AWS', 'https://aws.amazon.com/'],
  ['Datadog', 'https://www.datadoghq.com/'],
  ['Grafana', 'https://grafana.com/'],
  ['Jira', 'https://www.atlassian.com/software/jira'],
  ['Confluence', 'https://www.atlassian.com/software/confluence'],
  ['Qase', 'https://qase.io/'],
  ['BDD', 'https://cucumber.io/docs/bdd/'],
  ['Scrum', 'https://scrumguides.org/'],
];

function PortfolioHome() {
  const [language, setLanguage] = useState('pt');
  const dictionary = translations[language];

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]');
    if (!description) {
      throw new Error('The page description meta tag is missing.');
    }
    document.title = dictionary['page.title'];
    description.content = dictionary['page.description'];
    document.documentElement.lang = language === 'en' ? 'en-US' : 'pt-BR';
  }, [dictionary, language]);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-name">lucas</span>
          <span className="brand-tag">@qa</span>
        </div>
        <nav
          className="nav"
          aria-label={dictionary['accessibility.navigation']}
        >
          {navigation.map(([href, key]) => (
            <a key={href} href={href}>
              {dictionary[key]}
            </a>
          ))}
        </nav>
        <div
          className="nav-actions"
          aria-label={dictionary['accessibility.siteActions']}
        >
          <LanguageSwitcher
            language={language}
            onChange={setLanguage}
            dictionary={dictionary}
          />
          <div
            className="avatar-mini"
            aria-label={dictionary['accessibility.profile']}
          >
            L
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="photo-frame">
              <img src={portrait} alt={dictionary['accessibility.portrait']} />
            </div>
            <div className="hero-copy">
              <h1>Lucas Camargo</h1>
              <h2>{dictionary['hero.role']}</h2>
              <p>{dictionary['hero.description']}</p>
              <div className="hero-actions">
                <a
                  href="https://www.linkedin.com/in/lucascamargo-qa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
                  {dictionary['hero.linkedin']}
                </a>
                <a href="#contact" className="secondary-btn">
                  {dictionary['hero.email']}
                </a>
                <a
                  href="https://github.com/LUCASCNASC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-head">
            <span className="eyebrow">{dictionary['section.about']}</span>
            <h3>{dictionary['about.title']}</h3>
          </div>
          <div className="about-grid">
            <div className="card summary-card">
              <p>{dictionary['about.summary']}</p>
            </div>
            <div className="stats-grid">
              {[
                ['4+', 'stats.years'],
                ['15+', 'stats.projects'],
                ['AI', 'stats.ai'],
                ['PT/EN', 'stats.languages'],
              ].map(([value, key]) => (
                <div className="mini-stat" key={key}>
                  <strong>{value}</strong>
                  <span>{dictionary[key]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-head">
            <span className="eyebrow">{dictionary['section.experience']}</span>
            <h3>{dictionary['experience.title']}</h3>
          </div>
          <div className="timeline">
            {experiences.map(([dateKey, title, descriptionKey]) => (
              <article className="timeline-item" key={dateKey}>
                <div className="timeline-date">{dictionary[dateKey]}</div>
                <div className="timeline-content">
                  <h4>{title}</h4>
                  <p>{dictionary[descriptionKey]}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-head">
            <span className="eyebrow">{dictionary['section.skills']}</span>
            <h3>{dictionary['skills.title']}</h3>
          </div>
          <div className="skills-list">
            {skills.map(([label, href]) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              ) : (
                <span key={label}>{dictionary[label]}</span>
              )
            )}
          </div>
        </section>

        <section className="section" id="results">
          <div className="section-head">
            <span className="eyebrow">{dictionary['section.results']}</span>
            <h3>{dictionary['results.title']}</h3>
          </div>
          <ul className="results-list">
            {['results.item1', 'results.item2', 'results.item3', 'results.item4'].map(
              (key) => (
                <li key={key}>{dictionary[key]}</li>
              )
            )}
          </ul>
        </section>

        <section className="section" id="projects">
          <div className="section-head">
            <span className="eyebrow">{dictionary['section.portfolio']}</span>
            <h3>{dictionary['projects.title']}</h3>
          </div>
          <div className="skills-list">
            <a href="test-case-writing.html" className="skill-button">
              {dictionary['projects.testCaseWriting']}
            </a>
            <a href="test-prioritization.html" className="skill-button">
              {dictionary['projects.testPrioritization']}
            </a>
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-head">
            <span className="eyebrow">{dictionary['section.education']}</span>
            <h3>{dictionary['education.title']}</h3>
          </div>
          <div className="education-card">
            <h4>Unifatecie</h4>
            <p>{dictionary['education.degree']}</p>
            <small>2023 - 2027</small>
          </div>
        </section>

        <section className="section" id="languages">
          <div className="section-head">
            <span className="eyebrow">{dictionary['section.languages']}</span>
            <h3>{dictionary['languages.title']}</h3>
          </div>
          <div className="language-grid">
            <div className="language-item">
              <strong>{dictionary['languages.portuguese']}</strong>
              <span>{dictionary['languages.pt']}</span>
            </div>
            <div className="language-item">
              <strong>English</strong>
              <span>{dictionary['languages.en']}</span>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-head">
            <span className="eyebrow">{dictionary['section.contact']}</span>
            <h3>{dictionary['contact.title']}</h3>
          </div>
          <div className="contact-card">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:nascimentocamargolucas@gmail.com">
                nascimentocamargolucas@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/lucascamargo-qa"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/lucascamargo-qa
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/LUCASCNASC"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/LUCASCNASC
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

const rootElement = document.getElementById('home-app');
if (!rootElement) {
  throw new Error('The React root element is missing.');
}

createRoot(rootElement).render(<PortfolioHome />);
