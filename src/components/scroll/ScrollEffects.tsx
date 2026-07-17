import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ==========================================
// Desktop-only cinematic hero exit. It intentionally avoids scale and any
// horizontal translation so viewport zooms and breakpoint changes cannot clip
// the layout. CSS disables the sticky scene below 1024px.
// ==========================================
export const StickyHeroWrapper = ({ children }: { children: ReactNode }) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 0.26, 1], [0, 0, -64]);
	const opacity = useTransform(scrollYProgress, [0, 0.34, 0.92], [1, 1, 0]);

	return (
		<div ref={ref} className="hero-scroll-wrapper relative z-0 w-full bg-background">
			<motion.div style={{ y, opacity }} className="hero-scroll-content w-full">
				{children}
			</motion.div>
		</div>
	);
};

// ==========================================
// SCENE REVEAL: Cinematic Entry for Sections
// Transforms sections smoothly as they enter the viewport
// without breaking their natural scroll height.
// ==========================================
interface RevealSectionProps {
	children: ReactNode;
	type?: 'slide-up' | 'scale-in' | '3d-rotate';
	className?: string;
	id?: string;
}

export const RevealSection = ({
	children,
	type = 'slide-up',
	className = '',
	id,
}: RevealSectionProps) => {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start 95%', 'start 20%'], // Animates while the top 20% to 95% is in viewport
	});

	// Slide Up
	const slideY = useTransform(scrollYProgress, [0, 1], [80, 0]);
	const slideOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

	// Scale In
	const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
	const scaleOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

	// 3D Rotate
	const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
	const rotateOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
	const rotateScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

	let style = {};
	switch (type) {
		case 'slide-up':
			style = { y: slideY, opacity: slideOpacity };
			break;
		case 'scale-in':
			style = { scale, opacity: scaleOpacity };
			break;
		case '3d-rotate':
			style = {
				rotateX,
				scale: rotateScale,
				opacity: rotateOpacity,
				transformPerspective: 1200,
			};
			break;
	}

	return (
		<section id={id} ref={ref} className={`relative z-10 w-full ${className}`}>
			<motion.div style={style} className="w-full h-full">
				{children}
			</motion.div>
		</section>
	);
};
