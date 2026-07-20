import { useMemo } from 'react';
import { MapPin, Phone, Clock, Smartphone } from 'lucide-react';
import type { ShopConfig } from '../types';
import { getTheme } from '../config/theme.config';
import ScrollReveal from './ScrollReveal';

/* ============================================
   Location - Store info with map placeholder
   Glass cards with Apple-style info layout
   ============================================ */

interface Props {
  config: ShopConfig;
}

export default function Location({ config }: Props) {
  const theme = useMemo(() => getTheme(config.industry), [config.industry]);

  const infoItems = [
    {
      icon: MapPin,
      label: '地址',
      value: config.address,
      action: `https://maps.apple.com/?q=${encodeURIComponent(config.address)}`,
      actionLabel: '打开地图',
    },
    {
      icon: Phone,
      label: '电话',
      value: config.phone,
      action: `tel:${config.phone}`,
      actionLabel: '拨打电话',
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
      actionLabel: '复制微信号',
    },
  ];

  const handleCopyWechat = async () => {
    if (config.wechat) {
      try {
        await navigator.clipboard.writeText(config.wechat);
        alert('微信号已复制');
      } catch {
        // Fallback
        const el = document.createElement('textarea');
        el.value = config.wechat;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
    }
  };

  return (
    <section id="location" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0"
        style={{ background: theme.colors.background[0] }}
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

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Map placeholder */}
          <ScrollReveal variant="slideInLeft">
            <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-full min-h-[300px] glass"
              style={{ borderColor: theme.colors.border }}
            >
              {/* Map iframe */}
              {config.coordinates ? (
                <iframe
                  title="门店位置"
                  src={`https://maps.google.com/maps?q=${config.coordinates[0]},${config.coordinates[1]}&z=15&output=embed`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4 opacity-20"
                      style={{ color: theme.colors.primary }}
                    />
                    <p className="text-white/30 text-sm">地图加载中...</p>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Info cards */}
          <ScrollReveal variant="slideInRight" delay={0.1}>
            <div className="space-y-4">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="group relative p-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: theme.colors.cardBg,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: theme.colors.primary + '20' }}
                    >
                      <item.icon className="w-5 h-5"
                        style={{ color: theme.colors.primary }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-wider mb-1 opacity-40"
                        style={{ color: theme.colors.textMuted }}>
                        {item.label}
                      </p>
                      <p className="font-medium" style={{ color: theme.colors.text }}>
                        {item.value}
                      </p>

                      {/* Action button */}
                      {item.action && (
                        <a
                          href={item.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-xs hover:underline"
                          style={{ color: theme.colors.primary }}
                        >
                          {item.actionLabel} →
                        </a>
                      )}
                      {item.label === '微信' && config.wechat && !item.action && (
                        <button
                          onClick={handleCopyWechat}
                          className="block mt-2 text-xs hover:underline"
                          style={{ color: theme.colors.primary }}
                        >
                          复制微信号 →
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

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to top, ${theme.colors.background[1]}, transparent)`,
        }}
      />
    </section>
  );
}
