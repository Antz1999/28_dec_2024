import { PARTICLE_CONFIG } from './constants';
import type { Particle } from './types';

export function createParticles(width: number, height: number): Particle[] {
  return Array.from({ length: PARTICLE_CONFIG.COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 1,
    speedX: (Math.random() - 0.5) * 0.3,
    speedY: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.5 + 0.2,
    hue: 210 + Math.random() * 20
  }));
}

export function updateParticles(particles: Particle[], deltaTime: number, width: number, height: number): void {
  const timeScale = deltaTime * 0.06;

  particles.forEach(particle => {
    particle.x += particle.speedX * timeScale;
    particle.y += particle.speedY * timeScale;

    // Wrap around edges
    if (particle.x < 0) particle.x = width;
    if (particle.x > width) particle.x = 0;
    if (particle.y < 0) particle.y = height;
    if (particle.y > height) particle.y = 0;

    // Pulse opacity
    particle.opacity = 0.35 + Math.sin(Date.now() * 0.003) * 0.15;
  });
}

export function drawParticles(ctx: CanvasRenderingContext2D, particles: Particle[]): void {
  particles.forEach(particle => {
    ctx.beginPath();
    const gradient = ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.radius
    );
    gradient.addColorStop(0, `hsla(${particle.hue}, 85%, 72%, ${particle.opacity})`);
    gradient.addColorStop(1, `hsla(${particle.hue}, 85%, 72%, 0)`);
    
    ctx.fillStyle = gradient;
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}