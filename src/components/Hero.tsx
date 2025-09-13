import { Button } from '@/components/ui/button';
import { Mail, ArrowDown, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/profile-photo.png';
import { easeInOutCubic, fadeInUp } from '@/lib/animations';
import classNames from 'classnames';

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
			{/* Enhanced Overlay with better contrast */}
			<div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
			<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-6xl">
				<motion.div
					className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[85vh] py-6 lg:py-0"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{/* Left Content - Enhanced Typography */}
					<motion.div
						className="text-center lg:text-left order-2 lg:order-1"
						variants={containerVariants}
					>
						<div className="mb-8">
							<motion.h3
								className="text-xl sm:text-2xl lg:text-4xl font-poppins font-semibold text-foreground/80 mb-6 tracking-tight"
								variants={textVariants}
							>
								Hello, I'm
							</motion.h3>

							{/* Enhanced Name Display with Stroke Animation */}
							<motion.div className="mb-6" variants={textVariants}>
								<motion.div
									className="w-full max-w-lg mx-auto lg:mx-0 h-20 sm:h-24 lg:h-28 xl:h-32"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.8, delay: 0.3 }}
								>
									<svg
										className="hero-name-svg"
										viewBox="0 0 400 100"
										xmlns="http://www.w3.org/2000/svg"
									>
										<text x="50%" y="50%" dy=".35em" textAnchor="middle">
											HUY CHE
										</text>
									</svg>
								</motion.div>
							</motion.div>

							<motion.h2
								className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-poppins font-bold text-gradient mb-6 tracking-tight"
								variants={textVariants}
							>
								Software Engineer
							</motion.h2>
						</div>

						<motion.p
							className={classNames(
								'text-base sm:text-lg lg:text-xl text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-inter font-normal px-2 sm:px-0 text-balance',
							)}
							variants={textVariants}
						>
							I'm a professional developer passionate about crafting exceptional digital
							experiences through clean code, modern technologies, and user-focused
							design.
						</motion.p>

						<motion.div
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 px-2 sm:px-0"
							variants={textVariants}
						>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button
									size="lg"
									className="gradient-primary text-white px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
									asChild
								>
									<a href="#projects">View My Work</a>
								</Button>
							</motion.div>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button
									variant="outline"
									size="lg"
									className="px-8 py-4 text-lg font-bold border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 shadow-lg hover:shadow-xl"
									asChild
								>
									<a href="#contact">Get In Touch</a>
								</Button>
							</motion.div>
						</motion.div>

						{/* Enhanced Social Links */}
						<motion.div
							className="flex gap-6 justify-center lg:justify-start"
							variants={textVariants}
						>
							<motion.div
								whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
								whileTap={{ scale: 0.9 }}
							>
								<Button
									variant="ghost"
									size="icon"
									className="w-14 h-14 rounded-full bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl border border-foreground/10"
									asChild
								>
									<a
										href="https://github.com/chequanghuyca"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github size={24} />
									</a>
								</Button>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.2, rotate: -5, y: -5 }}
								whileTap={{ scale: 0.9 }}
							>
								<Button
									variant="ghost"
									size="icon"
									className="w-14 h-14 rounded-full bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl border border-foreground/10"
									asChild
								>
									<a
										href="https://www.linkedin.com/in/quang-huy-che-11493311b/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Linkedin size={24} />
									</a>
								</Button>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
								whileTap={{ scale: 0.9 }}
							>
								<Button
									variant="ghost"
									size="icon"
									className="w-14 h-14 rounded-full bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl border border-foreground/10"
									asChild
								>
									<a href="mailto:chequanghuybtt@gmail.com">
										<Mail size={24} />
									</a>
								</Button>
							</motion.div>
						</motion.div>
					</motion.div>

					{/* Right Content - Optimized Profile Photo */}
					<motion.div
						className="flex justify-center lg:justify-end order-1 lg:order-2"
						variants={imageVariants}
						animate="float"
						{...floatingVariants}
					>
						<div className="relative">
							{/* Background Glow Effect */}
							<motion.div
								className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full gradient-primary opacity-10 blur-xl"
								animate={{
									scale: [1, 1.05, 1],
									rotate: [0, 360],
								}}
								transition={{
									duration: 20,
									repeat: Infinity,
									ease: 'linear',
								}}
							/>

							{/* Main Profile Photo */}
							<motion.div
								className="relative w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg border-4 border-purple-300 backdrop-blur-sm mx-auto"
								whileHover={{ scale: 1.02, rotate: 1 }}
								transition={{ type: 'spring', stiffness: 300, damping: 20 }}
								style={{
									boxShadow:
										'0 15px 30px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
								}}
							>
								<img
									src={profilePhoto}
									alt="Huy Che - Full Stack Developer"
									className="w-full h-full object-cover object-center ml-4 mt-2"
									style={{
										filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
									}}
								/>
								{/* Subtle inner border */}
								<div className="absolute inset-0 rounded-full border border-white/15" />
							</motion.div>
							{/* Minimal Decorative Elements */}
							<motion.div
								className="absolute -top-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 gradient-primary rounded-full opacity-15 blur-sm"
								animate={{
									scale: [1, 1.1, 1],
									opacity: [0.15, 0.25, 0.15],
									rotate: [0, 360],
								}}
								transition={{
									duration: 12,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							/>
							<motion.div
								className="absolute -bottom-4 -left-4 w-14 h-14 sm:w-18 sm:h-18 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-10 blur-lg"
								animate={{
									scale: [1, 1.15, 1],
									opacity: [0.1, 0.2, 0.1],
									rotate: [360, 0],
								}}
								transition={{
									duration: 15,
									repeat: Infinity,
									ease: 'easeInOut',
									delay: 1,
								}}
							/>

							{/* Refined Floating Particles */}
							<motion.div
								className="absolute top-12 -left-4 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60"
								animate={{
									y: [-10, 10, -10],
									x: [-3, 3, -3],
									opacity: [0.6, 0.8, 0.6],
									scale: [1, 1.2, 1],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							/>
							<motion.div
								className="absolute bottom-16 -right-4 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-70"
								animate={{
									y: [8, -8, 8],
									x: [3, -3, 3],
									opacity: [0.7, 0.9, 0.7],
									scale: [1, 1.3, 1],
								}}
								transition={{
									duration: 2.5,
									repeat: Infinity,
									ease: 'easeInOut',
									delay: 1,
								}}
							/>
						</div>
					</motion.div>
				</motion.div>
			</div>

			{/* Enhanced Scroll Indicator - Hidden on Mobile */}
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center hidden sm:flex"
				initial={{ opacity: 0, y: -20 }}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					opacity: { delay: 3, duration: 1 },
					y: { delay: 3, duration: 0.8 },
				}}
			>
				<motion.div
					className="text-sm text-foreground/60 mb-3 font-inter font-medium tracking-wider uppercase"
					animate={{ opacity: [0.6, 1, 0.6] }}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				>
					Scroll Down
				</motion.div>
				<motion.div
					className="w-14 h-14 rounded-full border-2 border-foreground/20 flex items-center justify-center bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl cursor-pointer"
					animate={{
						y: [0, 10, 0],
						scale: [1, 1.05, 1],
						borderColor: ['rgba(0,0,0,0.2)', 'rgba(99,102,241,0.5)', 'rgba(0,0,0,0.2)'],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 3.5,
					}}
					whileHover={{
						scale: 1.1,
						borderColor: 'hsl(var(--primary))',
						backgroundColor: 'hsl(var(--primary)/0.1)',
					}}
					onClick={() => {
						const aboutSection = document.getElementById('about');
						if (aboutSection) {
							aboutSection.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							});
						}
					}}
				>
					<ArrowDown size={22} className="text-foreground/70" />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
