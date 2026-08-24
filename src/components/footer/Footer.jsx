import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { useI18n } from '../../i18n/LanguageContext';
import { WHATSAPP_DISPLAY } from '../../data/translations';
import Logo from '../common/Logo';

/**
 * Site footer — logo, links and WhatsApp contact.
 */
export default function Footer() {
  const { t, wa } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" data-component="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-logo">
            <Logo size={24} />
            <span>PROTOMAKER</span>
          </p>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <p className="footer-heading">{t.footer.linksHeading}</p>
          <Link to="/products" className="footer-link">
            {t.nav.products}
          </Link>
          <a href="#faq" className="footer-link">
            {t.nav.faq}
          </a>
        </nav>

        <div className="footer-col">
          <p className="footer-heading">{t.footer.contactHeading}</p>
          <a
            className="footer-link footer-wa"
            href={wa(t.wa.general)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={14} strokeWidth={1.8} aria-hidden="true" />
            <span>{WHATSAPP_DISPLAY}</span>
          </a>
          <a
            className="footer-link"
            href={wa(t.wa.general)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.footer.waOrder}
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>{t.footer.rights.replace('{year}', year)}</p>
        <p className="footer-made">{t.footer.madeWith}</p>
      </div>
    </footer>
  );
}
