import { MessageCircle } from 'lucide-react';
import { useI18n } from '../../i18n/LanguageContext';

/**
 * Final conversion band — neon teal strip with WhatsApp CTA.
 */
export default function CtaBand() {
  const { t, wa } = useI18n();

  return (
    <section className="cta-band" data-component="cta-band">
      <div className="container">
        <h2 className="cta-title">{t.cta.heading}</h2>
        <p className="cta-text">{t.cta.text}</p>
        <a
          className="wa-btn wa-ink wa-lg"
          href={wa(t.wa.general)}
          target="_blank"
          rel="noopener noreferrer"
          data-component="wa-button"
        >
          <MessageCircle size={20} strokeWidth={1.8} aria-hidden="true" />
          <span>{t.cta.button}</span>
        </a>
        <p className="cta-phone">{t.cta.phone}</p>
      </div>
    </section>
  );
}
