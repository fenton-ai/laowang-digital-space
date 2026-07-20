import { useEffect, useMemo, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import type { Industry } from './types';
import shopConfig from './config/shop.config';
import { getTheme, getThemeCSS } from './config/theme.config';
import { useAudio } from './hooks/useAudio';

import ParticleField from './components/ParticleField';
import AudioPlayer from './components/AudioPlayer';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import Products from './components/Products';
import Environment from './components/Environment';
import Reviews from './components/Reviews';
import Location from './components/Location';
import QRCodeSection from './components/QRCode';
import Footer from './components/Footer';

/* ============================================
   APP - AI Store Digital Experience Space
   Assembles all sections with theme system
   ============================================ */

function SplashScreen({
  industry,
  onComplete,
}: {
  industry: Industry;
  onComplete: () => void;
}) {
  const theme = useMemo(() => getTheme(industry), [industry]);

  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: theme.colors.background[0] }}
    >
      {/* Animated logo mark */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        className="mb-6"
      >
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl"
          style={{
            background: theme.colors.gradient,
            boxShadow: `0 0 40px ${theme.effects.glowColor}`,
          }}
        >
          {theme.emoji}
        </div>
      </motion.div>

      {/* Brand name */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-2xl font-bold mb-2"
        style={{
          fontFamily: theme.typography.displayFont,
          color: theme.colors.text,
        }}
      >
        {shopConfig.name}
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-sm"
        style={{ color: theme.colors.textMuted }}
      >
        {theme.atmosphere.tagline}
      </motion.p>

      {/* Loading bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }}
        className="h-0.5 rounded-full mt-8"
        style={{ background: theme.colors.gradient }}
      />

      {/* AI badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 flex items-center gap-2 text-[10px] tracking-widest"
        style={{ color: theme.colors.textMuted }}
      >
        <Sparkles className="w-3 h-3" style={{ color: theme.colors.primary }} />
        AI DIGITAL EXPERIENCE SPACE
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const { play } = useAudio(shopConfig.industry);

  // Apply theme CSS variables
  useEffect(() => {
    const cssVars = getThemeCSS(shopConfig.industry);
    const style = document.createElement('style');
    style.textContent = `:root { ${cssVars} }`;
    style.id = 'theme-vars';
    document.head.appendChild(style);

    // Set data-industry on html
    document.documentElement.setAttribute('data-industry', shopConfig.industry);

    // Update page title
    document.title = `${shopConfig.name} - AI 数字体验空间`;

    return () => {
      const existing = document.getElementById('theme-vars');
      if (existing) existing.remove();
    };
  }, []);

  // Handle first user interaction to enable audio
  const handleUserInteraction = useCallback(() => {
    if (!userInteracted) {
      setUserInteracted(true);
      play();
    }
  }, [userInteracted, play]);

  // Global click listener for first interaction
  useEffect(() => {
    const handler = () => handleUserInteraction();
    document.addEventListener('click', handler, { once: true });
    document.addEventListener('touchstart', handler, { once: true });
    return () => {
      document.removeEventListener('click', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [handleUserInteraction]);

  const handleHeroPlay = useCallback(() => {
    handleUserInteraction();
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  }, [handleUserInteraction]);

  return (
    <>
      {/* Splash screen */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen
            industry={shopConfig.industry}
            onComplete={() => setShowSplash(false)}
          />
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="relative min-h-screen" onClick={handleUserInteraction}>
        {/* Particle background */}
        <ParticleField
          industry={shopConfig.industry}
          density="medium"
        />

        {/* Sections */}
        <Hero config={shopConfig} onPlay={handleHeroPlay} />
        <BrandStory config={shopConfig} />
        <Products config={shopConfig} />
        <Environment config={shopConfig} />
        <Reviews config={shopConfig} />
        <Location config={shopConfig} />
        <QRCodeSection config={shopConfig} />
        <Footer config={shopConfig} />

        {/* Floating audio player */}
        <AudioPlayer industry={shopConfig.industry} />
      </div>
    </>
  );
}
