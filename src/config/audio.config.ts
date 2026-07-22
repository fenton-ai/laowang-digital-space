import type { AudioConfig, Industry } from '../types';

/* ============================================
   AUDIO CONFIGURATION
   Maps industries to their background music
   ============================================
   Place MP3 files in public/audio/{category}/
   ============================================ */

/** Helper: get the correct audio path with base */
function audioPath(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\//, '')}`;
}

export const AUDIO_CONFIG: AudioConfig = {
  defaultVolume: 0.2,
  fadeDuration: 2000,
  autoPlay: false,
  tracks: {
    // Food category
    'food/hotpot': {
      src: audioPath('audio/food/hotpot.mp3'),
      name: '烟火沸腾',
      artist: 'AI 音乐素材库',
    },
    'food/bbq': {
      src: audioPath('audio/food/bbq.mp3'),
      name: '夜色烧烤',
      artist: 'AI 音乐素材库',
    },
    'food/restaurant': {
      src: audioPath('audio/food/restaurant.mp3'),
      name: '优雅食刻',
      artist: 'AI 音乐素材库',
    },
    // Hotel category
    'hotel/nature': {
      src: audioPath('audio/hotel/nature.mp3'),
      name: '山野之息',
      artist: 'AI 音乐素材库',
    },
    'hotel/relax': {
      src: audioPath('audio/hotel/relax.mp3'),
      name: '悠然时光',
      artist: 'AI 音乐素材库',
    },
    // Beauty category
    'beauty/spa': {
      src: audioPath('audio/beauty/spa.mp3'),
      name: '至美时刻',
      artist: 'AI 音乐素材库',
    },
    'beauty/luxury': {
      src: audioPath('audio/beauty/luxury.mp3'),
      name: '奢华之境',
      artist: 'AI 音乐素材库',
    },
    // Coffee category
    'coffee/cafe': {
      src: audioPath('audio/coffee/cafe.mp3'),
      name: '咖啡时光',
      artist: 'AI 音乐素材库',
    },
    // Default fallback
    'default': {
      src: audioPath('audio/default/default.mp3'),
      name: '氛围音乐',
      artist: 'AI 音乐素材库',
    },
  },
};

/** Get the track key for an industry */
export function getTrackForIndustry(industry: Industry): string {
  const themeMap: Record<Industry, string> = {
    hotpot: 'food/hotpot',
    bbq: 'food/bbq',
    restaurant: 'food/restaurant',
    hotel: 'hotel/nature',
    beauty: 'beauty/spa',
    coffee: 'coffee/cafe',
  };
  return themeMap[industry] || 'default';
}

/** Check if a specific track's audio file exists (returns the track key) */
export function getAudioTrackKey(industry: Industry): string {
  return getTrackForIndustry(industry);
}
