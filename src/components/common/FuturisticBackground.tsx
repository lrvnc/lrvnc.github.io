
import React, { useEffect, useRef } from 'react';

const FuturisticBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedY: number;
            speedX: number;
            opacity: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.size = Math.random() * 3 + 1;
                // Radial movement from bottom to top
                // Speed Y is negative to move up
                this.speedY = -(Math.random() * 2 + 1);
                // Speed X is based on distance from center for a "radial" feel
                const centerX = canvas.width / 2;
                this.speedX = (this.x - centerX) / (canvas.width / 2) * 1.5;
                this.opacity = Math.random() * 0.5 + 0.3;

                // Futuristic color palette: cyan, purple, white
                const colors = ['#06b6d4', '#a855f7', '#ffffff'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX;

                // Gradually fade out as it goes up
                const lifeRatio = this.y / canvas.height;
                this.opacity = lifeRatio * 0.8;

                if (this.y < -20) {
                    this.reset();
                }
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.opacity = Math.random() * 0.5 + 0.3;
                const centerX = canvas.width / 2;
                this.speedX = (this.x - centerX) / (canvas.width / 2) * 1.5;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                // Drawing a square for "cubic" feel
                ctx.fillRect(this.x, this.y, this.size, this.size);

                // Add a small glow effect
                ctx.shadowBlur = 4;
                ctx.shadowColor = this.color;
            }
        }

        const init = () => {
            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        init();
        animate();

        window.addEventListener('resize', () => {
            resizeCanvas();
            init();
        });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none -z-10 bg-transparent"
            style={{ filter: 'blur(0.5px)' }}
        />
    );
};

export default FuturisticBackground;
