import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import AnimatedCard from './AnimatedCard';
import { easeInOutCubic } from '@/lib/animations';

const Skills = () => {
	const skillCategories = [
		{
			title: 'Frontend',
			skills: [
				'React',
				'TypeScript',
				'Next.js',
				'Tailwind CSS',
				'Vue.js',
				'HTML5',
				'CSS3',
				'JavaScript ES6+',
			],
			gradient: 'from-blue-500 to-purple-600',
		},
		{
			title: 'Backend',
			skills: [
				'Node.js',
				'Express.js',
				'Python',
				'Django',
				'PostgreSQL',
				'MongoDB',
				'Redis',
				'GraphQL',
			],
			gradient: 'from-green-500 to-blue-500',
		},
		{
			title: 'DevOps & Tools',
			skills: [
				'Docker',
				'AWS',
				'Git',
				'GitHub Actions',
				'Webpack',
				'Vite',
				'Jest',
				'Cypress',
			],
			gradient: 'from-orange-500 to-red-500',
		},
		{
			title: 'Design & Others',
			skills: [
				'Figma',
				'Adobe XD',
				'UI/UX Design',
				'Responsive Design',
				'REST APIs',
				'Agile',
				'Scrum',
				'Team Leadership',
			],
			gradient: 'from-purple-500 to-pink-500',
		},
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const headingVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: easeInOutCubic,
			},
		},
	};

	const statsVariants = {
		hidden: { opacity: 0, scale: 0.5 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: easeInOutCubic,
			},
		},
	};

	return (
		<section id="skills" className="py-16 sm:py-20">
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
						variants={headingVariants}
					>
						Skills & Technologies
					</motion.h2>
					<motion.div
						className="w-24 h-1 gradient-primary mx-auto mb-8"
						initial={{ width: 0 }}
						whileInView={{ width: '6rem' }}
						transition={{ duration: 1, delay: 0.5 }}
						viewport={{ once: true }}
					/>
					<motion.p
						className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto"
						variants={headingVariants}
					>
						Here are the technologies and tools I use to bring ideas to life
					</motion.p>
				</motion.div>

				<motion.div
					className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}
				>
					{skillCategories.map((category, index) => (
						<AnimatedCard
							key={index}
							index={index}
							delay={0.1}
							hoverScale={1.05}
							hoverRotate={2}
						>
							<Card className="p-6 h-full">
								<motion.div
									className={`w-full h-2 rounded-full bg-gradient-to-r ${category.gradient} mb-6`}
									initial={{ width: 0 }}
									whileInView={{ width: '100%' }}
									transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
									viewport={{ once: true }}
								/>
								<motion.h3
									className="text-xl font-semibold mb-4"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
									viewport={{ once: true }}
								>
									{category.title}
								</motion.h3>
								<motion.div
									className="flex flex-wrap gap-2"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
									viewport={{ once: true }}
								>
									{category.skills.map((skill, skillIndex) => (
										<motion.div
											key={skillIndex}
											initial={{ opacity: 0, scale: 0, rotate: -180 }}
											whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
											transition={{
												delay: 0.6 + index * 0.1 + skillIndex * 0.05,
												duration: 0.4,
												type: 'spring',
												stiffness: 200,
											}}
											viewport={{ once: true }}
											whileHover={{ scale: 1.1, rotate: 5 }}
										>
											<Badge
												variant="secondary"
												className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
											>
												{skill}
											</Badge>
										</motion.div>
									))}
								</motion.div>
							</Card>
						</AnimatedCard>
					))}
				</motion.div>

				{/* Stats Section */}
				<motion.div
					className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}
				>
					{[
						{ number: '50+', label: 'Projects Completed' },
						{ number: '3+', label: 'Years Experience' },
						{ number: '20+', label: 'Happy Clients' },
						{ number: '100%', label: 'Satisfaction Rate' },
					].map((stat, index) => (
						<motion.div
							key={index}
							className="text-center"
							variants={statsVariants}
							whileHover={{ scale: 1.1, y: -10 }}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							<motion.div
								className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-2"
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{
									delay: 0.5 + index * 0.1,
									duration: 0.5,
									type: 'spring',
									stiffness: 200,
								}}
								viewport={{ once: true }}
							>
								{stat.number}
							</motion.div>
							<motion.p
								className="text-sm sm:text-base text-text-secondary"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
								viewport={{ once: true }}
							>
								{stat.label}
							</motion.p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
