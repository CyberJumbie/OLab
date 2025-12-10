import React, { useRef, useEffect } from 'react';

const MicroscopeBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Cell configuration
        const cells: Cell[] = [];
        const cellCount = 40; // Number of cells

        class Cell {
            x: number;
            y: number;
            radius: number;
            vx: number;
            vy: number;
            opacity: number;
            blur: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.radius = Math.random() * 20 + 10; // 10-30px
                this.vx = (Math.random() - 0.5) * 0.2; // Slow movement
                this.vy = (Math.random() - 0.5) * 0.2;
                this.opacity = Math.random() * 0.15 + 0.05; // 0.05 - 0.2
                this.blur = Math.random() * 5; // 0-5px blur
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Wrap around screen
                if (this.x < -50) this.x = width + 50;
                if (this.x > width + 50) this.x = -50;
                if (this.y < -50) this.y = height + 50;
                if (this.y > height + 50) this.y = -50;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

                // Microscope Look: Stroke with subtle fill
                ctx.strokeStyle = `rgba(184, 134, 11, ${this.opacity * 1.5})`; // Gold tint
                ctx.lineWidth = 1.5;
                ctx.stroke();

                ctx.fillStyle = `rgba(100, 149, 237, ${this.opacity * 0.5})`; // Blueish fill
                ctx.fill();

                // Inner Nucleus
                ctx.beginPath();
                ctx.arc(this.x + this.radius * 0.2, this.y - this.radius * 0.2, this.radius * 0.3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(184, 134, 11, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Initialize cells
        for (let i = 0; i < cellCount; i++) {
            cells.push(new Cell());
        }

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            cells.forEach(cell => {
                cell.update();
                ctx.save();
                if (cell.blur > 2) {
                    ctx.globalAlpha = 0.6;
                }
                cell.draw(ctx);
                ctx.restore();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 0.8 }}
        />
    );
};

export default MicroscopeBackground;
