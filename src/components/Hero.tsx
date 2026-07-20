import { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import type { ShopConfig } from '../types';
import { getTheme } from '../config/theme.config';

/* ============================================
   Hero - Full-screen brand introduction
   Dynamic particles, floating elements,
   animated text reveal, interactive CTA
   ============================================ */

interface Props {
  config: ShopConfig;
  onPlay?: () => void;
}

function FloatingElement({
  children,
  duration = 4,
  delay = 0,
  x = 0,
  y = 0,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  x?: number;
  y?: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${50 + x}%`, top: `${40 + y}%` }}
      animate={{
        y: [0, -15, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero({ config, onPlay }: Props) {
  const theme = useMemo(() => getTheme(config.industry), [config.industry]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [textComplete, setTextComplete] = useState(false);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  // Text reveal timing
  useEffect(() => {
    const timer = setTimeout(() => setTextComplete(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const taglineChars = config.tagline.split('');

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
    >
      {/* === Background Layer === */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, ${theme.colors.glow} 0%, transparent 60%),
              radial-gradient(ellipse at 70% 80%, ${theme.colors.glow} 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, ${theme.effects.ambientColor} 0%, transparent 70%),
              linear-gradient(180deg, ${theme.colors.background[0]} 0%, ${theme.colors.background[1]} 50%, ${theme.colors.background[2]} 100%)
            `,
          }}
        />

        {/* Hero image with overlay */}
        <div className="absolute inset-0">
          <img
            src={config.heroImage}
            alt=""
            className="w-full h-full object-cover opacity-40"
            style={{
              transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px) scale(1.05)`,
              transition: 'transform 0.1s ease-out',
            }}
          />
          <div className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg,
                ${theme.colors.background[0]} 0%,
                transparent 30%,
                transparent 70%,
                ${theme.colors.background[0]} 100%
              )`,
            }}
          />
        </div>

        {/* Floating atmospheric elements */}
        <FloatingElement x={-30} y={-15} duration={5} delay={0}>
          <div
            className="w-32 h-32 rounded-full blur-3xl"
            style={{ background: theme.effects.glowColor }}
          />
        </FloatingElement>
        <FloatingElement x={30} y={-10} duration={6} delay={1}>
          <div
            className="w-24 h-24 rounded-full blur-3xl"
            style={{ background: theme.effects.glowColor }}
          />
        </FloatingElement>
        <FloatingElement x={-20} y={20} duration={7} delay={2}>
          <div
            className="w-40 h-40 rounded-full blur-3xl"
            style={{ background: theme.effects.glowColor, opacity: 0.5 }}
          />
        </FloatingElement>

        {/* Sparkle dots */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: theme.effects.particleColor[i % theme.effects.particleColor.length],
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              boxShadow: `0 0 6px ${theme.effects.particleColor[i % theme.effects.particleColor.length]}`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.7,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* === Content Layer === */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        {/* Industry badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-6"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase glass"
            style={{ borderColor: theme.colors.border, color: theme.colors.secondary }}
          >
            {theme.emoji} {theme.atmosphere.mood}
          </span>
        </motion.div>

        {/* Brand name - staggered character reveal */}
        <h1 className="relative mb-6">
          <span className="sr-only">{config.name}</span>
          <span
            className="inline-block text-6xl md:text-8xl lg:text-9xl font-black leading-none"
            style={{ fontFamily: theme.typography.displayFont }}
          >
            {config.name.split('').map((char, i) => (
              <motion.span
                key={i}
                className="inline-block text-gradient"
                style={{
                  backgroundImage: theme.colors.gradient,
                }}
                initial={{ opacity: 0, y: 80, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2 + i * 0.05,
                  ease: [0.19, 1, 0.22, 1],
                }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Tagline - sequential reveal */}
        <div className="overflow-hidden mb-8">
          <motion.p
            className="text-lg md:text-2xl tracking-wider"
            style={{
              color: theme.colors.textMuted,
              fontFamily: theme.typography.displayFont,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: [0.19, 1, 0.22, 1] }}
          >
            {taglineChars.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 2.2 + i * 0.03,
                  ease: 'easeOut',
                }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.2 }}
        >
          <button
            onClick={onPlay}
            className={`
              group relative px-8 py-4 rounded-xl overflow-hidden
              text-white font-semibold text-lg
              transition-all duration-500
              hover:scale-105 active:scale-95
            `}
            style={{ background: theme.colors.gradient }}
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              <Play className="w-5 h-5 fill-white" />
              探索品牌故事
            </span>
          </button>

          <a
            href="#products"
            className="
              group relative px-8 py-4 rounded-xl
              text-white/80 font-semibold text-lg
              glass hover:bg-white/10
              transition-all duration-300
              hover:scale-105 active:scale-95
            "
          >
            <span className="flex items-center gap-2">
              浏览菜品
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: textComplete ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <a
              href="#story"
              className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
            >
              <span className="text-xs tracking-widest">向下探索</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* === Edge fade === */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${theme.colors.background[0]}, transparent)`,
        }}
      />
    </section>
  );
}
