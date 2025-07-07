import {Header} from '~/components/Header';
import {Hero} from '~/components/Hero';
import {WhyChooseSection} from '~/components/WhyChooseSection';
import {FeaturedProducts} from '~/components/FeaturedProducts';
import {Testimonials} from '~/components/Testimonials';
import {Footer} from '~/components/Footer';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhyChooseSection />
        <FeaturedProducts />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
} 