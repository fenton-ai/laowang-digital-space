import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronDown, Heart } from 'lucide-react';
import type { ShopConfig } from '../types';
import { getTheme } from '../config/theme.config';
import ScrollReveal from './ScrollReveal';

/* ============================================
   Reviews - Real story wall
   Story-driven testimonials with expand
   ============================================ */

interface Props {
  config: ShopConfig;
}

export default function Reviews({ config }: Props) {
  const theme = useMemo(() => getTheme(config.industry), [config.industry]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="reviews" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0"
        style={{ background: theme.colors.background[2] }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <ScrollReveal variant="fadeUp">
          <div className="mb-16">
            <span className="text-sm tracking-[0.3em] uppercase"
              style={{ color: theme.colors.primary }}>
              真实评价
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4"
              style={{ fontFamily: theme.typography.displayFont, color: theme.colors.text }}>
              食客的
              <span className="text-gradient" style={{ backgroundImage: theme.colors.gradient }}>
                {' '}真实故事
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{
                background: theme.colors.cardBg,
                border: `1px solid ${theme.colors.border}`,
              }}
              onClick={() => setExpandedId(expandedId === review.id ? null : review.id)}
            >
              {/* Top section */}
              <div className="p-6">
                {/* Tag */}
                {review.tag && (
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs mb-4"
                    style={{
                      background: theme.colors.primary + '20',
                      color: theme.colors.primary,
                    }}
                  >
                    {review.tag}
                  </span>
                )}

                {/* Quote */}
                <Quote className="w-6 h-6 mb-2 opacity-20"
                  style={{ color: theme.colors.primary }}
                />

                {/* Content */}
                <p className="text-sm leading-relaxed line-clamp-3 mb-4"
                  style={{ color: theme.colors.text }}>
                  "{review.content}"
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-3.5 h-3.5 ${
                        j < review.rating ? 'fill-current' : 'opacity-20'
                      }`}
                      style={{ color: theme.colors.secondary }}
                    />
                  ))}
                </div>
              </div>

              {/* Expandable story */}
              <AnimatePresence>
                {expandedId === review.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <div className="h-px w-full mb-4"
                        style={{ background: theme.colors.border }}
                      />
                      <p className="text-xs leading-relaxed"
                        style={{ color: theme.colors.textMuted }}>
                        {review.story}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Author footer */}
              <div className="px-6 pb-6 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full bg-white/10"
                />
                <div>
                  <p className="text-sm font-medium" style={{ color: theme.colors.text }}>
                    {review.name}
                  </p>
                  <p className="text-xs opacity-40">{review.date}</p>
                </div>
                <Heart className="w-4 h-4 ml-auto opacity-30 group-hover:opacity-60 transition-opacity"
                  style={{ color: theme.colors.primary }}
                />
              </div>

              {/* Expand indicator */}
              <div className="absolute bottom-2 right-6 opacity-40">
                <motion.div
                  animate={{ rotate: expandedId === review.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to top, ${theme.colors.background[1]}, transparent)`,
        }}
      />
    </section>
  );
}
