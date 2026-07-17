import { useEffect, useRef } from 'react';

const INTERACTIVE_SELECTOR =
	'a, button, input, textarea, select, [role="button"], [role="menuitem"], [role="option"], [data-cursor-interactive]';

const TechCursor = () => {
	const ringRef = useRef<HTMLDivElement>(null);
	const dotRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ring = ringRef.current;
		const dot = dotRef.current;
		if (!ring || !dot) return;

		const finePointer = window.matchMedia('(pointer: fine)');
		const desktop = window.matchMedia('(min-width: 1024px)');
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

		let enabled = false;
		let positioned = false;
		let frame = 0;
		let targetX = -100;
		let targetY = -100;
		let ringX = -100;
		let ringY = -100;

		const place = (element: HTMLElement, x: number, y: number) => {
			element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
		};

		const renderRing = () => {
			frame = 0;
			ringX += (targetX - ringX) * 0.2;
			ringY += (targetY - ringY) * 0.2;
			place(ring, ringX, ringY);

			if (Math.abs(targetX - ringX) > 0.1 || Math.abs(targetY - ringY) > 0.1) {
				frame = window.requestAnimationFrame(renderRing);
			}
		};

		const scheduleRing = () => {
			if (!frame) frame = window.requestAnimationFrame(renderRing);
		};

		const hide = () => {
			ring.classList.remove('is-visible', 'is-interactive', 'is-active');
			dot.classList.remove('is-visible', 'is-active');
		};

		const handlePointerMove = (event: PointerEvent) => {
			if (!enabled) return;

			targetX = event.clientX;
			targetY = event.clientY;
			place(dot, targetX, targetY);

			if (!positioned) {
				ringX = targetX;
				ringY = targetY;
				place(ring, ringX, ringY);
				positioned = true;
			}

			const target = event.target instanceof Element ? event.target : null;
			ring.classList.toggle(
				'is-interactive',
				Boolean(target?.closest(INTERACTIVE_SELECTOR)),
			);
			ring.classList.add('is-visible');
			dot.classList.add('is-visible');
			scheduleRing();
		};

		const handlePointerDown = () => {
			if (!enabled) return;
			ring.classList.add('is-active');
			dot.classList.add('is-active');
		};

		const handlePointerUp = () => {
			ring.classList.remove('is-active');
			dot.classList.remove('is-active');
		};

		const syncAvailability = () => {
			enabled = finePointer.matches && desktop.matches && !reducedMotion.matches;
			document.documentElement.classList.toggle('tech-cursor-enabled', enabled);

			if (!enabled) {
				positioned = false;
				hide();
				if (frame) window.cancelAnimationFrame(frame);
				frame = 0;
			}
		};

		document.addEventListener('pointermove', handlePointerMove, { passive: true });
		document.addEventListener('pointerdown', handlePointerDown, { passive: true });
		document.addEventListener('pointerup', handlePointerUp, { passive: true });
		document.documentElement.addEventListener('pointerleave', hide);
		window.addEventListener('blur', hide);
		finePointer.addEventListener('change', syncAvailability);
		desktop.addEventListener('change', syncAvailability);
		reducedMotion.addEventListener('change', syncAvailability);
		syncAvailability();

		return () => {
			document.removeEventListener('pointermove', handlePointerMove);
			document.removeEventListener('pointerdown', handlePointerDown);
			document.removeEventListener('pointerup', handlePointerUp);
			document.documentElement.removeEventListener('pointerleave', hide);
			window.removeEventListener('blur', hide);
			finePointer.removeEventListener('change', syncAvailability);
			desktop.removeEventListener('change', syncAvailability);
			reducedMotion.removeEventListener('change', syncAvailability);
			document.documentElement.classList.remove('tech-cursor-enabled');
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<>
			<div ref={ringRef} className="tech-cursor-ring" aria-hidden="true">
				<span className="tech-cursor-axis" />
			</div>
			<div ref={dotRef} className="tech-cursor-dot" aria-hidden="true" />
		</>
	);
};

export default TechCursor;
