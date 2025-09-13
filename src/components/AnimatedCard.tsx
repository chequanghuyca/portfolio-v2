import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { easeInOutCubic } from '@/lib/animations';

interface AnimatedCardProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	hoverScale?: number;
	hoverRotate?: number;
	index?: number;
}

const AnimatedCard = ({
	children,
	className = '',
	delay = 0,
	hoverScale = 1.05,
	hoverRotate = 0,
	index = 0,
}: AnimatedCardProps) => {
	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			scale: 0.8,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.6,
				delay: delay + index * 0.1,
				ease: easeInOutCubic,
			},
		},
	};

	const hoverVariants = {
		hover: {
			scale: hoverScale,
			rotate: hoverRotate,
			y: -10,
			transition: {
				duration: 0.3,
				ease: easeInOutCubic,
			},
		},
	};

	return (
		<motion.div
			className={className}
			variants={cardVariants}
			initial="hidden"
			whileInView="visible"
			whileHover="hover"
			viewport={{ once: true, margin: '-50px' }}
			{...hoverVariants}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedCard;
