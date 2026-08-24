import Hero from '../components/hero/Hero';
import CategoryMatrix from '../components/categories/CategoryMatrix';
import ProcessSection from '../components/process/ProcessSection';
import WhySection from '../components/features/WhySection';
import FaqSection from '../components/faq/FaqSection';
import CtaBand from '../components/cta/CtaBand';

/**
 * Homepage — orchestrates the storefront sections in render order.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryMatrix />
      <ProcessSection />
      <WhySection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
