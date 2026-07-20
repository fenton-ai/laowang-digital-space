import { useEffect, useRef, useState, useCallback } from 'react';
import { AUDIO_CONFIG, getTrackForIndustry } from '../config/audio.config';
import type { Industry } from '../types';

/* ============================================
   useAudio - Background Music Player Hook
   Handles playback, volume, and WeChat compat
   ============================================ */

interface AudioState {
  isPlaying: boolean;
  isLoaded: boolean;
  error: string | null;
  volume: number;
  trackName: string;
}

export function useAudio(industry: Industry) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<AudioState>({
    isPlaying: false,
    isLoaded: false,
    error: null,
    volume: AUDIO_CONFIG.defaultVolume,
    trackName: '',
  });

  const trackKey = getTrackForIndustry(industry);
  const track = AUDIO_CONFIG.tracks[trackKey];

  // Initialize audio element
  useEffect(() => {
    if (!track) {
      setState(prev => ({ ...prev, error: 'No audio track found' }));
      return;
    }

    const audio = new Audio();
    audio.src = track.src;
    audio.volume = AUDIO_CONFIG.defaultVolume;
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const onCanPlay = () => {
      setState(prev => ({
        ...prev,
        isLoaded: true,
        error: null,
        trackName: track.name,
      }));
    };

    const onError = () => {
      setState(prev => ({
        ...prev,
        isLoaded: false,
        error: `无法加载音频: ${track.src}。请将MP3文件放置在对应目录。`,
      }));
    };

    const onEnded = () => {
      // Loop is handled by the loop attribute, but just in case
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    audio.addEventListener('canplaythrough', onCanPlay);
    audio.addEventListener('error', onError);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('canplaythrough', onCanPlay);
      audio.removeEventListener('error', onError);
      audio.removeEventListener('ended', onEnded);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [trackKey]);

  // Toggle play/pause
  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      // WeChat autoplay workaround
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setState(prev => ({ ...prev, isPlaying: true }));
          })
          .catch((err) => {
            if (err.name === 'NotAllowedError') {
              // WeChat / iOS requires user gesture
              setState(prev => ({
                ...prev,
                error: '请点击页面任意位置后重试播放',
              }));
            }
          });
      }
    } else {
      audio.pause();
      setState(prev => ({ ...prev, isPlaying: false }));
    }
  }, []);

  // Set volume
  const setVolume = useCallback((vol: number) => {
    const clamped = Math.max(0, Math.min(1, vol));
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
    setState(prev => ({ ...prev, volume: clamped }));
  }, []);

  // Start playing (called from user interaction)
  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !audio.paused) return;
    audio.play()
      .then(() => setState(prev => ({ ...prev, isPlaying: true })))
      .catch(() => {});
  }, []);

  // Stop and reset
  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setState(prev => ({ ...prev, isPlaying: false }));
  }, []);

  return {
    ...state,
    togglePlay,
    setVolume,
    play,
    stop,
  };
}
