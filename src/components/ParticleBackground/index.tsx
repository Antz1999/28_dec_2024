import React, { useEffect, useRef } from 'react';
import { setupCanvas } from './utils';
import { createParticles, updateParticles, drawParticles } from './particles';
import type { Particle } from './types';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', {
      alpha: true,
      willReadFrequently: false,
      powerPreference: 'high-performance'
    });
    if (!ctx) return;

    const handleResize = () => {
      if (!canvas) return;
      const { width, height } = setupCanvas(canvas);
      particlesRef.current = createParticles(width, height);
    };

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      if (!ctx || !canvas) return;

      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

      updateParticles(particlesRef.current, deltaTime, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      drawParticles(ctx, particlesRef.current);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 0, 
        background: 'linear-gradient(to bottom, rgb(16, 16, 16), rgb(24, 28, 36))',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default ParticleBackground;