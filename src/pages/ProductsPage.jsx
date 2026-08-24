import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES, CATEGORY_LABELS } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import SectionHeading from '../components/common/SectionHeading';
import { useI18n } from '../i18n/LanguageContext';

/**
 * Standalone catalog page: category tabs, sort control, product grid.
 */
export default function ProductsPage() {
  const { t, lang } = useI18n();
  const [searchParams, setSearchParams] = useSearchParams();
  const cat = searchParams.get('cat') || 'all';
  const [sort, setSort] = useState('featured');

  const products = useMemo(() => {
    const list = cat === 'all' ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === cat);
    if (sort === 'az') {
      return list.sort((a, b) => a.name[lang].localeCompare(b.name[lang]));
    }
    if (sort === 'za') {
      return list.sort((a, b) => b.name[lang].localeCompare(a.name[lang]));
    }
    return list;
  }, [cat, sort, lang]);

  const selectCat = (key) => {
    if (key === 'all') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', key);
    }
    setSearchParams(searchParams);
  };

  return (
    <main className="products-page" data-component="products-catalog">
      <div className="container">
        <SectionHeading
          eyebrow="Catalog"
          title={t.products.heading}
          sub={t.products.sub}
        />

        <div className="catalog-bar">
          <div className="catalog-tabs" role="tablist" aria-label="Categories">
            <button
              type="button"
              className={`tab-btn${cat === 'all' ? ' is-active' : ''}`}
              onClick={() => selectCat('all')}
            >
              {t.products.filterAll}
            </button>
            {CATEGORIES.map((key) => (
              <button
                type="button"
                key={key}
                className={`tab-btn${cat === key ? ' is-active' : ''}`}
                onClick={() => selectCat(key)}
              >
                {CATEGORY_LABELS[key][lang]}
              </button>
            ))}
          </div>

          <label className="catalog-sort">
            <span className="sr-only">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="sort-select"
            >
              <option value="featured">{t.products.sortFeatured}</option>
              <option value="az">{t.products.sortAz}</option>
              <option value="za">{t.products.sortZa}</option>
            </select>
          </label>
        </div>

        <p className="catalog-count">{t.products.showing.replace('{count}', products.length)}</p>

        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="catalog-empty">{t.products.empty}</p>
        )}
      </div>
    </main>
  );
}
