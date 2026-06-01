import Hero from '../components/Hero';
import StatsCards from '../components/StatsCards';
import About from '../components/About';
import CatalogPreview from '../components/CatalogPreview';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCards />
      <About />
      <CatalogPreview />
      <Testimonials />
      <Contact />
    </>
  );
}
