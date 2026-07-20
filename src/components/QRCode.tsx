import { useMemo, useRef, useState } from 'react';
import { Download, Smartphone, Share2, Printer } from 'lucide-react';
import type { ShopConfig } from '../types';
import { getTheme } from '../config/theme.config';
import ScrollReveal from './ScrollReveal';

/* ============================================
   QRCode - Downloadable QR code section
   Generates QR from current URL with
   save/print/share options
   ============================================ */

interface Props {
  config: ShopConfig;
}

export default function QRCodeSection({ config }: Props) {
  const theme = useMemo(() => getTheme(config.industry), [config.industry]);
  const qrRef = useRef<HTMLDivElement>(null);
  const [saved, setSaved] = useState(false);

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Generate QR code URL using a public API
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(pageUrl || 'https://ai-store.example.com')}`;

  const handleDownload = async () => {
    try {
      const response = await fetch(qrUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${config.name}-数字空间二维码.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {
      // Fallback: open in new tab
      window.open(qrUrl, '_blank');
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: config.name,
          text: config.tagline,
          url: pageUrl,
        });
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(pageUrl);
      alert('链接已复制到剪贴板');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="qrcode" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0"
        style={{ background: theme.colors.background[2] }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal variant="fadeUp">
          <div className="mb-12">
            <span className="text-sm tracking-[0.3em] uppercase"
              style={{ color: theme.colors.primary }}>
              扫码体验
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4"
              style={{ fontFamily: theme.typography.displayFont, color: theme.colors.text }}>
              扫码开启
              <span className="text-gradient" style={{ backgroundImage: theme.colors.gradient }}>
                {' '}数字空间
              </span>
            </h2>
            <p className="mt-4 text-sm" style={{ color: theme.colors.textMuted }}>
              用手机扫描二维码，即刻体验 {config.name} 的品牌数字空间
            </p>
          </div>
        </ScrollReveal>

        {/* QR Code card */}
        <ScrollReveal variant="scaleIn" delay={0.2}>
          <div
            ref={qrRef}
            className="relative inline-block p-8 md:p-12 rounded-3xl"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.cardBg}, rgba(255,255,255,0.03))`,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            {/* QR Image */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-2xl overflow-hidden bg-white p-3">
              <img
                src={qrUrl}
                alt={`${config.name} 数字空间二维码`}
                className="w-full h-full object-contain"
                crossOrigin="anonymous"
              />
            </div>

            {/* Brand name */}
            <p className="font-semibold text-lg mb-1"
              style={{ fontFamily: theme.typography.displayFont, color: theme.colors.text }}>
              {config.name}
            </p>
            <p className="text-xs opacity-40 mb-6">AI 数字体验空间</p>

            {/* Action buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass hover:bg-white/10 transition-all text-sm"
              >
                {saved ? '✅ 已保存' : (
                  <>
                    <Download className="w-4 h-4" />
                    下载二维码
                  </>
                )}
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass hover:bg-white/10 transition-all text-sm"
              >
                <Share2 className="w-4 h-4" />
                分享页面
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass hover:bg-white/10 transition-all text-sm"
              >
                <Printer className="w-4 h-4" />
                打印
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Usage tips */}
        <ScrollReveal variant="fadeUp" delay={0.4}>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs"
            style={{ color: theme.colors.textMuted }}>
            <span className="flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5" />
              微信扫码直接打开
            </span>
            <span className="flex items-center gap-2">
              <Download className="w-3.5 h-3.5" />
              下载后打印张贴
            </span>
            <span className="flex items-center gap-2">
              <Share2 className="w-3.5 h-3.5" />
              分享给朋友
            </span>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to top, ${theme.colors.background[0]}, transparent)`,
        }}
      />
    </section>
  );
}
