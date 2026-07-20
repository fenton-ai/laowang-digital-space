import { useEffect, useRef, useMemo } from 'react';
import type { Industry } from '../types';
import { getTheme } from '../config/theme.config';

/* ============================================
   ParticleField - Canvas-based particle system
   Creates floating, glowing particles with
   industry-specific colors and behaviors
   ============================================ */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  alphaSpeed: number;
  life: number;
  maxLife: number;
}

interface Props {
  industry: Industry;
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

export default function ParticleField({ industry, density = 'medium', className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const theme = useMemo(() => getTheme(industry), [industry]);

  const densityMultiplier = useMemo(() => {
    switch (density) {
      case 'low': return 0.5;
      case 'high': return 1.5;
      default: return 1;
    }
  }, [density]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const { particleColor, particleCount, particleSize } = theme.effects;
    const count = Math.floor(particleCount * densityMultiplier);

    const initParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3 - 0.1,
      size: particleSize[0] + Math.random() * (particleSize[1] - particleSize[0]),
      color: particleColor[Math.floor(Math.random() * particleColor.length)],
      alpha: 0.1 + Math.random() * 0.5,
      alphaSpeed: 0.005 + Math.random() * 0.01,
      life: Math.random() * 1000,
      maxLife: 500 + Math.random() * 1500,
    });

    particlesRef.current = Array.from({ length: count }, initParticle);

    const animate = (time: number) => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.map((p) => {
        // Update
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Alpha oscillation
        p.alpha += Math.sin(time * 0.001 * p.alphaSpeed) * 0.002;
        p.alpha = Math.max(0.05, Math.min(0.7, p.alpha));

        // Wrap around
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Respawn if too old
        if (p.life > p.maxLife) {
          return initParticle();
        }

        return p;
      });

      // Draw particles
      for (const p of particlesRef.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        // Outer glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, p.color + Math.round(p.alpha * 80).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, p.color + '00');
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.alpha * 180).toString(16).padStart(2, '0');
        ctx.fill();
      }

      // Connector lines for nearby particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.strokeStyle = theme.effects.particleColor[0]
              + Math.round(alpha * 255).toString(16).padStart(2, '0');
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [theme, densityMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
}
