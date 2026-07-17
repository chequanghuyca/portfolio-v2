import { useEffect, useRef, useCallback } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CircuitNode {
	x: number;
	y: number;
	connections: number[];
	pulsePhase: number;
	pulseSpeed: number;
}

interface CircuitPath {
	fromNode: number;
	toNode: number;
	progress: number;
	speed: number;
	active: boolean;
	waypoints: { x: number; y: number }[];
}

const CircuitBoard = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationRef = useRef<number>(0);
	const isVisibleRef = useRef(true);
	const nodesRef = useRef<CircuitNode[]>([]);
	const pathsRef = useRef<CircuitPath[]>([]);
	const isMobile = useIsMobile();

	const generateCircuit = useCallback(
		(w: number, h: number) => {
			const gridSize = isMobile ? 80 : 60;
			const nodes: CircuitNode[] = [];
			const paths: CircuitPath[] = [];

			// Create grid-based nodes with some randomness
			for (let x = gridSize; x < w - gridSize; x += gridSize) {
				for (let y = gridSize; y < h - gridSize; y += gridSize) {
					if (Math.random() > 0.6) {
						nodes.push({
							x: x + (Math.random() - 0.5) * 20,
							y: y + (Math.random() - 0.5) * 20,
							connections: [],
							pulsePhase: Math.random() * Math.PI * 2,
							pulseSpeed: 0.02 + Math.random() * 0.03,
						});
					}
				}
			}

			// Connect nearby nodes with L-shaped paths
			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const dx = Math.abs(nodes[i].x - nodes[j].x);
					const dy = Math.abs(nodes[i].y - nodes[j].y);
					const dist = Math.sqrt(dx * dx + dy * dy);

					if (dist < gridSize * 2 && Math.random() > 0.5 && nodes[i].connections.length < 3) {
						nodes[i].connections.push(j);
						nodes[j].connections.push(i);

						// Create L-shaped waypoints (circuit traces go at right angles)
						const waypoints: { x: number; y: number }[] = [];
						waypoints.push({ x: nodes[i].x, y: nodes[i].y });
						if (Math.random() > 0.5) {
							waypoints.push({ x: nodes[j].x, y: nodes[i].y });
						} else {
							waypoints.push({ x: nodes[i].x, y: nodes[j].y });
						}
						waypoints.push({ x: nodes[j].x, y: nodes[j].y });

						paths.push({
							fromNode: i,
							toNode: j,
							progress: Math.random(),
							speed: 0.002 + Math.random() * 0.004,
							active: Math.random() > 0.5,
							waypoints,
						});
					}
				}
			}

			nodesRef.current = nodes;
			pathsRef.current = paths;
		},
		[isMobile],
	);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

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
			generateCircuit(w, h);
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
		const frameInterval = isMobile ? 50 : 33;

		const animate = (timestamp: number) => {
			animationRef.current = requestAnimationFrame(animate);

			if (!isVisibleRef.current) return;
			if (timestamp - lastTime < frameInterval) return;
			lastTime = timestamp;

			const w = canvas.clientWidth;
			const h = canvas.clientHeight;
			ctx.clearRect(0, 0, w, h);

			const nodes = nodesRef.current;
			const paths = pathsRef.current;

			// Draw circuit traces
			for (const path of paths) {
				const wp = path.waypoints;
				if (wp.length < 2) continue;

				// Draw trace line
				ctx.beginPath();
				ctx.moveTo(wp[0].x, wp[0].y);
				for (let k = 1; k < wp.length; k++) {
					ctx.lineTo(wp[k].x, wp[k].y);
				}
				ctx.strokeStyle = 'rgba(139, 92, 246, 0.08)';
				ctx.lineWidth = 1.5;
				ctx.stroke();

				// Animate energy pulse along path
				if (path.active) {
					path.progress += path.speed;
					if (path.progress > 1) {
						path.progress = 0;
						path.active = Math.random() > 0.3;
					}

					// Get position along path
					const totalLength = wp.reduce((acc, curr, idx) => {
						if (idx === 0) return 0;
						const dx = curr.x - wp[idx - 1].x;
						const dy = curr.y - wp[idx - 1].y;
						return acc + Math.sqrt(dx * dx + dy * dy);
					}, 0);

					let targetDist = path.progress * totalLength;
					let px = wp[0].x,
						py = wp[0].y;

					for (let k = 1; k < wp.length; k++) {
						const dx = wp[k].x - wp[k - 1].x;
						const dy = wp[k].y - wp[k - 1].y;
						const segLen = Math.sqrt(dx * dx + dy * dy);
						if (targetDist <= segLen) {
							const t = targetDist / segLen;
							px = wp[k - 1].x + dx * t;
							py = wp[k - 1].y + dy * t;
							break;
						}
						targetDist -= segLen;
					}

					// Draw pulse glow
					const gradient = ctx.createRadialGradient(px, py, 0, px, py, 12);
					gradient.addColorStop(0, 'rgba(139, 92, 246, 0.4)');
					gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.15)');
					gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
					ctx.fillStyle = gradient;
					ctx.fillRect(px - 12, py - 12, 24, 24);
				} else if (Math.random() > 0.998) {
					path.active = true;
					path.progress = 0;
				}
			}

			// Draw nodes
			for (const node of nodes) {
				node.pulsePhase += node.pulseSpeed;
				const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;
				const radius = 2 + pulse * 2;
				const alpha = 0.1 + pulse * 0.15;

				// Outer glow
				ctx.beginPath();
				ctx.arc(node.x, node.y, radius + 4, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(139, 92, 246, ${alpha * 0.3})`;
				ctx.fill();

				// Inner dot
				ctx.beginPath();
				ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`;
				ctx.fill();
			}
		};

		animationRef.current = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animationRef.current);
			window.removeEventListener('resize', resize);
			observer.disconnect();
		};
	}, [isMobile, generateCircuit]);

	return (
		<canvas
			ref={canvasRef}
			className="absolute inset-0 w-full h-full pointer-events-none"
			style={{ zIndex: 0 }}
		/>
	);
};

export default CircuitBoard;
