const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const htmlFiles = [
  'index.html',
  'test-case-writing.html',
  'test-prioritization.html',
];
const dataFiles = [
  'api-test-cases.js',
  'api-test-cases.en.js',
  'interface-test-cases.js',
  'interface-test-cases.en.js',
];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function loadTranslations() {
  const source = read('script.js');
  const end = source.indexOf('\nconst langButtons');
  assert.notEqual(end, -1, 'Could not locate the end of the translations object.');

  const context = { window: {} };
  vm.runInNewContext(
    `${source.slice(0, end)}\nglobalThis.loadedTranslations = translations;`,
    context
  );
  return context.loadedTranslations;
}

function loadDataFile(relativePath, globalName, key) {
  const context = { window: {} };
  vm.runInNewContext(read(relativePath), context);
  return context.window[globalName][key];
}

function checkJavaScriptSyntax() {
  const files = [
    'script.js',
    ...dataFiles.map((file) => path.join('data', file)),
    'scripts/validate-site.js',
    'vite.config.mjs',
  ];

  files.forEach((file) => {
    const result = spawnSync(process.execPath, ['--check', path.join(root, file)], {
      encoding: 'utf8',
    });
    assert.equal(
      result.status,
      0,
      `JavaScript syntax check failed for ${file}:\n${result.stderr || result.stdout}`
    );
  });
}

function checkTranslations(translations) {
  htmlFiles.forEach((file) => {
    const source = read(file);
    const keys = source.matchAll(/\bdata-i18n(?:-aria-label|-alt|-placeholder)?="([^"]+)"/g);
    for (const [, key] of keys) {
      assert.ok(translations.pt[key], `${file} references missing Portuguese key "${key}".`);
      assert.ok(translations.en[key], `${file} references missing English key "${key}".`);
    }
  });

  [
    'src/LanguageSwitcher.jsx',
    'src/home.jsx',
    'src/test-case-writing.jsx',
    'src/test-prioritization.jsx',
  ].forEach((file) => {
    const keys = read(file).matchAll(
      /['"]((?:page|nav|accessibility|hero|section|about|stats|experience|date|skills|results|projects|testPrioritization|testCases|education|languages|contact)\.[^'"]+)['"]/g
    );
    for (const [, key] of keys) {
      assert.ok(translations.pt[key], `${file} references missing Portuguese key "${key}".`);
      assert.ok(translations.en[key], `${file} references missing English key "${key}".`);
    }
  });

  assert.equal(
    translations.pt['testCases.title'],
    'Como eu escrevo meus casos de teste?',
    'The Portuguese test-case page title changed unexpectedly.'
  );
  assert.equal(
    translations.pt['testPrioritization.description'],
    'Aqui mostro como priorizo testes de API e interface.',
    'The Portuguese prioritization description changed unexpectedly.'
  );
  assert.equal(
    translations.pt['testPrioritization.pageDescription'],
    'Aqui mostro como priorizo testes de API e interface.',
    'The Portuguese prioritization meta description is inconsistent.'
  );

  [
    'testCases.searchLabel',
    'testCases.searchPlaceholder',
    'testCases.endpointFilter',
    'testCases.allEndpoints',
    'testCases.priorityFilter',
    'testCases.allPriorities',
    'testCases.priorityHigh',
    'testCases.priorityMedium',
    'testCases.priorityLow',
    'testCases.resultCount',
    'testCases.noResults',
  ].forEach((key) => {
    assert.ok(translations.pt[key], `Missing Portuguese translation "${key}".`);
    assert.ok(translations.en[key], `Missing English translation "${key}".`);
  });
}

