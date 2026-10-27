/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { ScrollProgressBar } from './components/ScrollProgressBar.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Pillars } from './components/Pillars.tsx';
import { GiftSection } from './components/GiftSection.tsx';
import { ShowcaseSection } from './components/ShowcaseSection.tsx';
import { SocialProof } from './components/SocialProof.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { FinalCta } from './components/FinalCta.tsx';
import { Footer } from './components/Footer.tsx';
import { SubscribeModal } from './components/SubscribeModal.tsx';
import { CTA_TARGET_URL } from './components/CtaButton.tsx';

function MainApp() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#EAE3D3] dark:bg-[#15101B] text-[#592828] dark:text-[#EAE3D3] flex flex-col font-sans selection:bg-[#B0A7E7]/40 selection:text-[#544799] dark:selection:text-[#B0A7E7] transition-colors duration-200">
      {/* Scroll Progress Bar at the top of the screen */}
      <ScrollProgressBar />

      {/* Top Bar Navigation with Theme Toggle */}
      <Navbar onOpenSubscribe={() => setIsSubscribeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <Hero onOpenSubscribe={() => setIsSubscribeOpen(true)} />

        {/* Section 2: Core Pillars (5 Bento Cards) */}
        <Pillars />

        {/* Section 3: The Gift (2548 Golden Library) */}
        <GiftSection onOpenSubscribe={() => setIsSubscribeOpen(true)} />

        {/* Section 4: Showcase & Portfolio (Lighthouse Athens v2) */}
        <ShowcaseSection />

        {/* Section 5: Social Proof (3 Mandatory Sections: Συνεργάτες, Εμπιστοσύνη, Γερμανόφωνη Αγορά) */}
        <SocialProof />

        {/* Section: 'Συχνές Ερωτήσεις' (FAQ) Accordion */}
        <FaqSection />

        {/* Section 6: Final Invitation & CTA */}
        <FinalCta onOpenSubscribe={() => setIsSubscribeOpen(true)} />
      </main>

      {/* Section 7: Footer (Exact Legal & Copyright) */}
      <Footer />

      {/* Interactive Registration & Guide Modal */}
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
        targetUrl={CTA_TARGET_URL}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
