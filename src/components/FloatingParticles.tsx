import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeSpeed: number;
  twinkleSpeed: number;
  color: string;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particlesArray: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = [
      'rgba(255, 255, 255, ', // White stars
      'rgba(167, 139, 250, ', // Violet nebula dust
      'rgba(56, 189, 248, ',  // Cyan cosmic dust
    ];

    const createParticle = (x: number, y: number, isInitial = false): Particle => {
      const colorTemplate = colors[Math.floor(Math.random() * colors.length)];
      return {
        x,
        y,
        size: Math.random() * 2 + 0.5, // Tiny stardust/stars
        speedX: (Math.random() - 0.5) * 0.15, // Very slow drift
        speedY: -Math.random() * 0.15 - 0.05, // Slow upward drift
        opacity: isInitial ? Math.random() * 0.7 + 0.1 : 0.01,
        fadeSpeed: Math.random() * 0.005 + 0.002,
        twinkleSpeed: (Math.random() - 0.5) * 0.02, // Twinkling effect
        color: colorTemplate,
      };
    };

    // Initialize particles
    const init = () => {
      const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120);
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(createParticle(x, y, true));
      }
    };

    init();

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((p, idx) => {
        // Update physics
        p.x += p.speedX;
        p.y += p.speedY;

        // Twinkle (change opacity dynamically)
        p.opacity += p.twinkleSpeed;
        if (p.opacity > 0.95 || p.opacity < 0.15) {
          p.twinkleSpeed = -p.twinkleSpeed;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, p.opacity)})`;
        ctx.fill();

        // Recycle out-of-bounds particles
        if (p.y < 0 || p.x < 0 || p.x > canvas.width) {
          particlesArray[idx] = createParticle(Math.random() * canvas.width, canvas.height + 10);
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-70"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
