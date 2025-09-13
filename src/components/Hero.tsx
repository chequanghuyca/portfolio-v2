import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/profile-photo.png';
import { easeInOutCubic, fadeInUp } from '@/lib/animations';

const Hero = () => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	};

	const textVariants = fadeInUp;

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.8, rotate: -10 },
		visible: {
			opacity: 1,
			scale: 1,
			rotate: 0,
			transition: {
				duration: 1,
				ease: easeInOutCubic,
				delay: 0.5,
			},
		},
	};

	const floatingVariants = {
		float: {
			y: [-20, 20],
			transition: {
				duration: 3,
				repeat: Infinity,
				repeatType: 'reverse' as const,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative overflow-hidden"
			style={{
				backgroundImage: `url(${heroImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-background/90" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
				<motion.div
					className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{/* Left Content */}
					<motion.div className="text-center lg:text-left" variants={containerVariants}>
						<div className="mb-6">
							<motion.p
								className="text-lg text-text-secondary mb-2"
								variants={textVariants}
							>
								Hello, I'm
							</motion.p>
							<motion.svg
								className="text-3xl sm:text-4xl lg:text-5xl font-bungee w-full h-16 sm:h-20 lg:h-24"
								variants={textVariants}
								viewBox="0 0 300 80"
							>
								<text x="50%" y="50%" dy="0.35em" textAnchor="middle">
									HUY CHE
								</text>
							</motion.svg>
							<motion.h2
								className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient mb-6"
								variants={textVariants}
							>
								Full Stack Developer
							</motion.h2>
						</div>

						<motion.p
							className="text-base sm:text-lg text-text-secondary mb-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0"
							variants={textVariants}
						>
							I create exceptional digital experiences with modern web technologies.
							Passionate about clean code, user experience, and bringing innovative ideas
							to life.
						</motion.p>

						<motion.div
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 px-4 sm:px-0"
							variants={textVariants}
						>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button size="lg" className="gradient-primary text-white" asChild>
									<a href="#projects">View My Work</a>
								</Button>
							</motion.div>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button variant="outline" size="lg" asChild>
									<a href="#contact">Get In Touch</a>
								</Button>
							</motion.div>
						</motion.div>

						{/* Social Links */}
						<motion.div
							className="flex gap-4 justify-center lg:justify-start"
							variants={textVariants}
						>
							<motion.div
								whileHover={{ scale: 1.2, rotate: 5 }}
								whileTap={{ scale: 0.9 }}
							>
								<Button variant="ghost" size="icon" asChild>
									<a href="https://github.com" target="_blank" rel="noopener noreferrer">
										<Github size={20} />
									</a>
								</Button>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.2, rotate: -5 }}
								whileTap={{ scale: 0.9 }}
							>
								<Button variant="ghost" size="icon" asChild>
									<a
										href="https://linkedin.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Linkedin size={20} />
									</a>
								</Button>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.2, rotate: 5 }}
								whileTap={{ scale: 0.9 }}
							>
								<Button variant="ghost" size="icon" asChild>
									<a href="mailto:huy.che@example.com">
										<Mail size={20} />
									</a>
								</Button>
							</motion.div>
						</motion.div>
					</motion.div>

					{/* Right Content - Profile Photo */}
					<motion.div
						className="flex justify-center lg:justify-end"
						variants={imageVariants}
						animate="float"
						{...floatingVariants}
					>
						<div className="relative">
							{/* Main Profile Photo */}
							<motion.div
								className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm mx-auto lg:mx-0"
								whileHover={{ scale: 1.05, rotate: 5 }}
								transition={{ type: 'spring', stiffness: 300, damping: 20 }}
							>
								<img
									src={profilePhoto}
									alt="Huy Che - Full Stack Developer"
									className="w-full h-full object-cover object-center"
								/>
							</motion.div>
							{/* Decorative Elements */}
							<motion.div
								className="absolute -top-6 -right-6 w-20 h-20 md:w-24 md:h-24 gradient-primary rounded-full opacity-20 blur-sm"
								animate={{
									scale: [1, 1.3, 1],
									opacity: [0.2, 0.5, 0.2],
								}}
								transition={{
									duration: 2.5,
									repeat: Infinity,
									repeatType: 'reverse',
									ease: 'easeInOut',
								}}
							/>
							<motion.div
								className="absolute -bottom-10 -left-10 w-28 h-28 md:w-32 md:h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-15 blur-md"
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.1, 0.3, 0.1],
								}}
								transition={{
									duration: 3.5,
									repeat: Infinity,
									repeatType: 'reverse',
									delay: 1.2,
									ease: 'easeInOut',
								}}
							/>

							{/* Additional floating dots */}
							<motion.div
								className="absolute top-10 -left-6 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60"
								animate={{
									y: [-10, 10, -10],
									opacity: [0.6, 1, 0.6],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							/>
							<motion.div
								className="absolute bottom-20 -right-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-70"
								animate={{
									y: [10, -10, 10],
									opacity: [0.7, 1, 0.7],
								}}
								transition={{
									duration: 1.8,
									repeat: Infinity,
									ease: 'easeInOut',
									delay: 0.5,
								}}
							/>
						</div>
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				initial={{ opacity: 0, y: -20 }}
				animate={{
					opacity: 1,
					y: [0, 10, 0],
				}}
				transition={{
					opacity: { delay: 2, duration: 1 },
					y: {
						duration: 2,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 2,
					},
				}}
			>
				<ArrowDown size={24} className="text-text-secondary" />
			</motion.div>
		</section>
	);
};

export default Hero;
