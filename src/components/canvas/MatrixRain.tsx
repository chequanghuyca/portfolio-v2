import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const MatrixRain = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationRef = useRef<number>(0);
	const isVisibleRef = useRef(true);
	const isMobile = useIsMobile();

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const chars =
			'01{}[]()<>;:=/+-*&|!?@#$%^~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const fontSize = isMobile ? 12 : 14;
		let columns = 0;
		let drops: number[] = [];

		const resize = () => {
			const parent = canvas.parentElement;
			if (!parent) return;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const w = parent.clientWidth;
			const h = parent.clientHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

			columns = Math.floor(w / fontSize);
			// Skip columns on mobile for performance
			const skip = isMobile ? 3 : 1;
			drops = new Array(Math.ceil(columns / skip)).fill(0).map(() => Math.random() * -100);
		};

		resize();
		window.addEventListener('resize', resize);

		const observer = new IntersectionObserver(
			([entry]) => {
				isVisibleRef.current = entry.isIntersecting;
			},
			{ threshold: 0.1 },
		);
		observer.observe(canvas);

		let lastTime = 0;
		const frameInterval = isMobile ? 80 : 50; // Slower on mobile

		const animate = (timestamp: number) => {
			animationRef.current = requestAnimationFrame(animate);

			if (!isVisibleRef.current) return;
			if (timestamp - lastTime < frameInterval) return;
			lastTime = timestamp;

			const w = canvas.clientWidth;
			const h = canvas.clientHeight;

			// Semi-transparent black to create trail effect
			ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
			ctx.fillRect(0, 0, w, h);

			ctx.font = `${fontSize}px 'Courier New', monospace`;

			const skip = isMobile ? 3 : 1;

			for (let i = 0; i < drops.length; i++) {
				const colIndex = i * skip;
				const char = chars[Math.floor(Math.random() * chars.length)];
				const x = colIndex * fontSize;
				const y = drops[i] * fontSize;

				// Gradient colors: purple to blue
				const hue = 260 + Math.random() * 40;
				const alpha = 0.08 + Math.random() * 0.07;
				ctx.fillStyle = `hsla(${hue}, 70%, 60%, ${alpha})`;
				ctx.fillText(char, x, y);

				// Occasionally draw a brighter "head" character
				if (Math.random() > 0.95) {
					ctx.fillStyle = `hsla(${hue}, 90%, 75%, ${alpha + 0.05})`;
					ctx.fillText(char, x, y);
				}

				// Reset when off screen
				if (y > h && Math.random() > 0.98) {
					drops[i] = 0;
				}

				drops[i] += 0.5 + Math.random() * 0.5;
			}
		};

		animationRef.current = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animationRef.current);
			window.removeEventListener('resize', resize);
			observer.disconnect();
		};
	}, [isMobile]);

	return (
		<canvas
			ref={canvasRef}
			className="absolute inset-0 w-full h-full pointer-events-none"
			style={{ zIndex: 0, opacity: 0.6 }}
		/>
	);
};

export default MatrixRain;
