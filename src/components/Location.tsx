import { useMemo } from 'react';
import { MapPin, Phone, Clock, Smartphone, Navigation, LocateFixed } from 'lucide-react';
import type { ShopConfig } from '../types';
import { getTheme } from '../config/theme.config';
import ScrollReveal from './ScrollReveal';

/* ============================================
   Location - Redesigned map + info section
   Beautiful map illustration with navigation
   links to 高德地图 / 苹果地图 / 百度地图
   ============================================ */

interface Props {
  config: ShopConfig;
}

function MapBackground({ theme: t }: { theme: ReturnType<typeof getTheme> }) {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      {/* Grid lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="white" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="400" stroke="white" strokeWidth="0.5" />
      ))}
      {/* Curved route lines */}
      <path d="M50 350 Q120 280 200 200 Q280 120 350 50" stroke={t.colors.primary} strokeWidth="1.5" fill="none" opacity="0.6" strokeDasharray="4 4" />
      <path d="M30 320 Q150 250 200 180 Q260 100 370 80" stroke={t.colors.secondary} strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="3 3" />
      {/* Small dots */}
      {Array.from({ length: 15 }).map((_, i) => (
        <circle key={`d${i}`} cx={30 + Math.random() * 340} cy={30 + Math.random() * 340} r="2" fill="white" opacity="0.3" />
      ))}
    </svg>
  );
}

export default function Location({ config }: Props) {
  const theme = useMemo(() => getTheme(config.industry), [config.industry]);

  const navLinks = [
    {
      name: '高德地图',
      icon: LocateFixed,
      url: config.coordinates
        ? `https://uri.amap.com/marker?position=${config.coordinates[1]},${config.coordinates[0]}&name=${encodeURIComponent(config.name)}`
        : '#',
      color: '#1677FF',
    },
    {
      name: '苹果地图',
      icon: MapPin,
      url: `https://maps.apple.com/?q=${encodeURIComponent(config.address)}`,
      color: '#34C759',
    },
    {
      name: '百度地图',
      icon: Navigation,
      url: config.coordinates
        ? `https://api.map.baidu.com/marker?location=${config.coordinates[0]},${config.coordinates[1]}&title=${encodeURIComponent(config.name)}&output=html`
        : '#',
      color: '#3385FF',
    },
  ];

  const infoItems = [
    {
      icon: MapPin,
      label: '地址',
      value: config.address,
    },
    {
      icon: Phone,
      label: '电话',
      value: config.phone,
      href: `tel:${config.phone}`,
    },
    {
      icon: Clock,
      label: '营业时间',
      value: config.hours,
    },
    {
      icon: Smartphone,
      label: '微信',
      value: config.wechat || '—',
      copyable: true,
    },
  ];

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('已复制: ' + text);
    } catch {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  };

  return (
    <section id="location" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0"
        style={{ background: `linear-gradient(180deg, ${theme.colors.background[1]} 0%, ${theme.colors.background[2]} 100%)` }}
      />
      <div className="noise-overlay absolute inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <ScrollReveal variant="fadeUp">
          <div className="mb-16 text-center">
            <span className="text-sm tracking-[0.3em] uppercase"
              style={{ color: theme.colors.primary }}>
              到店信息
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4"
              style={{ fontFamily: theme.typography.displayFont, color: theme.colors.text }}>
              期待
              <span className="text-gradient" style={{ backgroundImage: theme.colors.gradient }}>
                {' '}您的光临
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-6 md:gap-8">
          {/* === LEFT: Map area (3/5) === */}
          <div className="md:col-span-3 space-y-4">
            <ScrollReveal variant="slideInLeft">
              {/* Map illustration card */}
              <div
                className="relative rounded-2xl overflow-hidden h-[320px] md:h-[380px]"
                style={{
                  background: `linear-gradient(145deg, ${theme.colors.background[0]} 0%, ${theme.colors.background[2]} 100%)`,
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                {/* Map grid background */}
                <MapBackground theme={theme} />

                {/* Glow orbs */}
                <div
                  className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
                  style={{
                    background: theme.effects.glowColor,
                    top: '20%',
                    left: '30%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                {/* Pulsing pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* Outer ring */}
                  <div
                    className="absolute -inset-8 rounded-full animate-ping opacity-30"
                    style={{ background: theme.colors.primary }}
                  />
                  {/* Inner ring */}
                  <div
                    className="absolute -inset-4 rounded-full animate-pulse opacity-50"
                    style={{ background: theme.colors.primary }}
                  />
                  {/* Pin */}
                  <div
                    className="relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
                    style={{ background: theme.colors.gradient }}
                  >
                    <MapPin className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>

                {/* Address label on map */}
                <div
                  className="absolute bottom-4 left-4 right-4 md:left-6 md:right-6 p-4 rounded-xl backdrop-blur-md"
                  style={{
                    background: `rgba(0,0,0,0.6)`,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                >
                  <p className="text-xs text-white/50 mb-1">📍 门店位置</p>
                  <p className="text-sm font-medium text-white/90">{config.address}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Navigation buttons row */}
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="grid grid-cols-3 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center gap-2 p-4 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                    style={{
                      background: theme.colors.cardBg,
                      border: `1px solid ${theme.colors.border}`,
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: link.color + '20' }}
                    >
                      <link.icon className="w-4.5 h-4.5" style={{ color: link.color }} />
                    </div>
                    <span className="text-xs font-medium" style={{ color: theme.colors.text }}>
                      {link.name}
                    </span>
                    <span className="text-[10px] opacity-40" style={{ color: theme.colors.textMuted }}>
                      导航前往
                    </span>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* === RIGHT: Info cards (2/5) === */}
          <div className="md:col-span-2">
            <ScrollReveal variant="slideInRight" delay={0.15}>
              <div className="space-y-3">
                {infoItems.map((item) => (
                  <div
                    key={item.label}
                    className="group relative p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: theme.colors.cardBg,
                      border: `1px solid ${theme.colors.border}`,
                    }}
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Icon */}
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: theme.colors.primary + '20' }}
                      >
                        <item.icon className="w-4.5 h-4.5" style={{ color: theme.colors.primary }} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] uppercase tracking-wider mb-0.5 opacity-40"
                          style={{ color: theme.colors.textMuted }}>
                          {item.label}
                        </p>
                        <p className="text-sm font-medium leading-snug" style={{ color: theme.colors.text }}>
                          {item.value}
                        </p>

                        {/* Actions */}
                        {'href' in item && item.href && (
                          <a
                            href={item.href}
                            className="inline-block mt-1.5 text-xs font-medium transition-opacity hover:opacity-80"
                            style={{ color: theme.colors.primary }}
                          >
                            📞 立即拨打 →
                          </a>
                        )}
                        {'copyable' in item && item.copyable && (
                          <button
                            onClick={() => handleCopy(config.wechat || '')}
                            className="block mt-1.5 text-xs font-medium transition-opacity hover:opacity-80"
                            style={{ color: theme.colors.primary }}
                          >
                            📋 复制微信号 →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to top, ${theme.colors.background[0]}, transparent)`,
        }}
      />
    </section>
  );
}
