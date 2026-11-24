export default function LanguageSwitcher({ language, onChange, dictionary }) {
  return (
    <div
      className="lang-switch"
      aria-label={dictionary['accessibility.languageSelector']}
    >
      <button
        className={`lang-btn${language === 'pt' ? ' active' : ''}`}
        aria-pressed={language === 'pt'}
        onClick={() => onChange('pt')}
        type="button"
      >
        PT
      </button>
      <button
        className={`lang-btn${language === 'en' ? ' active' : ''}`}
        aria-pressed={language === 'en'}
        onClick={() => onChange('en')}
        type="button"
      >
        EN
      </button>
    </div>
  );
}
