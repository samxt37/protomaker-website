import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/LanguageContext';
import SectionHeading from '../common/SectionHeading';
import ProductCard from '../products/ProductCard';
import { PRODUCTS, CATEGORIES, CATEGORY_LABELS } from '../../data/products';

const CAT_IMAGES = {
  'phone-accessories': '/assets/images/categories/cat-phone-accessories.jpg',
  keyrings: '/assets/images/categories/cat-keyrings.jpg',
  'other-3d-products': '/assets/images/categories/cat-other-3d.jpg',
};

/**
 * Core 3-column category matrix (1 col on mobile):
 * each column = category header image + its 2 product cards.
 */
export default function CategoryMatrix() {
  const { t, lang } = useI18n();

  return (
    <section className="category-matrix" data-component="category-grid">
      <div className="container">
        <SectionHeading eyebrow="Catalog" title={t.categories.heading} sub={t.categories.sub} />
        <div className="category-columns">
          {CATEGORIES.map((cat, i) => {
            const items = PRODUCTS.filter((p) => p.category === cat);
            const label = CATEGORY_LABELS[cat][lang];
            const item = t.categories.items[i];
            return (
              <div className="category-column" key={cat} data-component="category-column">
                <Link to={`/products?cat=${cat}`} className="cat-col-header">
                  <div className="cat-col-media">
                    <img src={CAT_IMAGES[cat]} alt={label} loading="lazy" />
                  </div>
                  <div className="cat-col-copy">
                    <h3 className="cat-col-title">{label}</h3>
                    <p className="cat-col-desc">{item.desc}</p>
                  </div>
                </Link>
                <div className="cat-col-products">
                  {items.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
                <Link to={`/products?cat=${cat}`} className="cat-col-view-all">
                  {t.categories.viewAll}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
