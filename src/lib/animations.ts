// Common animation configurations
export const easeInOutCubic = [0.25, 0.46, 0.45, 0.94] as const;

// Common animation variants
export const fadeInUp = {
	hidden: { opacity: 0, y: 60 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: easeInOutCubic,
		},
	},
};

export const fadeInLeft = {
	hidden: { opacity: 0, x: -60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.8,
			ease: easeInOutCubic,
		},
	},
};

export const fadeInRight = {
	hidden: { opacity: 0, x: 60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.8,
			ease: easeInOutCubic,
		},
	},
};

export const scaleIn = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: easeInOutCubic,
		},
	},
};

export const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
		},
	},
};
