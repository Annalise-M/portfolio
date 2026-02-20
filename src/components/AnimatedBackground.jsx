import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.scss';

export default function AnimatedBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Stars for the galaxy
    const stars = [];
    const starCount = 300;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        color: Math.random() > 0.5 ? 'rgba(106, 219, 106,' : 'rgba(255, 255, 255,',
        parallax: Math.random() * 0.5 + 0.2
      });
    }

    // Galaxy spiral particles
    const galaxyParticles = [];
    const galaxyCount = 150;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < galaxyCount; i++) {
      const angle = (i / galaxyCount) * Math.PI * 4;
      const radius = (i / galaxyCount) * Math.min(canvas.width, canvas.height) * 0.4;

      galaxyParticles.push({
        angle: angle,
        radius: radius,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        speed: 0.001 + Math.random() * 0.002,
        color: Math.random() > 0.6 ? 'rgba(106, 219, 106,' : 'rgba(0, 245, 255,'
      });
    }

    // Grid particles (fewer and more subtle)
    const particles = [];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(106, 219, 106, 0.02)';
      ctx.lineWidth = 0.5;

      const gridSize = 80;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid
      drawGrid();

      // Draw stars (background)
      stars.forEach(star => {
        // Parallax effect based on mouse position
        const offsetX = (mouseX - canvas.width / 2) * star.parallax * 0.01;
        const offsetY = (mouseY - canvas.height / 2) * star.parallax * 0.01;

        // Twinkling effect
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.3) {
          star.twinkleSpeed *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x + offsetX, star.y + offsetY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color} ${star.opacity})`;
        ctx.shadowBlur = star.size * 4;
        ctx.shadowColor = star.color.includes('106') ? '#6adb6a' : '#ffffff';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw galaxy spiral
      galaxyParticles.forEach(particle => {
        particle.angle += particle.speed;

        const x = centerX + Math.cos(particle.angle) * particle.radius;
        const y = centerY + Math.sin(particle.angle) * particle.radius;

        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color} ${particle.opacity})`;
        ctx.shadowBlur = particle.size * 3;
        ctx.shadowColor = particle.color.includes('106') ? '#6adb6a' : '#00f5ff';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw floating particles (foreground)
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 255, ${particle.opacity})`;
        ctx.fill();

        // Connect nearby particles with subtle lines
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(106, 219, 106, ${0.08 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="animated-background">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      <div className="gradient-overlay"></div>
      <div className="scanline"></div>
      <div className="noise"></div>
    </div>
  );
}
