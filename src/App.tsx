
import { useScrollProgress } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import About from './components/About';
import PersonalDetails from './components/PersonalDetails';
import CareerSection from './components/CareerSection';
import FamilySection from './components/FamilySection';
import Horoscope from './components/Horoscope';
import Lifestyle from './components/Lifestyle';
import Goals from './components/Goals';
import PartnerExpectations from './components/PartnerExpectations';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function OrnamentDivider() {
  return (
    <div className="ornament-divider" aria-hidden="true">
      <span className="ornament-divider__line" />
      <span className="ornament-divider__icon">✦</span>
      <span className="ornament-divider__line" />
    </div>
  );
}

function App() {
  const scrollProgress = useScrollProgress();

  return (
    <>


      {/* Scroll Progress Bar */}
      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <QuickStats />
        <OrnamentDivider />
        <About />
        <OrnamentDivider />
        <PersonalDetails />
        <OrnamentDivider />
        <CareerSection />
        <OrnamentDivider />
        <FamilySection />
        <Horoscope />
        <OrnamentDivider />
        <Lifestyle />
        <OrnamentDivider />
        <Goals />
        <OrnamentDivider />
        <PartnerExpectations />
        <OrnamentDivider />
        <Gallery />
        <OrnamentDivider />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
