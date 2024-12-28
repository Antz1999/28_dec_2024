import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    class LightBeam {
      x: number;
      y: number;
      angle: number;
      length: number;
      width: number;
      opacity: number;
      color: string;
      speed: number;
      baseOpacity: number;

      constructor() {
        this.reset();
        this.y = Math.random() * window.innerHeight;
      }

      reset() {
        const isMobile = window.innerWidth <= 768;
        this.x = Math.random() * window.innerWidth;
        this.y = -100;
        this.angle = Math.random() * Math.PI / 3 + Math.PI / 3;
        this.length = isMobile ? Math.random() * 200 + 150 : Math.random() * 400 + 300;
        this.width = isMobile ? Math.random() * 2 + 0.5 : Math.random() * 3 + 1;
        this.baseOpacity = Math.random() * 0.144 + 0.048;
        this.opacity = this.baseOpacity;
        this.speed = isMobile ? Math.random() * 0.002 + 0.001 : Math.random() * 0.003 + 0.002;
        
        const hue = 210 + Math.random() * 20;
        const saturation = 85 + Math.random() * 15;
        const lightness = 72 + Math.random() * 18;
        this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${this.opacity})`;
      }

      update(deltaTime: number) {
        const speedFactor = deltaTime / 16;
        this.y += 0.8 * speedFactor;
        this.angle += this.speed * speedFactor;
        this.opacity = this.baseOpacity + (Math.sin(Date.now() * 0.001) * 0.054);

        if (this.y > window.innerHeight + 100) {
          this.reset();
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const endX = this.x + Math.cos(this.angle) * this.length;
        const endY = this.y + Math.sin(this.angle) * this.length;

        const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
        const currentColor = this.color.replace(/[\d.]+\)$/, `${this.opacity})`);
        gradient.addColorStop(0, currentColor);
        gradient.addColorStop(1, currentColor.replace(/[\d.]+\)$/, '0)'));

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }

    const beams: LightBeam[] = Array.from({ length: window.innerWidth <= 768 ? 20 : 40 }, () => new LightBeam());
    let lastTime = performance.now();
    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;
    let frameTime = 0;

    const animate = (currentTime: number) => {
      if (!ctx || !canvas) return;

      const deltaTime = currentTime - lastTime;
      frameTime += deltaTime;

      if (frameTime >= frameInterval) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
        ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
        
        beams.forEach(beam => {
          beam.update(deltaTime);
          beam.draw(ctx);
        });

        frameTime = 0;
        lastTime = currentTime;
      }
      
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
        mixBlendMode: 'screen',
        WebkitTransform: 'translate3d(0,0,0)',
        transform: 'translate3d(0,0,0)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitPerspective: '1000',
        perspective: '1000'
      }}
    />
  );
};

export default ParticleBackground;