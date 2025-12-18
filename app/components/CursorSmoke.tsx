"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

export function CursorSmoke() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const hueRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const createParticle = (x: number, y: number, vx: number, vy: number) => {
      const particle: Particle = {
        x,
        y,
        vx: vx * 0.5 + (Math.random() - 0.5) * 2,
        vy: vy * 0.5 + (Math.random() - 0.5) * 2,
        life: 1,
        maxLife: 60 + Math.random() * 40,
        size: 20 + Math.random() * 30,
        hue: hueRef.current,
      };
      particlesRef.current.push(particle);
      hueRef.current = (hueRef.current + 2) % 360;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { prevX, prevY } = mouseRef.current;
      const vx = e.clientX - prevX;
      const vy = e.clientY - prevY;
      
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        prevX: e.clientX,
        prevY: e.clientY,
      };

      // Create particles based on mouse velocity
      const speed = Math.sqrt(vx * vx + vy * vy);
      const particleCount = Math.min(Math.floor(speed / 3), 5);
      
      for (let i = 0; i < particleCount; i++) {
        createParticle(e.clientX, e.clientY, vx, vy);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;
    
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((p) => {
        p.life += 1;
        
        if (p.life > p.maxLife) return false;

        // Apply physics
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.vy -= 0.05; // Slight upward drift like smoke

        // Calculate opacity based on life
        const lifeRatio = 1 - p.life / p.maxLife;
        const alpha = lifeRatio * 0.4;

        // Draw particle with gradient
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.size * lifeRatio
        );
        gradient.addColorStop(0, `hsla(${p.hue}, 80%, 60%, ${alpha})`);
        gradient.addColorStop(0.4, `hsla(${p.hue + 30}, 70%, 50%, ${alpha * 0.6})`);
        gradient.addColorStop(1, `hsla(${p.hue + 60}, 60%, 40%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * lifeRatio, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        return true;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ mixBlendMode: "screen" }}
    />
  );
}