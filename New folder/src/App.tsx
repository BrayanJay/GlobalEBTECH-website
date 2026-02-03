import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Services />
          <Features />
          <Stats />
          <Testimonials />
          <Contact />
        </>
      ) : (
        <ContactPage />
      )}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}