import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { easeInOutCubic } from '@/lib/animations';

interface AnimatedSectionProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
	duration?: number;
	stagger?: boolean;
	staggerDelay?: number;
}

const AnimatedSection = ({
	children,
	className = '',
	delay = 0,
	direction = 'up',
	duration = 0.8,
	stagger = false,
	staggerDelay = 0.1,
}: AnimatedSectionProps) => {
	const getInitialVariant = () => {
		switch (direction) {
			case 'up':
				return { opacity: 0, y: 60 };
			case 'down':
				return { opacity: 0, y: -60 };
			case 'left':
				return { opacity: 0, x: -60 };
			case 'right':
				return { opacity: 0, x: 60 };
			case 'fade':
				return { opacity: 0 };
			default:
				return { opacity: 0, y: 60 };
		}
	};

	const getAnimateVariant = () => {
		switch (direction) {
			case 'up':
			case 'down':
				return { opacity: 1, y: 0 };
			case 'left':
			case 'right':
				return { opacity: 1, x: 0 };
			case 'fade':
				return { opacity: 1 };
			default:
				return { opacity: 1, y: 0 };
		}
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: staggerDelay,
				delayChildren: delay,
			},
		},
	};

	const itemVariants = {
		hidden: getInitialVariant(),
		visible: {
			...getAnimateVariant(),
			transition: {
				duration,
				ease: easeInOutCubic,
			},
		},
	};

	if (stagger) {
		return (
			<motion.div
				className={className}
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-100px' }}
			>
				{children}
			</motion.div>
		);
	}

	return (
		<motion.div
			className={className}
			variants={itemVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-100px' }}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedSection;
