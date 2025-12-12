import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PainPointsSection from './components/PainPointsSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import WebinarSection from './components/WebinarSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhyChooseSection from './components/WhyChooseSection';
import FAQSection from './components/FAQSection';
import LocalTrustSection from './components/LocalTrustSection';
import ContactSection from './components/ContactSection';
import FinalCTASection from './components/FinalCTASection';
import FooterSection from './components/FooterSection';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">

      {/* Navigation */}
      <Navbar />

      {/* Dynamic Background - Hidden on mobile to prevent cloudy effect */}
      <div className="hidden md:block fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-purple-50/30 rounded-full blur-[80px]"></div>
      </div>

      <HeroSection isLoaded={isLoaded} />
      <AboutSection />
      <PainPointsSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <WebinarSection />
      <TestimonialsSection />
      {/* <WhyChooseSection /> */}
      <FAQSection />
      <LocalTrustSection />
      {/* <ContactSection /> */}
      <FinalCTASection />
      <FooterSection />
    </div>
  );
}

export default App;