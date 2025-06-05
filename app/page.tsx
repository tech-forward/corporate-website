
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Technologies from '../components/Technologies';
import About from '../components/About';
import Philosophy from '../components/Philosophy';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Technologies />
        <About />
        <Philosophy />
        <section className="py-24">
          <ContactForm />
        </section>
      </main>
      <footer className="bg-slate-900 text-slate-400 text-center py-6">
        © 2025 TechForward LLC All rights reserved.
      </footer>
    </>
  );
}
