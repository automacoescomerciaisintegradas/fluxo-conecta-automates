
import { useEffect, useRef } from 'react';
import { useTheme } from "@/hooks/useTheme";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface ConnectionLine {
  start: { x: number; y: number };
  end: { x: number; y: number };
  opacity: number;
  animated: boolean;
}

const RoboticHand = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const connectionsRef = useRef<ConnectionLine[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const colors = theme === 'dark' 
        ? ['#22c55e', '#3b82f6', '#a855f7', '#ec4899', '#06b6d4']
        : ['#16a34a', '#2563eb', '#9333ea', '#dc2626', '#0891b2'];
      
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: Math.random() * 100,
          maxLife: Math.random() * 200 + 100
        });
      }
      
      particlesRef.current = particles;
    };

    const createConnections = () => {
      const connections: ConnectionLine[] = [];
      const handPoints = [
        { x: canvas.width * 0.4, y: canvas.height * 0.3 }, // Wrist
        { x: canvas.width * 0.5, y: canvas.height * 0.2 }, // Thumb base
        { x: canvas.width * 0.6, y: canvas.height * 0.15 }, // Thumb tip
        { x: canvas.width * 0.45, y: canvas.height * 0.1 }, // Index finger
        { x: canvas.width * 0.5, y: canvas.height * 0.05 }, // Middle finger
        { x: canvas.width * 0.55, y: canvas.height * 0.08 }, // Ring finger
        { x: canvas.width * 0.6, y: canvas.height * 0.12 }, // Pinky
        { x: canvas.width * 0.35, y: canvas.height * 0.4 }, // Palm left
        { x: canvas.width * 0.65, y: canvas.height * 0.35 }, // Palm right
      ];

      // Create connections between hand points
      for (let i = 0; i < handPoints.length - 1; i++) {
        connections.push({
          start: handPoints[i],
          end: handPoints[i + 1],
          opacity: Math.random() * 0.6 + 0.3,
          animated: Math.random() > 0.5
        });
      }

      connectionsRef.current = connections;
    };

    const drawRoboticHand = () => {
      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.25;

      // Hand palm (main structure)
      ctx.beginPath();
      ctx.strokeStyle = theme === 'dark' ? '#22c55e' : '#16a34a';
      ctx.lineWidth = 3;
      ctx.globalAlpha = 0.8;
      
      // Palm outline
      ctx.moveTo(centerX - 60, centerY + 40);
      ctx.lineTo(centerX + 60, centerY + 20);
      ctx.lineTo(centerX + 40, centerY - 60);
      ctx.lineTo(centerX - 40, centerY - 50);
      ctx.closePath();
      ctx.stroke();

      // Fingers
      const fingers = [
        { x: centerX - 30, y: centerY - 50, length: 70 }, // Index
        { x: centerX - 10, y: centerY - 60, length: 80 }, // Middle
        { x: centerX + 10, y: centerY - 55, length: 75 }, // Ring
        { x: centerX + 30, y: centerY - 45, length: 60 }, // Pinky
      ];

      fingers.forEach((finger, index) => {
        ctx.beginPath();
        ctx.strokeStyle = theme === 'dark' ? '#3b82f6' : '#2563eb';
        ctx.lineWidth = 2;
        
        // Finger segments
        for (let i = 0; i < 3; i++) {
          const segmentLength = finger.length / 3;
          const startY = finger.y - (i * segmentLength);
          const endY = finger.y - ((i + 1) * segmentLength);
          
          ctx.moveTo(finger.x, startY);
          ctx.lineTo(finger.x, endY);
          
          // Joints
          ctx.beginPath();
          ctx.arc(finger.x, endY, 3, 0, Math.PI * 2);
          ctx.fillStyle = theme === 'dark' ? '#a855f7' : '#9333ea';
          ctx.fill();
        }
        ctx.stroke();
      });

      // Thumb
      ctx.beginPath();
      ctx.strokeStyle = theme === 'dark' ? '#ec4899' : '#dc2626';
      ctx.lineWidth = 2;
      ctx.moveTo(centerX - 50, centerY + 10);
      ctx.lineTo(centerX - 70, centerY - 20);
      ctx.lineTo(centerX - 80, centerY - 40);
      ctx.stroke();

      // Wrist/forearm
      ctx.beginPath();
      ctx.strokeStyle = theme === 'dark' ? '#06b6d4' : '#0891b2';
      ctx.lineWidth = 4;
      ctx.moveTo(centerX - 30, centerY + 40);
      ctx.lineTo(centerX + 30, centerY + 20);
      ctx.lineTo(centerX + 25, centerY + 80);
      ctx.lineTo(centerX - 35, centerY + 100);
      ctx.closePath();
      ctx.stroke();

      ctx.globalAlpha = 1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Respawn particles
        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * (1 - particle.life / particle.maxLife);
        ctx.fill();

        // Particle glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connection lines
      connectionsRef.current.forEach((connection, index) => {
        ctx.beginPath();
        ctx.moveTo(connection.start.x, connection.start.y);
        ctx.lineTo(connection.end.x, connection.end.y);
        ctx.strokeStyle = theme === 'dark' ? '#22c55e' : '#16a34a';
        ctx.globalAlpha = connection.opacity * (connection.animated ? Math.sin(Date.now() * 0.005 + index) * 0.3 + 0.7 : 1);
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw robotic hand
      drawRoboticHand();

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    resizeCanvas();
    createParticles();
    createConnections();
    animate();

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
      createConnections();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-60"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

export default RoboticHand;
