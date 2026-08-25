import { useI18n } from '../i18n/LanguageContext';
import SectionHeading from '../components/common/SectionHeading';

export default function NewsPage() {
  const { t } = useI18n();

  // Hardcoded news items for demonstration
  const newsItems = [
    {
      id: 1,
      date: '2026-08-20',
      title: 'New Product Line: Magnetic Holders',
      text: 'We have launched a new series of magnetic holders for cables and tools, now available in our store.',
    },
    {
      id: 2,
      date: '2026-08-10',
      title: 'Summer Discount on Keyrings',
      text: 'Enjoy a 15% discount on all personalized keyrings for the month of August.',
    },
    {
      id: 3,
      date: '2026-07-15',
      title: 'Website Launch: Multilingual Support',
      text: 'Our website is now available in English, French, and Arabic to serve our global customers better.',
    },
  ];

  return (
    <section className="news-page" data-component="news-page">
      <div className="container">
        <SectionHeading 
          eyebrow="Updates" 
          title={t.news.heading} 
          sub={t.news.sub} 
        />
        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-item">
              <time className="news-date" dateTime={item.date}>
                {new Date(item.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
              </time>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
