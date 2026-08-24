import { useI18n } from '../../i18n/LanguageContext';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';

/**
 * How-it-works section — 4 mono-indexed technical steps, no photos.
 */
export default function ProcessSection() {
  const { t } = useI18n();

  return (
    <section className="process" data-component="process">
      <div className="container">
        <SectionHeading
          eyebrow="Process"
          title={t.process.heading}
          sub={t.process.sub}
        />
        <div className="process-grid">
          {t.process.steps.map((step, i) => (
            <Reveal as="article" className="process-step" key={step.title} data-component="process-step" delay={i * 80}>
              <span className="process-index">0{i + 1}</span>
              <div className="process-body">
                <h3 className="process-title">{step.title}</h3>
                <p className="process-text">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
