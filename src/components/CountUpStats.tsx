import { useCountUp } from '@/hooks/useCountUp';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface CountUpStatProps {
	number: string;
	label: string;
	delay?: number;
	isExperience?: boolean;
}

const CountUpStat: React.FC<CountUpStatProps> = ({
	number,
	label,
	delay = 0,
	isExperience = false,
}) => {
	const numericValue = parseFloat(number.replace(/[^\d.]/g, ''));
	const suffix = number.replace(/[\d.]/g, '');

	// Custom count for experience (0.5, 1.0, 1.5, 2.0, ...)
	const [experienceCount, setExperienceCount] = useState(0.5);
	const [isVisible, setIsVisible] = useState(false);
	const countRef = useRef<HTMLDivElement>(null);

	// Regular count for other stats
	const { count, ref } = useCountUp({
		start: 0,
		end: numericValue,
		duration: 2000,
		delay: delay * 100,
	});

	// Custom experience counting logic
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
		if (!isVisible || !isExperience) return;

		const duration = 2000;
		const steps = Math.ceil((numericValue - 0.5) / 0.5);
		const stepDuration = duration / steps;

		let currentStep = 0;
		const interval = setInterval(() => {
			currentStep++;
			const newValue = 0.5 + currentStep * 0.5;
			setExperienceCount(newValue);

			if (newValue >= numericValue) {
				setExperienceCount(numericValue);
				clearInterval(interval);
			}
		}, stepDuration);

		return () => clearInterval(interval);
	}, [isVisible, numericValue, delay, isExperience]);

	return (
		<motion.div
			ref={isExperience ? countRef : ref}
			className="text-center"
			whileHover={{ scale: 1.1, y: -10 }}
			transition={{ type: 'spring', stiffness: 300 }}
		>
			<motion.div
				className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-2"
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{
					delay: 0.5 + delay * 0.1,
					duration: 0.5,
					type: 'spring',
					stiffness: 200,
				}}
				viewport={{ once: true }}
			>
				{isExperience
					? Number.isInteger(experienceCount)
						? experienceCount
						: experienceCount.toFixed(1)
					: Math.floor(count)}
				{suffix}
			</motion.div>
			<motion.p
				className="text-sm sm:text-base text-text-secondary"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.7 + delay * 0.1, duration: 0.5 }}
				viewport={{ once: true }}
			>
				{label}
			</motion.p>
		</motion.div>
	);
};

export default CountUpStat;
