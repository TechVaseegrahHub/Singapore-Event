import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header.jsx';
import HeroSection from '../components/HeroSection.jsx';
import SpeakersSection from '../components/SpeakersSection.jsx';
import HighlightsSection from '../components/HighlightsSection.jsx';
import EventDetailsSection from '../components/EventDetailsSection.jsx';
import PartnersSection from '../components/PartnersSection.jsx';
import Footer from '../components/Footer.jsx';
import SectionDivider from '../components/SectionDivider.jsx';

function EventLandingPage() {
  return (
    <>
      <Helmet>
        <title>MAKEIO 2026 - Digital Power for Business Growth | Tamil Event Singapore</title>
        <meta 
          name="description" 
          content="Join MAKEIO 2026 on February 22 in Singapore. Learn from industry experts about digital transformation, personal branding, and business opportunities. Book your seat now for $15!" 
        />
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        
        <HeroSection />
        <SectionDivider variant="wave" className="text-white -mt-1 relative z-20" />
        
        <SpeakersSection />
        <SectionDivider variant="geometric" className="text-slate-50 -mt-1 relative z-20" />
        
        <HighlightsSection />
        <SectionDivider variant="slant" className="text-white -mt-1 relative z-20" />
        
        <EventDetailsSection />
        <SectionDivider variant="wave" className="text-slate-50 -mt-1 relative z-20" />
        
        <Footer />
      </div>
    </>
  );
}

export default EventLandingPage;
