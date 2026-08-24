import { Link } from 'react-router-dom';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { useI18n } from '../../i18n/LanguageContext';

/**
 * First-viewport hook: dark hero with 3D printer background + WhatsApp CTA.
 */
export default function Hero() {
  const { t, wa } = useI18n();

  return (
    <section className="hero" data-component="hero">
      <div className="hero-bg" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}assets/images/hero/hero-3d-printer.jpg`} alt="" />
      </div>
      <div className="hero-inner">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1 className="hero-title">
          <span className="hero-title-line">{t.hero.titleA}</span>
          <span className="hero-title-line hero-title-accent">{t.hero.titleB}</span>
        </h1>
        <p className="hero-sub">{t.hero.subtitle}</p>
        <div className="hero-actions">
          <a
            className="wa-btn wa-lg"
            href={wa(t.wa.general)}
            target="_blank"
            rel="noopener noreferrer"
            data-component="wa-button"
          >
            <MessageCircle size={20} strokeWidth={1.8} aria-hidden="true" />
            <span>{t.hero.ctaPrimary}</span>
          </a>
          <Link className="wa-btn wa-ghost wa-lg" to="/products">
            <span>{t.hero.ctaSecondary}</span>
            <ArrowDown size={18} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>
        <p className="hero-note">{t.hero.note}</p>
      </div>
    </section>
  );
}
