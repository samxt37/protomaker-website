import { Link, NavLink } from 'react-router-dom';
import { MessageCircle, Instagram } from 'lucide-react';
import { useI18n } from '../../i18n/LanguageContext';
import { LANGS } from '../../data/translations';
import Logo from '../common/Logo';

/**
 * Sticky header: logo mark, nav, language switcher, WhatsApp order CTA.
 */
export default function Header() {
  const { lang, setLang, t, wa } = useI18n();

  return (
    <header className="site-header" data-component="header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Protomaker — home">
          <Logo size={30} />
          <span className="brand-name">PROTOMAKER</span>
        </Link>

        <nav className="header-nav" aria-label="Main">
          <NavLink to="/products" className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
            {t.nav.products}
          </NavLink>
          <NavLink to="/news" className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
            {t.nav.news}
          </NavLink>
          <a href="#faq" className="nav-link nav-link-faq">
            {t.nav.faq}
          </a>
        </nav>

        <div className="lang-switcher" role="group" aria-label="Language">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              className={`lang-btn${lang === l.code ? ' is-active' : ''}`}
              onClick={() => setLang(l.code)}
              aria-pressed={lang === l.code}
            >
              {l.label}
            </button>
          ))}
        </div>

        <a
          className="wa-btn wa-sm header-order"
          href={wa(t.wa.general)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={15} strokeWidth={1.8} aria-hidden="true" />
          <span>{t.nav.order}</span>
        </a>

        <a
          href="https://www.instagram.com/protomaker_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="Instagram"
        >
          <Instagram size={20} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
