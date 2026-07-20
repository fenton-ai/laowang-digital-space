import type { Industry, IndustryTheme } from '../types';

/* ============================================
   INDUSTRY THEME SYSTEM
   Each industry has a unique visual identity
   ============================================ */

export const INDUSTRY_THEMES: Record<Industry, IndustryTheme> = {
  hotpot: {
    name: 'hotpot',
    label: '火锅',
    emoji: '🔥',
    colors: {
      primary: '#E8491D',
      secondary: '#F5A623',
      accent: '#FF6B35',
      background: ['#0A0000', '#1A0505', '#0D0800'],
      gradient: 'linear-gradient(135deg, #E8491D 0%, #F5A623 50%, #E8491D 100%)',
      text: '#FFF5E6',
      textMuted: 'rgba(255,245,230,0.6)',
      glow: 'rgba(232,73,29,0.3)',
      cardBg: 'rgba(232,73,29,0.08)',
      border: 'rgba(232,73,29,0.2)',
    },
    effects: {
      particleColor: ['#E8491D', '#F5A623', '#FF6B35', '#FF8C42'],
      particleCount: 60,
      particleSize: [2, 6],
      glowColor: 'rgba(232,73,29,0.4)',
      ambientColor: 'rgba(232,73,29,0.06)',
    },
    typography: {
      displayFont: "'Noto Serif SC', serif",
      bodyFont: "'Inter', sans-serif",
    },
    atmosphere: {
      tagline: '烟火人间 • 沸腾相聚',
      keywords: ['烟火气', '温暖', '沸腾', '相聚', '热闹', '麻辣'],
      mood: '温暖 · 热烈 · 烟火',
    },
    audio: { category: 'food', defaultTrack: 'hotpot' },
  },

  bbq: {
    name: 'bbq',
    label: '烧烤',
    emoji: '🍖',
    colors: {
      primary: '#FF4D00',
      secondary: '#FFB347',
      accent: '#FF6B35',
      background: ['#0D0400', '#1A0A00', '#0D0800'],
      gradient: 'linear-gradient(135deg, #FF4D00 0%, #FFB347 50%, #FF4D00 100%)',
      text: '#FFF5E6',
      textMuted: 'rgba(255,245,230,0.6)',
      glow: 'rgba(255,77,0,0.3)',
      cardBg: 'rgba(255,77,0,0.08)',
      border: 'rgba(255,77,0,0.2)',
    },
    effects: {
      particleColor: ['#FF4D00', '#FFB347', '#FF6B35', '#FFD700'],
      particleCount: 70,
      particleSize: [2, 5],
      glowColor: 'rgba(255,77,0,0.4)',
      ambientColor: 'rgba(255,77,0,0.06)',
    },
    typography: {
      displayFont: "'Noto Serif SC', serif",
      bodyFont: "'Inter', sans-serif",
    },
    atmosphere: {
      tagline: '夜色江湖 • 把酒言欢',
      keywords: ['夜晚', '街头', '年轻', '音乐', '烟火', '江湖'],
      mood: '夜色 · 热烈 · 自由',
    },
    audio: { category: 'food', defaultTrack: 'bbq' },
  },

  restaurant: {
    name: 'restaurant',
    label: '小吃·家常',
    emoji: '🍳',
    colors: {
      primary: '#E8913A',
      secondary: '#F5C542',
      accent: '#FF8C42',
      background: ['#0A0806', '#120E0A', '#080604'],
      gradient: 'linear-gradient(135deg, #E8913A 0%, #F5C542 40%, #E8913A 100%)',
      text: '#F5F0E8',
      textMuted: 'rgba(245,240,232,0.6)',
      glow: 'rgba(232,145,58,0.3)',
      cardBg: 'rgba(232,145,58,0.08)',
      border: 'rgba(232,145,58,0.2)',
    },
    effects: {
      particleColor: ['#E8913A', '#F5C542', '#FF8C42', '#FFD700'],
      particleCount: 45,
      particleSize: [2, 5],
      glowColor: 'rgba(232,145,58,0.35)',
      ambientColor: 'rgba(232,145,58,0.06)',
    },
    typography: {
      displayFont: "'Noto Serif SC', serif",
      bodyFont: "'Inter', sans-serif",
    },
    atmosphere: {
      tagline: '暖胃暖心的 · 家常味道',
      keywords: ['温暖', '家常', '锅气', '实在', '深夜', '治愈'],
      mood: '温暖 · 烟火 · 家常',
    },
    audio: { category: 'food', defaultTrack: 'restaurant' },
  },

  hotel: {
    name: 'hotel',
    label: '民宿',
    emoji: '🏡',
    colors: {
      primary: '#7CB8A0',
      secondary: '#D4A76A',
      accent: '#A8D5BA',
      background: ['#060A08', '#0A0F0C', '#080A06'],
      gradient: 'linear-gradient(135deg, #7CB8A0 0%, #D4A76A 50%, #7CB8A0 100%)',
      text: '#F0F5F0',
      textMuted: 'rgba(240,245,240,0.6)',
      glow: 'rgba(124,184,160,0.25)',
      cardBg: 'rgba(124,184,160,0.08)',
      border: 'rgba(124,184,160,0.15)',
    },
    effects: {
      particleColor: ['#7CB8A0', '#A8D5BA', '#D4A76A', '#8FC4B0'],
      particleCount: 35,
      particleSize: [2, 5],
      glowColor: 'rgba(124,184,160,0.3)',
      ambientColor: 'rgba(124,184,160,0.05)',
    },
    typography: {
      displayFont: "'Noto Serif SC', serif",
      bodyFont: "'Inter', sans-serif",
    },
    atmosphere: {
      tagline: '山野之间 • 心安归处',
      keywords: ['自然', '安静', '治愈', '山野', '放松', '禅意'],
      mood: '自然 · 静谧 · 治愈',
    },
    audio: { category: 'hotel', defaultTrack: 'nature' },
  },

  beauty: {
    name: 'beauty',
    label: '美业',
    emoji: '💎',
    colors: {
      primary: '#E8B4B8',
      secondary: '#C9A8C9',
      accent: '#F0C5D0',
      background: ['#080608', '#0F0A0E', '#0A060A'],
      gradient: 'linear-gradient(135deg, #E8B4B8 0%, #C9A8C9 50%, #E8B4B8 100%)',
      text: '#F5F0F2',
      textMuted: 'rgba(245,240,242,0.6)',
      glow: 'rgba(232,180,184,0.25)',
      cardBg: 'rgba(232,180,184,0.06)',
      border: 'rgba(232,180,184,0.12)',
    },
    effects: {
      particleColor: ['#E8B4B8', '#C9A8C9', '#F0C5D0', '#FFD5E0'],
      particleCount: 45,
      particleSize: [1, 4],
      glowColor: 'rgba(232,180,184,0.25)',
      ambientColor: 'rgba(232,180,184,0.04)',
    },
    typography: {
      displayFont: "'Noto Serif SC', serif",
      bodyFont: "'Inter', sans-serif",
    },
    atmosphere: {
      tagline: '至美之境 • 绽放心灵',
      keywords: ['高级', '轻奢', '放松', '优雅', '精致', '蜕变'],
      mood: '高级 · 轻奢 · 优雅',
    },
    audio: { category: 'beauty', defaultTrack: 'spa' },
  },

  coffee: {
    name: 'coffee',
    label: '咖啡',
    emoji: '☕',
    colors: {
      primary: '#8B6F4E',
      secondary: '#D4A96A',
      accent: '#A0845C',
      background: ['#080604', '#0F0C08', '#060504'],
      gradient: 'linear-gradient(135deg, #8B6F4E 0%, #D4A96A 50%, #8B6F4E 100%)',
      text: '#F5F0E8',
      textMuted: 'rgba(245,240,232,0.6)',
      glow: 'rgba(139,111,78,0.25)',
      cardBg: 'rgba(139,111,78,0.08)',
      border: 'rgba(139,111,78,0.15)',
    },
    effects: {
      particleColor: ['#8B6F4E', '#D4A96A', '#A0845C', '#C4A87C'],
      particleCount: 30,
      particleSize: [1, 3],
      glowColor: 'rgba(139,111,78,0.3)',
      ambientColor: 'rgba(139,111,78,0.05)',
    },
    typography: {
      displayFont: "'Noto Serif SC', serif",
      bodyFont: "'Inter', sans-serif",
    },
    atmosphere: {
      tagline: '慢煮时光 • 一杯好咖',
      keywords: ['文艺', '安静', '慢生活', '香气', '温暖'],
      mood: '文艺 · 温暖 · 慢活',
    },
    audio: { category: 'coffee', defaultTrack: 'cafe' },
  },
};

/** Get theme for an industry */
export function getTheme(industry: Industry): IndustryTheme {
  return INDUSTRY_THEMES[industry] || INDUSTRY_THEMES.hotpot;
}

/** Get CSS custom properties string for an industry */
export function getThemeCSS(industry: Industry): string {
  const theme = getTheme(industry);
  const { colors: c, effects: e, typography: t } = theme;
  return `
    --color-primary: ${c.primary};
    --color-secondary: ${c.secondary};
    --color-accent: ${c.accent};
    --color-bg-1: ${c.background[0]};
    --color-bg-2: ${c.background[1]};
    --color-bg-3: ${c.background[2]};
    --gradient-main: ${c.gradient};
    --color-text: ${c.text};
    --color-text-muted: ${c.textMuted};
    --color-glow: ${c.glow};
    --color-card-bg: ${c.cardBg};
    --color-border: ${c.border};
    --effect-glow: ${e.glowColor};
    --effect-ambient: ${e.ambientColor};
    --font-display: ${t.displayFont};
    --font-body: ${t.bodyFont};
  `;
}
