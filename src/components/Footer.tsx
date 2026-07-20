import { useMemo } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import type { ShopConfig } from '../types';
import { getTheme } from '../config/theme.config';

/* ============================================
   Footer - Elegant brand footer
   Apple-inspired minimal design
   ============================================ */

interface Props {
  config: ShopConfig;
}

export default function Footer({ config }: Props) {
  const theme = useMemo(() => getTheme(config.industry), [config.industry]);

  return (
    <footer className="relative py-16 overflow-hidden"
      style={{ background: theme.colors.background[0] }}
    >
      {/* Divider line */}
      <div className="absolute top-0 left-10 right-10 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${theme.colors.border}, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center">
          {/* Brand */}
          <div className="mb-6">
            <span
              className="text-2xl font-bold"
              style={{
                fontFamily: theme.typography.displayFont,
                backgroundImage: theme.colors.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {config.name}
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm mb-8" style={{ color: theme.colors.textMuted }}>
            {config.tagline}
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs mb-8"
            style={{ color: theme.colors.textMuted }}>
            <a href="#story" className="hover:text-white transition-colors">品牌故事</a>
            <a href="#products" className="hover:text-white transition-colors">产品展示</a>
            <a href="#environment" className="hover:text-white transition-colors">环境空间</a>
            <a href="#reviews" className="hover:text-white transition-colors">顾客评价</a>
            <a href="#location" className="hover:text-white transition-colors">到店信息</a>
            <a href="#qrcode" className="hover:text-white transition-colors">二维码</a>
          </div>

          {/* AI badge */}
          <div className="mb-8">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] tracking-wider"
              style={{
                background: theme.colors.cardBg,
                border: `1px solid ${theme.colors.border}`,
                color: theme.colors.textMuted,
              }}
            >
              <Sparkles className="w-3 h-3" style={{ color: theme.colors.primary }} />
              POWERED BY AI DIGITAL EXPERIENCE SPACE
            </span>
          </div>

          {/* Copyright */}
          <p className="text-[10px] opacity-30">
            &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
            <br />
            由 AI 数字体验空间技术生成
            <span className="inline-flex items-center gap-1 ml-1">
              · Made with <Heart className="w-2.5 h-2.5 inline" style={{ color: theme.colors.primary }} />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
