/* ============================================
   AI STORE DIGITAL EXPERIENCE - Type System
   ============================================ */

/** Industry categories */
export type Industry = 'hotpot' | 'bbq' | 'restaurant' | 'hotel' | 'beauty' | 'coffee';

/** Visual theme for an industry */
export interface IndustryTheme {
  name: string;
  label: string;
  emoji: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string[];
    gradient: string;
    text: string;
    textMuted: string;
    glow: string;
    cardBg: string;
    border: string;
  };
  effects: {
    particleColor: string[];
    particleCount: number;
    particleSize: [number, number];
    glowColor: string;
    ambientColor: string;
  };
  typography: {
    displayFont: string;
    bodyFont: string;
  };
  atmosphere: {
    tagline: string;
    keywords: string[];
    mood: string;
  };
  audio: {
    category: string;
    defaultTrack: string;
  };
}

/** Product / menu item */
export interface Product {
  id: string;
  name: string;
  description: string;
  story: string;
  price?: string;
  image: string;
  category?: string;
  featured?: boolean;
}

/** Brand story timeline entry */
export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  image?: string;
}

/** Customer review */
export interface Review {
  id: string;
  name: string;
  avatar: string;
  content: string;
  story: string;
  rating: number;
  date: string;
  tag?: string;
}

/** Environment image */
export interface EnvironmentImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  type: 'image' | 'video';
}

/** Shop configuration */
export interface ShopConfig {
  industry: Industry;
  name: string;
  nameEn?: string;
  tagline: string;
  story: string;
  founderName?: string;
  founderQuote?: string;
  foundedYear?: string;
  timeline: TimelineEntry[];
  products: Product[];
  environment: EnvironmentImage[];
  reviews: Review[];
  address: string;
  phone: string;
  hours: string;
  wechat?: string;
  coordinates?: [number, number];
  heroVideo?: string;
  heroImage: string;
  logo?: string;
  qrCode?: string;
}

/** Audio track config */
export interface AudioTrack {
  src: string;
  name: string;
  artist?: string;
  duration?: number;
}

/** Audio config */
export interface AudioConfig {
  defaultVolume: number;
  fadeDuration: number;
  autoPlay: boolean;
  tracks: Record<string, AudioTrack>;
}
