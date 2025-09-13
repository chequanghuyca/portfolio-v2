import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { easeInOutCubic } from '@/lib/animations';

interface PageTransitionProps {
	children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
	const pageVariants = {
		initial: {
			opacity: 0,
			y: 20,
		},
		in: {
			opacity: 1,
			y: 0,
		},
		out: {
			opacity: 0,
			y: -20,
		},
	};

	const pageTransition = {
		type: 'tween' as const,
		ease: easeInOutCubic,
		duration: 0.5,
	};

	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			{children}
		</motion.div>
	);
};

export default PageTransition;
