import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, Coffee, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import AnimatedCard from './AnimatedCard';
import { easeInOutCubic } from '@/lib/animations';

const About = () => {
	const highlights = [
		{
			icon: Code,
			title: 'Clean Code',
			description: 'Writing maintainable and scalable code',
		},
		{
			icon: Coffee,
			title: 'Problem Solver',
			description: 'Turning complex challenges into simple solutions',
		},
		{
			icon: Users,
			title: 'Team Player',
			description: 'Collaborative approach to project development',
		},
		{
			icon: Award,
			title: 'Quality Focus',
			description: 'Committed to delivering exceptional results',
		},
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const textVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: easeInOutCubic,
			},
		},
	};

	const lineVariants = {
		hidden: { width: 0 },
		visible: {
			width: '6rem',
			transition: {
				duration: 0.8,
				ease: easeInOutCubic,
				delay: 0.5,
			},
		},
	};

	return (
		<section id="about" className="py-16 sm:py-20 bg-surface">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<motion.div
					className="text-center mb-12 sm:mb-16"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
				>
					<motion.h2
						className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
						variants={textVariants}
					>
						About Me
					</motion.h2>
					<motion.div
						className="h-1 gradient-primary mx-auto mb-8"
						variants={lineVariants}
					/>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
					{/* Left Content */}
					<AnimatedSection direction="left" delay={0.2}>
						<motion.h3
							className="text-xl sm:text-2xl font-semibold mb-6"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							viewport={{ once: true }}
						>
							Passionate Developer with a Vision
						</motion.h3>
						<motion.p
							className="text-base sm:text-lg text-text-secondary mb-6 leading-relaxed"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
						>
							I'm a full-stack developer with over 3 years of experience creating digital
							solutions that make a difference. My journey began with a curiosity for how
							things work, and it has evolved into a passion for building elegant,
							efficient applications.
						</motion.p>
						<motion.p
							className="text-base sm:text-lg text-text-secondary mb-6 leading-relaxed"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.5 }}
							viewport={{ once: true }}
						>
							When I'm not coding, you'll find me exploring new technologies, contributing
							to open-source projects, or sharing knowledge with the developer community.
							I believe in continuous learning and staying ahead of industry trends.
						</motion.p>
						<motion.div
							className="flex flex-col sm:flex-row gap-4"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							viewport={{ once: true }}
						>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button size="lg">Download Resume</Button>
							</motion.div>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button variant="outline" size="lg">
									Let's Connect
								</Button>
							</motion.div>
						</motion.div>
					</AnimatedSection>

					{/* Right Content - Highlights Grid */}
					<motion.div
						className="grid grid-cols-2 gap-6"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '-50px' }}
					>
						{highlights.map((item, index) => {
							const IconComponent = item.icon;
							return (
								<AnimatedCard
									key={index}
									index={index}
									delay={0.3}
									hoverScale={1.08}
									hoverRotate={2}
								>
									<Card className="p-6 text-center h-full">
										<motion.div
											className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4"
											whileHover={{
												rotate: 360,
												scale: 1.1,
											}}
											transition={{ duration: 0.5 }}
										>
											<IconComponent size={24} className="text-white" />
										</motion.div>
										<motion.h4
											className="font-semibold mb-2"
											initial={{ opacity: 0 }}
											whileInView={{ opacity: 1 }}
											transition={{ delay: 0.5 + index * 0.1 }}
											viewport={{ once: true }}
										>
											{item.title}
										</motion.h4>
										<motion.p
											className="text-sm text-text-secondary"
											initial={{ opacity: 0 }}
											whileInView={{ opacity: 1 }}
											transition={{ delay: 0.6 + index * 0.1 }}
											viewport={{ once: true }}
										>
											{item.description}
										</motion.p>
									</Card>
								</AnimatedCard>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
