import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type RgbaColor = {
	r: number;
	g: number;
	b: number;
	a: number;
};

const parseColor = (value: string): RgbaColor | null => {
	const channels = value.match(/[\d.]+/g)?.map(Number);
	if (!channels || channels.length < 3) return null;

	return {
		r: channels[0],
		g: channels[1],
		b: channels[2],
		a: channels[3] ?? 1,
	};
};

const isLightColor = ({ r, g, b }: RgbaColor) => {
	const linearize = (channel: number) => {
		const value = channel / 255;
		return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
	};

	const luminance = 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
	return luminance > 0.32;
};

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		let frame = 0;

		const updateSurface = () => {
			const button = buttonRef.current;
			const wrapper = wrapperRef.current;
			if (!button || !wrapper) return;

			const rect = button.getBoundingClientRect();
			const layers = document.elementsFromPoint(
				rect.left + rect.width / 2,
				rect.top + rect.height / 2,
			);

			for (const layer of layers) {
				if (wrapper.contains(layer)) continue;

				let current: HTMLElement | null = layer as HTMLElement;
				while (current && current !== document.documentElement) {
					const color = parseColor(window.getComputedStyle(current).backgroundColor);
					if (color && color.a > 0.35) {
						button.dataset.surface = isLightColor(color) ? 'light' : 'dark';
						return;
					}
					current = current.parentElement;
				}
			}

			button.dataset.surface = 'dark';
		};

		const update = () => {
			frame = 0;
			const scrollable = document.documentElement.scrollHeight - window.innerHeight;
			const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
			const shouldShow = window.scrollY > 300;

			setIsVisible(shouldShow);
			if (shouldShow && !buttonRef.current) {
				frame = window.requestAnimationFrame(update);
				return;
			}
			buttonRef.current?.style.setProperty('--scroll-progress', `${progress * 360}deg`);
			updateSurface();
		};

		const scheduleUpdate = () => {
			if (!frame) frame = window.requestAnimationFrame(update);
		};

		window.addEventListener('scroll', scheduleUpdate, { passive: true });
		window.addEventListener('resize', scheduleUpdate, { passive: true });
		scheduleUpdate();

		return () => {
			window.removeEventListener('scroll', scheduleUpdate);
			window.removeEventListener('resize', scheduleUpdate);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					ref={wrapperRef}
					initial={{ opacity: 0, y: 14, scale: 0.82 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: 10, scale: 0.88 }}
					transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
					className="fixed bottom-4 right-3 z-[70] sm:bottom-7 sm:right-6"
				>
					<button
						ref={buttonRef}
						type="button"
						onClick={scrollToTop}
						data-surface="dark"
						className="scroll-top-control"
						aria-label="Scroll back to top"
					>
						<span className="scroll-top-progress" aria-hidden="true" />
						<span className="scroll-top-core">
							<ArrowUp className="scroll-top-arrow" aria-hidden="true" />
						</span>
					</button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTop;
