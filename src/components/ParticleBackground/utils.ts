import type { CanvasSize } from './types';

export function setupCanvas(canvas: HTMLCanvasElement): CanvasSize {
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth * dpr;
  const height = window.innerHeight * dpr;
  
  canvas.width = width;
  canvas.height = height;
  
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.scale(dpr, dpr);
  }
  
  return { width, height };
}