import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CodeLine {
	text: string;
	x: number;
	y: number;
	speed: number;
	opacity: number;
	fontSize: number;
	color: string;
	typed: number; // characters typed so far
	typeSpeed: number;
}

const CODE_SNIPPETS = [
	'const app = express();',
	'func main() {',
	'import React from "react"',
	'export default function',
	'async function fetchData()',
	'type Props = {',
	'interface User {',
	'router.HandleFunc("/api"',
	'const [state, setState]',
	'useEffect(() => {',
	'return <Component />',
	'go func() {',
	'channel := make(chan)',
	'SELECT * FROM users',
	'docker compose up -d',
	'git push origin main',
	'npm run build',
	'println!("Hello")',
	'fn solve(n: i32) ->',
	'@media (max-width:',
	'border-radius: 12px;',
	'display: flex;',
	'justify-content: center',
	'background: linear-gradient',
];

const COLORS = [
	'rgba(139, 92, 246, ALPHA)', // purple
	'rgba(59, 130, 246, ALPHA)', // blue
	'rgba(16, 185, 129, ALPHA)', // green
	'rgba(236, 72, 153, ALPHA)', // pink
	'rgba(245, 158, 11, ALPHA)', // amber
	'rgba(99, 102, 241, ALPHA)', // indigo
];

const TypeWriter = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationRef = useRef<number>(0);
	const linesRef = useRef<CodeLine[]>([]);
	const isVisibleRef = useRef(true);
	const isMobile = useIsMobile();

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const createLine = (w: number, h: number, startOffscreen = true): CodeLine => {
			const snippet = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
			const baseSize = isMobile ? 10 : 13;
			const fontSize = baseSize + Math.random() * 4;
			const alpha = 0.04 + Math.random() * 0.06;
			const color = COLORS[Math.floor(Math.random() * COLORS.length)].replace('ALPHA', String(alpha));

			return {
				text: snippet,
				x: startOffscreen ? -200 : Math.random() * w,
				y: Math.random() * h,
				speed: 0.3 + Math.random() * 0.7,
				opacity: alpha,
				fontSize,
				color,
				typed: startOffscreen ? 0 : snippet.length,
				typeSpeed: 0.1 + Math.random() * 0.2,
			};
		};

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

			const lineCount = isMobile ? 8 : 18;
			linesRef.current = Array.from({ length: lineCount }, () => createLine(w, h, false));
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

			const lines = linesRef.current;

			for (let i = 0; i < lines.length; i++) {
				const line = lines[i];

				// Type more characters
				if (line.typed < line.text.length) {
					line.typed += line.typeSpeed;
				}

				// Move horizontally
				line.x += line.speed;

				// Reset when off right edge
				if (line.x > w + 100) {
					lines[i] = createLine(w, h, true);
					continue;
				}

				// Draw the typed portion
				const displayText = line.text.substring(0, Math.floor(line.typed));
				ctx.font = `${line.fontSize}px 'Courier New', 'Fira Code', monospace`;
				ctx.fillStyle = line.color;
				ctx.fillText(displayText, line.x, line.y);

				// Draw cursor blink
				if (line.typed < line.text.length) {
					const cursorX = line.x + ctx.measureText(displayText).width;
					if (Math.floor(timestamp / 530) % 2 === 0) {
						ctx.fillStyle = line.color;
						ctx.fillRect(cursorX + 2, line.y - line.fontSize + 3, 2, line.fontSize);
					}
				}
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
			style={{ zIndex: 0 }}
		/>
	);
};

export default TypeWriter;
