import { useMemo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import type { ShopConfig } from '../types';
import { getTheme } from '../config/theme.config';
import ScrollReveal from './ScrollReveal';

/* ============================================
   Environment - Immersive gallery/lightbox
   Masonry-like grid with full-screen viewer
   ============================================ */

interface Props {
  config: ShopConfig;
}

function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: ShopConfig['environment'];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.95)' }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-white/10 transition-all z-10"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Content */}
      <div
        className="relative max-w-5xl mx-auto px-12 w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          key={img.id}
          src={img.src}
          alt={img.alt}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-h-[80vh] object-contain rounded-2xl"
        />

        {img.caption && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-4 text-white/60 text-sm"
          >
            {img.caption}
          </motion.p>
        )}

        {/* Counter */}
        <div className="text-center mt-4 text-white/40 text-xs">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:bg-white/10 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:bg-white/10 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}
    </motion.div>
  );
}

export default function Environment({ config }: Props) {
  const theme = useMemo(() => getTheme(config.industry), [config.industry]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => {
    setLightboxIndex((i) => i !== null ? (i - 1 + config.environment.length) % config.environment.length : null);
  }, [config.environment.length]);
  const next = useCallback(() => {
    setLightboxIndex((i) => i !== null ? (i + 1) % config.environment.length : null);
  }, [config.environment.length]);

  return (
    <section id="environment" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0"
        style={{ background: theme.colors.background[1] }}
      />
      <div className="noise-overlay absolute inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <ScrollReveal variant="fadeUp">
          <div className="mb-16 text-center">
            <span className="text-sm tracking-[0.3em] uppercase"
              style={{ color: theme.colors.primary }}>
              环境空间
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4"
              style={{ fontFamily: theme.typography.displayFont, color: theme.colors.text }}>
              沉浸式
              <span className="text-gradient" style={{ backgroundImage: theme.colors.gradient }}>
                {' '}空间体验
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {config.environment.map((img, i) => (
            <motion.div
              key={img.id}
              layoutId={`env-${img.id}`}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                i === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className={`${i === 0 ? 'aspect-[4/3] md:aspect-auto md:h-full' : 'aspect-square'}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-6 h-6 text-white/80" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4"
                style={{
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                }}>
                <p className="text-white/80 text-xs md:text-sm font-medium line-clamp-1">
                  {img.caption || img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={config.environment}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to top, ${theme.colors.background[0]}, transparent)`,
        }}
      />
    </section>
  );
}
