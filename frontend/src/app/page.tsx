import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}