import { useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, Play, Pause } from 'lucide-react';
import type { ShopConfig } from '../types';
import { getTheme } from '../config/theme.config';
import ScrollReveal from './ScrollReveal';

/* ============================================
   BrandStory - Documentary-style brand narrative
   Timeline with parallax, founder quote,
   and scroll-driven progress
   ============================================ */

interface Props {
  config: ShopConfig;
}

export default function BrandStory({ config }: Props) {
  const theme = useMemo(() => getTheme(config.industry), [config.industry]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [playingVoice, setPlayingVoice] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(180deg, ${theme.colors.background[1]} 0%, ${theme.colors.background[2]} 100%)`,
        }}
      />

      {/* Timeline progress bar */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-px z-10">
        <div className="absolute inset-0 bg-white/5" />
        <motion.div
          className="absolute top-0 left-0 w-full"
          style={{
            height: progressWidth,
            background: theme.colors.gradient,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
        {/* Section header */}
        <ScrollReveal variant="fadeUp">
          <div className="mb-16 md:mb-24">
            <span
              className="text-sm tracking-[0.3em] uppercase"
              style={{ color: theme.colors.primary }}
            >
              品牌故事
            </span>
            <h2
              className="text-4xl md:text-6xl font-bold mt-4 leading-tight"
              style={{
                fontFamily: theme.typography.displayFont,
                color: theme.colors.text,
              }}
            >
              一锅沸腾
              <br />
              <span className="text-gradient" style={{ backgroundImage: theme.colors.gradient }}>
                人间烟火
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Founder quote card */}
        <ScrollReveal variant="scaleIn" delay={0.2}>
          <div className="relative mb-24 p-8 md:p-12 rounded-3xl overflow-hidden"
            style={{
              background: theme.colors.cardBg,
              borderColor: theme.colors.border,
              borderWidth: 1,
            }}
          >
            {/* Decorative quote icon */}
            <Quote
              className="absolute top-4 right-6 w-16 h-16 opacity-10"
              style={{ color: theme.colors.primary }}
            />

            <div className="relative z-10 max-w-2xl">
              <p
                className="text-2xl md:text-3xl font-light leading-relaxed mb-6"
                style={{
                  fontFamily: theme.typography.displayFont,
                  color: theme.colors.text,
                }}
              >
                "{config.founderQuote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-lg">
                  👨‍🍳
                </div>
                <div>
                  <p className="font-semibold" style={{ color: theme.colors.text }}>
                    {config.founderName}
                  </p>
                  <p className="text-sm opacity-50">创始人 · {config.name}</p>
                </div>
                {/* Voice play button */}
                <button
                  onClick={() => setPlayingVoice(!playingVoice)}
                  className="ml-auto flex items-center gap-2 px-4 py-2 rounded-xl glass hover:bg-white/10 transition-all text-sm"
                >
                  {playingVoice ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                  <span className="hidden sm:inline">播放语音</span>
                </button>
              </div>
            </div>

            {/* Ambient glow */}
            <div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20"
              style={{ background: theme.effects.glowColor }}
            />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="space-y-16 md:space-y-24">
          {config.timeline.map((entry, index) => {
            const isEven = index % 2 === 0;
            return (
              <ScrollReveal
                key={entry.year}
                variant={isEven ? 'slideInLeft' : 'slideInRight'}
                delay={0.1 * index}
              >
                <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 items-start">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 w-4 h-4 rounded-full border-2 z-10"
                    style={{
                      borderColor: theme.colors.primary,
                      background: theme.colors.background[1],
                    }}
                  />

                  {/* Year badge */}
                  <div className="md:text-right md:pr-12 mb-4 md:mb-0"
                    style={isEven ? {} : { gridColumn: 2, textAlign: 'left' }}
                  >
                    <span
                      className="inline-block text-5xl md:text-7xl font-black tracking-tighter text-gradient"
                      style={{ backgroundImage: theme.colors.gradient }}
                    >
                      {entry.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={isEven ? '' : 'md:col-start-1 md:row-start-1 md:text-right'}>
                    <h3
                      className="text-xl md:text-2xl font-bold mb-3"
                      style={{
                        fontFamily: theme.typography.displayFont,
                        color: theme.colors.text,
                      }}
                    >
                      {entry.title}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ color: theme.colors.textMuted }}
                    >
                      {entry.description}
                    </p>

                    {/* Optional image */}
                    {entry.image && (
                      <div className="mt-4 rounded-2xl overflow-hidden img-zoom">
                        <img
                          src={entry.image}
                          alt={entry.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${theme.colors.background[0]}, transparent)`,
        }}
      />
    </section>
  );
}
