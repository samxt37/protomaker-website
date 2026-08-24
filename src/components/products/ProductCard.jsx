import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../common/Reveal';
import WhatsAppButton from './WhatsAppButton';
import { useI18n } from '../../i18n/LanguageContext';
import { CATEGORY_LABELS } from '../../data/products';

/**
 * Product card — image slideshow (arrows, dots, swipe), name, customization,
 * price, WhatsApp CTA.
 */
export default function ProductCard({ product }) {
  const { t, lang } = useI18n();
  const [custom, setCustom] = useState('');
  const [slide, setSlide] = useState(0);
  const touchStartX = useRef(null);

  const images =
    product.images?.length > 0
      ? product.images
      : product.image
        ? [product.image]
        : [];
  const hasSlider = images.length > 1;
  const current = images[slide] || images[0];

  const name = product.name[lang] || product.name.en;
  const desc = product.desc[lang] || product.desc.en;
  const badgeLabel =
    product.badge === 'new'
      ? t.products.badgeNew
      : product.badge === 'best'
        ? t.products.badgeBest
        : null;
  const categoryLabel = CATEGORY_LABELS[product.category][lang];
  const message = t.wa.order(name, product.price, custom.trim());

  const goPrev = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    setSlide((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const goNext = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    setSlide((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null || !hasSlider) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <Reveal as="article" className="product-card" data-component="product-card">
      <div
        className={`product-media${hasSlider ? ' product-media-slider' : ''}`}
        onTouchStart={hasSlider ? onTouchStart : undefined}
        onTouchEnd={hasSlider ? onTouchEnd : undefined}
      >
        {current ? <img src={current} alt={name} loading="lazy" /> : null}
        <span className="product-tag">{categoryLabel}</span>
        {badgeLabel ? <span className="product-badge">{badgeLabel}</span> : null}

        {hasSlider ? (
          <>
            <button
              type="button"
              className="product-slide-btn product-slide-prev"
              onClick={goPrev}
              aria-label="Previous photo"
            >
              <ChevronLeft size={18} strokeWidth={1.8} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="product-slide-btn product-slide-next"
              onClick={goNext}
              aria-label="Next photo"
            >
              <ChevronRight size={18} strokeWidth={1.8} aria-hidden="true" />
            </button>
            <div className="product-slide-dots" role="tablist" aria-label="Product photos">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === slide}
                  className={`product-slide-dot${i === slide ? ' is-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSlide(i);
                  }}
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className="product-body">
        <h3 className="product-name">{name}</h3>
        <p className="product-desc">{desc}</p>

        {product.customizable ? (
          <label className="custom-field">
            <span className="custom-label">{t.products.customLabel}</span>
            <input
              type="text"
              value={custom}
              maxLength={10}
              placeholder={t.products.customPlaceholder}
              onChange={(e) => setCustom(e.target.value)}
              className="custom-input"
            />
          </label>
        ) : null}

        <p className="product-price">{product.price}</p>
        <WhatsAppButton message={message} label={t.products.orderCta} />
      </div>
    </Reveal>
  );
}
