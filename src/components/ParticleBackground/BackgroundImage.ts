import { ANIMATION_CONFIG } from './constants';
import type { Position } from './types';

export class BackgroundImage {
  private image: HTMLImageElement;
  private loaded: boolean = false;
  private position: Position = { x: 0, y: 0 };
  private rotation: number = 0;
  private pulsePhase: number = 0;

  constructor() {
    this.image = new Image();
    this.image.crossOrigin = "anonymous";
    this.image.src = "https://i.ibb.co/Gtj2T8j/GL-transparent.png";
    
    this.image.onload = () => {
      this.loaded = true;
      console.log("Background image loaded successfully");
    };

    this.image.onerror = (e) => {
      console.error("Error loading background image:", e);
    };
  }

  update(deltaTime: number) {
    this.rotation += deltaTime * ANIMATION_CONFIG.ROTATION_SPEED;
    this.pulsePhase += deltaTime * ANIMATION_CONFIG.PULSE_SPEED;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.loaded) return;

    const canvas = ctx.canvas;
    const dpr = window.devicePixelRatio || 1;
    const width = this.image.width * ANIMATION_CONFIG.IMAGE_SCALE;
    const height = this.image.height * ANIMATION_CONFIG.IMAGE_SCALE;

    // Center position
    this.position.x = (canvas.width / dpr - width) / 2;
    this.position.y = (canvas.height / dpr - height) / 2;

    // Calculate pulse opacity
    const pulseOpacity = ANIMATION_CONFIG.BASE_OPACITY + Math.sin(this.pulsePhase) * 0.03;

    ctx.save();
    
    // Move to center for rotation
    ctx.translate(
      this.position.x + width / 2,
      this.position.y + height / 2
    );
    
    // Apply rotation
    ctx.rotate(this.rotation);
    
    // Set drawing styles
    ctx.globalAlpha = pulseOpacity;
    ctx.filter = 'brightness(0) invert(1)';
    ctx.globalCompositeOperation = 'screen';
    
    // Draw image centered
    try {
      ctx.drawImage(
        this.image,
        -width / 2,
        -height / 2,
        width,
        height
      );
    } catch (error) {
      console.error("Error drawing background image:", error);
    }
    
    ctx.restore();
  }
}