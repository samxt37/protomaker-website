import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useI18n } from '../../i18n/LanguageContext';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';

/**
 * FAQ accordion — one open item at a time.
 */
export default function FaqSection() {
  const { t } = useI18n();
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq" data-component="faq">
      <div className="container container-narrow">
        <SectionHeading eyebrow="FAQ" title={t.faq.heading} sub={t.faq.sub} />
        <div className="faq-list">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="div" className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.q} delay={i * 60}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span>{item.q}</span>
                  <Plus size={18} strokeWidth={1.8} aria-hidden="true" className="faq-icon" />
                </button>
                <div id={`faq-panel-${i}`} className="faq-answer" role="region">
                  <p>{item.a}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
