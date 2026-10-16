import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductIntro } from './components/ProductIntro';
import { FeatureShowcase } from './components/FeatureShowcase';
import { WhyAlphaLab } from './components/WhyAlphaLab';
import { ScreenshotGallery } from './components/ScreenshotGallery';
import { FaqSection } from './components/FaqSection';
import { ContactDemoSection } from './components/ContactDemoSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { AutoScrollIndicator } from './components/AutoScrollIndicator';

function MainWebsite() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Responsive Navigation Bar */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* 2. Product Introduction */}
        <ProductIntro />

        {/* 3. 10 Core Features Showcase */}
        <FeatureShowcase />

        {/* 4. Why Alpha Lab */}
        <WhyAlphaLab />

        {/* 6. Application Screenshot Gallery */}
        <ScreenshotGallery onOpenDemo={handleOpenDemo} />

        {/* 7. FAQ Section */}
        <FaqSection />

        {/* 8. Contact & Demo Request */}
        <ContactDemoSection onOpenDemo={handleOpenDemo} />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Auto-Hiding Scroll Indicator */}
      <AutoScrollIndicator />

      {/* Quick Demo Booking Dialog */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainWebsite />
    </LanguageProvider>
  );
}
