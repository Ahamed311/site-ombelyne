'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import HeroSection from './components/HeroSection';
import CardsSection from './components/CardsSection';
import MessageSection from './components/MessageSection';
import MusicSection from './components/MusicSection';
import Footer from './components/Footer';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {!showContent ? (
        <HeroSection onEnter={() => setShowContent(true)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <CardsSection />
          <MessageSection />
          <MusicSection />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
