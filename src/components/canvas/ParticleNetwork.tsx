import { useCallback, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Particle {
	x: number;
	y: number;
	vx: number;
	vy: number;
	radius: number;
	opacity: number;
	color: 'gold' | 'terracotta';
}

const ParticleNetwork = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationRef = useRef<number>(0);
	const particlesRef = useRef<Particle[]>([]);
	const pointerRef = useRef({ x: -1000, y: -1000 });
	const visibleRef = useRef(true);
	const isMobile = useIsMobile();

	const initParticles = useCallback(
		(width: number, height: number) => {
			const area = width * height;
			const densityCount = Math.round(area / (isMobile ? 23000 : 17000));
			const count = Math.min(isMobile ? 34 : 82, Math.max(20, densityCount));

			particlesRef.current = Array.from({ length: count }, (_, index) => ({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - 0.5) * 0.34,
				vy: (Math.random() - 0.5) * 0.34,
				radius: Math.random() * 1.3 + 0.45,
				opacity: Math.random() * 0.45 + 0.18,
				color: index % 7 === 0 ? 'terracotta' : 'gold',
			}));
		},
		[isMobile],
	);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const context = canvas.getContext('2d');
		if (!context) return;

		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const resize = () => {
			const parent = canvas.parentElement;
			if (!parent) return;

			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const width = parent.clientWidth;
			const height = parent.clientHeight;
			canvas.width = Math.round(width * dpr);
			canvas.height = Math.round(height * dpr);
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			context.setTransform(dpr, 0, 0, dpr, 0, 0);
			initParticles(width, height);
		};

		const handlePointerMove = (event: PointerEvent) => {
			if (isMobile) return;
			const rect = canvas.getBoundingClientRect();
			pointerRef.current = {
				x: event.clientX - rect.left,
				y: event.clientY - rect.top,
			};
		};

		const handlePointerLeave = () => {
			pointerRef.current = { x: -1000, y: -1000 };
		};

		resize();
		window.addEventListener('resize', resize, { passive: true });
		window.addEventListener('pointermove', handlePointerMove, { passive: true });
		document.addEventListener('mouseleave', handlePointerLeave);

		const observer = new IntersectionObserver(
			([entry]) => {
				visibleRef.current = entry.isIntersecting && !document.hidden;
			},
			{ threshold: 0.05 },
		);
		observer.observe(canvas);

		const handleVisibilityChange = () => {
			visibleRef.current = !document.hidden;
		};
		document.addEventListener('visibilitychange', handleVisibilityChange);

		let lastFrame = 0;
		const frameInterval = isMobile ? 1000 / 30 : 1000 / 50;

		const draw = (timestamp: number) => {
			if (!reduceMotion) {
				animationRef.current = requestAnimationFrame(draw);
			}
			if (!visibleRef.current || timestamp - lastFrame < frameInterval) return;
			lastFrame = timestamp;

			const width = canvas.clientWidth;
			const height = canvas.clientHeight;
			context.clearRect(0, 0, width, height);

			const particles = particlesRef.current;
			const pointer = pointerRef.current;
			const connectionDistance = isMobile ? 90 : 145;

			for (let index = 0; index < particles.length; index += 1) {
				const particle = particles[index];

				if (!reduceMotion) {
					const pointerX = pointer.x - particle.x;
					const pointerY = pointer.y - particle.y;
					const pointerDistance = Math.hypot(pointerX, pointerY);

					if (pointerDistance > 0 && pointerDistance < 190) {
						const force = (190 - pointerDistance) / 190;
						particle.vx += (pointerX / pointerDistance) * force * 0.009;
						particle.vy += (pointerY / pointerDistance) * force * 0.009;
					}

					particle.x += particle.vx;
					particle.y += particle.vy;
					particle.vx *= 0.995;
					particle.vy *= 0.995;

					if (particle.x < 0 || particle.x > width) particle.vx *= -1;
					if (particle.y < 0 || particle.y > height) particle.vy *= -1;
					particle.x = Math.max(0, Math.min(width, particle.x));
					particle.y = Math.max(0, Math.min(height, particle.y));
				}

				context.beginPath();
				context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
				context.fillStyle =
					particle.color === 'terracotta'
						? `rgba(212, 107, 69, ${particle.opacity})`
						: `rgba(232, 164, 74, ${particle.opacity})`;
				context.fill();

				for (let targetIndex = index + 1; targetIndex < particles.length; targetIndex += 1) {
					const target = particles[targetIndex];
					const distance = Math.hypot(particle.x - target.x, particle.y - target.y);
					if (distance >= connectionDistance) continue;

					const alpha = (1 - distance / connectionDistance) * 0.12;
					context.beginPath();
					context.moveTo(particle.x, particle.y);
					context.lineTo(target.x, target.y);
					context.strokeStyle = `rgba(232, 164, 74, ${alpha})`;
					context.lineWidth = 0.6;
					context.stroke();
				}
			}
		};

		if (reduceMotion) {
			draw(performance.now() + frameInterval);
		} else {
			animationRef.current = requestAnimationFrame(draw);
		}

		return () => {
			cancelAnimationFrame(animationRef.current);
			window.removeEventListener('resize', resize);
			window.removeEventListener('pointermove', handlePointerMove);
			document.removeEventListener('mouseleave', handlePointerLeave);
			document.removeEventListener('visibilitychange', handleVisibilityChange);
			observer.disconnect();
		};
	}, [initParticles, isMobile]);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden="true"
			className="pointer-events-none absolute inset-0 h-full w-full"
		/>
	);
};

export default ParticleNetwork;
