import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
	end: number;
	duration?: number;
	delay?: number;
	start?: number;
}

export const useCountUp = ({
	end,
	duration = 2000,
	delay = 0,
	start = 0,
}: UseCountUpOptions) => {
	const [count, setCount] = useState(start);
	const [isVisible, setIsVisible] = useState(false);
	const countRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<number>();

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !isVisible) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.3 },
		);

		if (countRef.current) {
			observer.observe(countRef.current);
		}

		return () => observer.disconnect();
	}, [isVisible]);

	useEffect(() => {
		if (!isVisible) return;

		const startTime = Date.now() + delay;
		const startValue = start;
		const endValue = end;

		const animate = () => {
			const now = Date.now();
			const elapsed = Math.max(0, now - startTime);
			const progress = Math.min(elapsed / duration, 1);

			// Easing function (ease out)
			const easeOut = 1 - Math.pow(1 - progress, 3);
			const currentValue = startValue + (endValue - startValue) * easeOut;

			setCount(currentValue);

			if (progress < 1) {
				animationRef.current = requestAnimationFrame(animate);
			}
		};

		if (Date.now() >= startTime) {
			animate();
		} else {
			const timeoutId = setTimeout(() => {
				animate();
			}, delay);
			return () => clearTimeout(timeoutId);
		}

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [isVisible, end, duration, delay, start]);

	return { count, ref: countRef };
};