function checkInternalLinks() {
  const reactEntries = {
    'index.html': 'src/home.jsx',
    'test-case-writing.html': 'src/test-case-writing.jsx',
    'test-prioritization.html': 'src/test-prioritization.jsx',
  };

  htmlFiles.forEach((file) => {
    const source = `${read(file)}\n${read(reactEntries[file])}`;
    const links = source.matchAll(/\bhref\s*=\s*["']([^"']+)["']/g);

    for (const [, href] of links) {
      if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href)) {
        continue;
      }

      const url = new URL(href, `https://portfolio.local/${file}`);
      const target = path.resolve(root, `.${decodeURIComponent(url.pathname)}`);
      assert.ok(
        target === root || target.startsWith(`${root}${path.sep}`),
        `${file} contains an internal link outside the project: ${href}`
      );
      assert.ok(fs.existsSync(target), `${file} links to missing file "${href}".`);

      if (url.hash) {
        const targetFile = path.relative(root, target).replace(/\\/g, '/');
        const targetHtml = `${read(targetFile)}\n${
          reactEntries[targetFile] ? read(reactEntries[targetFile]) : ''
        }`;
        const targetIds = new Set(
          [...targetHtml.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id)
        );
        assert.ok(
          targetIds.has(decodeURIComponent(url.hash.slice(1))),
          `${file} links to missing section "${href}".`
        );
      }
    }
  });

  const home = read('src/home.jsx');
  assert.match(
    home,
    /href="test-case-writing\.html"/,
    'Home is missing the test-case page link.'
  );
  assert.match(
    home,
    /href="test-prioritization\.html"/,
    'Home is missing the prioritization page link.'
  );
  assert.match(
    read('src/test-case-writing.jsx'),
    /href="index\.html"/,
    'React test-case page is missing its home link.'
  );
  assert.match(
    read('src/test-case-writing.jsx'),
    /href="#api"/,
    'React test-case page is missing its API section link.'
  );
  assert.match(
    read('src/test-case-writing.jsx'),
    /href="#interface"/,
    'React test-case page is missing its interface section link.'
  );
  assert.match(
    read('src/test-prioritization.jsx'),
    /href="index\.html#projects"/,
    'Prioritization page is missing its home link.'
  );
}

function checkTestCaseData() {
  const collections = [
    {
      type: 'api',
      dataFile: 'data/api-test-cases.js',
      translationFile: 'data/api-test-cases.en.js',
    },
    {
      type: 'interface',
      dataFile: 'data/interface-test-cases.js',
      translationFile: 'data/interface-test-cases.en.js',
    },
  ];

  collections.forEach(({ type, dataFile, translationFile }) => {
    const data = loadDataFile(dataFile, 'testCases', type);
    const translationsContext = { window: {} };
    vm.runInNewContext(read(translationFile), translationsContext);
    const englishCases = translationsContext.window.testCaseTranslations[type];
    const ids = new Set();

    assert.ok(Array.isArray(data.cases), `${dataFile} must export a cases array.`);
    data.cases.forEach((testCase) => {
      assert.ok(
        testCase.id && testCase.title && testCase.objective,
        `${dataFile} has a case with missing identity or text.`
      );
      assert.ok(!ids.has(testCase.id), `${dataFile} contains duplicate ID "${testCase.id}".`);
      ids.add(testCase.id);
      assert.ok(
        Array.isArray(testCase.preconditions),
        `${testCase.id} must define preconditions.`
      );
      assert.ok(
        Array.isArray(testCase.steps) && testCase.steps.length > 0,
        `${testCase.id} must define steps.`
      );
      assert.ok(
        testCase.steps.every((step) => step.action && step.expectedResult),
        `${testCase.id} has a step without an action or expected result.`
      );
      assert.ok(
        ['High', 'Medium', 'Low'].includes(testCase.priority),
        `${testCase.id} has an invalid priority.`
      );

      const english = englishCases[testCase.id];
      assert.ok(english, `${translationFile} is missing ${testCase.id}.`);
      assert.ok(
        english.title && english.objective,
        `${testCase.id} is missing translated title or objective.`
      );
      assert.ok(
        Array.isArray(english.preconditions) &&
          english.preconditions.length === testCase.preconditions.length,
        `${testCase.id} has an incomplete English precondition translation.`
      );
      assert.ok(
        Array.isArray(english.steps) && english.steps.length === testCase.steps.length,
        `${testCase.id} has an incomplete English step translation.`
      );
      assert.ok(
        english.steps.every((step) => step.action && step.expectedResult),
        `${testCase.id} has an incomplete English step translation.`
      );
    });
  });
}

function checkFilterImplementation() {
  const source = read('src/test-case-writing.jsx');
  [
    'data-test-case-search=""',
    'data-test-case-endpoint=""',
    'data-test-case-priority=""',
    'normalizeSearchText',
    'testCases.noResults',
  ].forEach((marker) => {
    assert.ok(source.includes(marker), `Test-case filter implementation is missing "${marker}".`);
  });
}

function main() {
  const translations = loadTranslations();
  checkJavaScriptSyntax();
  checkTranslations(translations);
  checkInternalLinks();
  checkTestCaseData();
  checkFilterImplementation();
  console.log('Portfolio validation passed: syntax, translations, links, test data, and filters.');
}

main();
