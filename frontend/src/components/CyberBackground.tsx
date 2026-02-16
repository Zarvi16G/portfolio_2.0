// src/components/CyberBackground.tsx
import React, { useEffect, useRef } from "react";

const CyberBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const positionRef = useRef({ x: 0, y: 0 }); // Mouse position
  const animationFrameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    window.addEventListener("resize", updateCanvasSize);
    updateCanvasSize();

    // 3D Sphere Points
    // Generate a fixed number of points on a sphere (Fibonacci lattice)
    const numPoints = 800; // Adjust for density
    const points: {
      x: number;
      y: number;
      z: number;
      theta: number;
      phi: number;
    }[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < numPoints; i++) {
      // Fibonacci Spiral Sphere algorithm
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numPoints);

      // Convert to Cartesian
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);

      points.push({ x, y, z, theta, phi });
    }

    const render = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      // Very slow time increment
      timeRef.current += 0.002;

      const mouseX = positionRef.current.x;
      const mouseY = positionRef.current.y;

      // Target radius: 80% viewport (min dimension) / 2
      const radius = Math.min(width, height) * 0.45;

      // Center of the screen (or follow mouse slightly offset from center)
      const centerX = width / 2 + (mouseX - width / 2) * 0.05;
      const centerY = height / 2 + (mouseY - height / 2) * 0.05;

      ctx.fillStyle = "rgba(255, 0, 128, 0.6)"; // Hot Pink

      // Rotation angles based on time
      const rotX = timeRef.current * 0.3;
      const rotY = timeRef.current * 0.2;

      // Project logic
      for (const point of points) {
        // 1. Rotate the point
        let { x, y, z } = point;

        // Rotate Y
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        let x1 = x * cosY - z * sinY;
        let z1 = z * cosY + x * sinY;

        // Rotate X
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        let y1 = y * cosX - z1 * sinX;
        let z2 = z1 * cosX + y * sinX;

        // 2. Apply "Energy" Noise distortion to Radius
        // Use coordinates + time for noise
        // Simple 3D noise approximation: combine sine waves
        const noise =
          Math.sin(x * 5 + timeRef.current) +
          Math.cos(y * 7 + timeRef.current * 1.5) +
          Math.sin(z * 3 + timeRef.current * 0.5);

        // Distort position along the normal (outward from center)
        // Magnitude of distortion: relatively small to keep sphere form
        const distortion = 1 + noise * 0.15; // 15% variance

        x1 *= distortion;
        y1 *= distortion;
        z2 *= distortion;

        // 3. Project to 2D
        const perspective = 800; // Camera distance
        const scale = perspective / (perspective + z2 * radius); // Z-scaling

        const screenX = centerX + x1 * radius * scale;
        const screenY = centerY + y1 * radius * scale;

        // 4. Draw Dot
        // Size based on depth (z2 is -1 to 1 approx, scaled)
        // Closer points (z2 < 0) are bigger
        // Map z2 from [-1, 1] to size
        // We need to be careful with z2 since scaling affects it.
        // Let's use the scale factor directly.

        const size = Math.max(0.5, 3 * scale); // Base scale ~1.

        // Alpha based on depth for "fog" effect
        // Further away = more transparent
        const alpha = Math.max(0.1, scale - 0.2);

        ctx.globalAlpha = alpha;

        // Optional "sparkle" for extra energy
        if (Math.random() > 0.995) {
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(screenX, screenY, size * 1.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "rgba(255, 0, 128, 0.6)"; // Reset
        } else {
          ctx.beginPath();
          ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1.0;

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
};

export default CyberBackground;
