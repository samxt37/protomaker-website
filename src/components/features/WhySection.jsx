import { Layers, Gauge, MessageCircle } from 'lucide-react';
import { useI18n } from '../../i18n/LanguageContext';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';

const ICONS = [Layers, Gauge, MessageCircle];

/**
 * Why-us feature grid — durable PETG, precision, WhatsApp speed.
 */
export default function WhySection() {
  const { t } = useI18n();

  return (
    <section className="why" data-component="why">
      <div className="container">
        <SectionHeading eyebrow="Why us" title={t.why.heading} sub={t.why.sub} />
        <div className="why-grid">
          {t.why.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal as="article" className="why-item" key={item.title} data-component="why-item" delay={i * 90}>
                <span className="why-icon">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-text">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
