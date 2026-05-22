"use client";

import { useEffect, useRef } from "react";

type GridPoint = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  col: number;
  row: number;
};

const CYAN = "0, 210, 255";
const PURPLE = "112, 41, 255";
const MAGENTA = "255, 0, 212";

export function TechInteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const spacing = 52;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let points: GridPoint[] = [];

    const buildGrid = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / spacing) + 1;
      rows = Math.ceil(height / spacing) + 1;
      points = [];

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const stagger = row % 2 === 0 ? 0 : spacing * 0.5;
          const baseX = col * spacing + stagger;
          const baseY = row * spacing;
          points.push({ baseX, baseY, x: baseX, y: baseY, col, row });
        }
      }
    };

    const updateMouse = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const inside =
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom;

      mouseRef.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
        active: inside,
      };
    };

    const onMouseMove = (event: MouseEvent) => updateMouse(event.clientX, event.clientY);
    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) updateMouse(touch.clientX, touch.clientY);
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };

    const getPointAt = (col: number, row: number) =>
      points.find((point) => point.col === col && point.row === row);

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const mouse = mouseRef.current;
      const t = time * 0.001;

      for (const point of points) {
        const waveX = Math.sin(t * 0.8 + point.baseY * 0.012) * 3;
        const waveY = Math.cos(t * 0.7 + point.baseX * 0.01) * 3;
        let targetX = point.baseX + waveX;
        let targetY = point.baseY + waveY;

        if (mouse.active) {
          const dx = targetX - mouse.x;
          const dy = targetY - mouse.y;
          const distance = Math.hypot(dx, dy) || 1;
          const radius = 200;

          if (distance < radius) {
            const influence = (1 - distance / radius) ** 2;
            targetX += (dx / distance) * influence * 42;
            targetY += (dy / distance) * influence * 42;
          }
        }

        point.x += (targetX - point.x) * 0.1;
        point.y += (targetY - point.y) * 0.1;
      }

      for (const point of points) {
        const neighbors = [
          getPointAt(point.col + 1, point.row),
          getPointAt(point.col, point.row + 1),
          getPointAt(point.col + 1, point.row + 1),
        ].filter(Boolean) as GridPoint[];

        for (const neighbor of neighbors) {
          const dx = point.x - neighbor.x;
          const dy = point.y - neighbor.y;
          const distance = Math.hypot(dx, dy);
          const maxDistance = spacing * 1.65;

          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.22;
            const mix = (point.col + point.row) % 3;
            const color = mix === 0 ? CYAN : mix === 1 ? PURPLE : MAGENTA;

            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(neighbor.x, neighbor.y);
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (const point of points) {
        let alpha = 0.18;
        let radius = 1.2;

        if (mouse.active) {
          const distance = Math.hypot(point.x - mouse.x, point.y - mouse.y);
          if (distance < 140) {
            const boost = 1 - distance / 140;
            alpha = 0.18 + boost * 0.65;
            radius = 1.2 + boost * 1.8;
          }
        }

        const mix = (point.col + point.row) % 3;
        const color = mix === 0 ? CYAN : mix === 1 ? PURPLE : MAGENTA;

        ctx.beginPath();
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.fill();
      }

      if (mouse.active) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
        glow.addColorStop(0, "rgba(0, 210, 255, 0.12)");
        glow.addColorStop(0.45, "rgba(112, 41, 255, 0.06)");
        glow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    buildGrid();
    frameRef.current = requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(buildGrid);
    resizeObserver.observe(container);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-navy-deep" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#060E1A_72%)]" />
      <div className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-purple-brand/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-cyan-brand/10 blur-3xl" />
    </div>
  );
}
