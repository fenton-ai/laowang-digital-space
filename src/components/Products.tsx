import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import type { ShopConfig } from '../types';
import { getTheme } from '../config/theme.config';
import ScrollReveal from './ScrollReveal';

/* ============================================
   Products - Premium album-style showcase
   Large format images, story-driven layout,
   category filter with animation
   ============================================ */

interface Props {
  config: ShopConfig;
}

export default function Products({ config }: Props) {
  const theme = useMemo(() => getTheme(config.industry), [config.industry]);
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = ['全部', ...new Set(config.products.map((p) => p.category || '其他'))];
    return cats;
  }, [config.products]);

  const filtered = useMemo(() => {
    if (activeCategory === '全部') return config.products;
    return config.products.filter((p) => p.category === activeCategory);
  }, [config.products, activeCategory]);

  const featured = config.products.filter((p) => p.featured);

  return (
    <section id="products" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0"
        style={{ background: theme.colors.background[0] }}
      />
      <div className="noise-overlay absolute inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal variant="fadeUp">
          <div className="mb-16 text-center">
            <span
              className="text-sm tracking-[0.3em] uppercase"
              style={{ color: theme.colors.primary }}
            >
              产品展示
            </span>
            <h2
              className="text-4xl md:text-6xl font-bold mt-4"
              style={{
                fontFamily: theme.typography.displayFont,
                color: theme.colors.text,
              }}
            >
              每一道都是
              <span className="text-gradient" style={{ backgroundImage: theme.colors.gradient }}>
                {' '}匠心之作
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Featured products - large hero cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {featured.slice(0, 2).map((product, i) => (
            <ScrollReveal key={product.id} variant="scaleIn" delay={i * 0.15}>
              <div
                className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
              >
                {/* Image */}
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                />

                {/* Overlay */}
                <div className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 30%, ${theme.colors.background[0]} 100%)`,
                  }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {/* Price tag */}
                  {product.price && (
                    <span
                      className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3 glass"
                      style={{ color: theme.colors.primary }}
                    >
                      {product.price}
                    </span>
                  )}
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{
                      fontFamily: theme.typography.displayFont,
                      color: theme.colors.text,
                    }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base">
                    {product.description}
                  </p>

                  {/* Expanded story */}
                  <AnimatePresence>
                    {expandedId === product.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-white/50 text-sm leading-relaxed border-t border-white/10 pt-4">
                          {product.story}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Hover sparkle */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-5 h-5 text-white/60" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Category filter */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  background: activeCategory === cat ? theme.colors.gradient : 'rgba(255,255,255,0.05)',
                  color: activeCategory === cat ? '#fff' : theme.colors.textMuted,
                }}
              >
                {cat}
                {cat === '全部' && (
                  <span className="ml-1.5 text-xs opacity-50">
                    {config.products.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: theme.colors.cardBg,
                  border: `1px solid ${theme.colors.border}`,
                }}
                onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h4
                      className="font-semibold text-sm md:text-base leading-tight"
                      style={{ color: theme.colors.text }}
                    >
                      {product.name}
                    </h4>
                    {product.price && (
                      <span
                        className="text-xs font-semibold whitespace-nowrap"
                        style={{ color: theme.colors.primary }}
                      >
                        {product.price}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/40 mt-1 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Expand indicator */}
                  <motion.div
                    animate={{ rotate: expandedId === product.id ? 90 : 0 }}
                    className="mt-2"
                  >
                    <ChevronRight className="w-3 h-3 text-white/30" />
                  </motion.div>

                  {/* Expanded story */}
                  <AnimatePresence>
                    {expandedId === product.id && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-xs text-white/40 mt-2 pt-2 border-t border-white/10 leading-relaxed"
                      >
                        {product.story}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to top, ${theme.colors.background[1]}, transparent)`,
        }}
      />
    </section>
  );
}
