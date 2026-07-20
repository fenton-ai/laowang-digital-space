import { motion, AnimatePresence } from 'framer-motion';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';
import type { Industry } from '../types';

/* ============================================
   AudioPlayer - Floating music control
   Apple-inspired glassmorphism design
   ============================================ */

interface Props {
  industry: Industry;
}

export default function AudioPlayer({ industry }: Props) {
  const { isPlaying, isLoaded, error, volume, trackName, togglePlay, setVolume } = useAudio(industry);

  // Don't render if audio file is missing (but still show a placeholder)
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="relative"
        >
          {/* Main button with glass effect */}
          <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={togglePlay}
              disabled={!isLoaded}
              className={`
                flex items-center gap-3 px-5 py-3
                text-white transition-all duration-300
                ${isLoaded ? 'hover:bg-white/10 cursor-pointer' : 'opacity-40 cursor-not-allowed'}
              `}
              aria-label={isPlaying ? '暂停音乐' : '播放音乐'}
            >
              {/* Icon with rotation animation */}
              <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
              >
                {isPlaying ? (
                  <Music2 className="w-5 h-5" />
                ) : (
                  <Music className="w-5 h-5" />
                )}
              </motion.div>

              {/* Track info */}
              <div className="text-left min-w-[80px]">
                <p className="text-sm font-medium leading-tight">
                  {isLoaded ? (isPlaying ? '正在播放' : '点击播放') : '加载中...'}
                </p>
                <p className="text-[10px] opacity-50 leading-tight mt-0.5 truncate max-w-[100px]">
                  {isLoaded ? trackName : error || '暂无音乐'}
                </p>
              </div>

              {/* Volume indicator */}
              {isPlaying && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex gap-0.5 items-end h-4"
                >
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="w-0.5 bg-white/80 rounded-full"
                      animate={{
                        height: [4, 12 + i * 4, 4],
                      }}
                      transition={{
                        duration: 0.6 + i * 0.15,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </button>

            {/* Volume slider (appears on hover/expand) */}
            <AnimatePresence>
              {isPlaying && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-3">
                    <div className="flex items-center gap-2">
                      <VolumeX className="w-3 h-3 opacity-50" />
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        className="
                          w-full h-1 appearance-none bg-white/20 rounded-full
                          [&::-webkit-slider-thumb]:appearance-none
                          [&::-webkit-slider-thumb]:w-3
                          [&::-webkit-slider-thumb]:h-3
                          [&::-webkit-slider-thumb]:bg-white
                          [&::-webkit-slider-thumb]:rounded-full
                          [&::-webkit-slider-thumb]:shadow-lg
                          [&::-webkit-slider-thumb]:cursor-pointer
                        "
                        aria-label="音量"
                      />
                      <Volume2 className="w-3 h-3 opacity-50" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Ambient glow */}
          <div
            className="absolute -inset-2 -z-10 rounded-3xl opacity-30 blur-xl"
            style={{
              background: isPlaying
                ? 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)'
                : 'none',
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
