import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { Route as ProjectDetailRoute } from '@/routes/projects.$projectId';
import { projects } from '@/data/projects';
import AnimatedCard from './AnimatedCard';
import { easeInOutCubic } from '@/lib/animations';

const Projects = () => {
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

	const lineVariants = {
		hidden: { width: 0, opacity: 0 },
		visible: {
			width: '6rem',
			opacity: 1,
			transition: {
				duration: 1,
				ease: easeInOutCubic,
				delay: 0.5,
			},
		},
	};

	const projectsGridVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.3,
			},
		},
	};

	return (
		<section id="projects" className="py-16 sm:py-20 bg-surface">
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
						Featured Projects
					</motion.h2>
					<motion.div
						className="h-1 gradient-primary mx-auto mb-8"
						variants={lineVariants}
					/>
					<motion.p
						className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto"
						variants={headingVariants}
					>
						Here are some of my recent projects that showcase my skills and expertise
					</motion.p>
				</motion.div>

				<motion.div
					className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
					variants={projectsGridVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}
				>
					{projects.map((project, index) => (
						<AnimatedCard
							key={project.id}
							index={index}
							delay={0.1}
							hoverScale={1.03}
							hoverRotate={1}
						>
							<Card className="overflow-hidden h-full flex flex-col">
								<div className="relative overflow-hidden">
									<motion.img
										src={project.image}
										alt={project.title}
										className="w-full h-48 object-cover"
										whileHover={{ scale: 1.1 }}
										transition={{ duration: 0.3 }}
									/>
									{project.featured && (
										<motion.div
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
											viewport={{ once: true }}
										>
											<Badge className="absolute top-4 left-4 gradient-primary text-white">
												Featured
											</Badge>
										</motion.div>
									)}
								</div>

								<div className="p-6 flex-1 flex flex-col">
									<motion.h3
										className="text-xl font-semibold mb-3"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
										viewport={{ once: true }}
									>
										{project.title}
									</motion.h3>
									<motion.p
										className="text-text-secondary mb-4 line-clamp-3 flex-1"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
										viewport={{ once: true }}
									>
										{project.description}
									</motion.p>

									<motion.div
										className="flex flex-wrap gap-2 mb-6"
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
										viewport={{ once: true }}
									>
										{project.technologies.map((tech, techIndex) => (
											<motion.div
												key={techIndex}
												initial={{ opacity: 0, scale: 0 }}
												whileInView={{ opacity: 1, scale: 1 }}
												transition={{
													delay: 0.6 + index * 0.1 + techIndex * 0.05,
													duration: 0.3,
												}}
												viewport={{ once: true }}
											>
												<Badge variant="outline">{tech}</Badge>
											</motion.div>
										))}
									</motion.div>

									<motion.div
										className="flex gap-3"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
										viewport={{ once: true }}
									>
										<motion.div
											className="flex-1"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<Button size="sm" className="w-full">
												<ExternalLink size={16} className="mr-2" />
												Live Demo
											</Button>
										</motion.div>
										<motion.div
											whileHover={{ scale: 1.05, rotate: 5 }}
											whileTap={{ scale: 0.95 }}
										>
											<Button variant="outline" size="sm">
												<Github size={16} />
											</Button>
										</motion.div>
									</motion.div>

									<motion.div
										className="mt-4"
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										viewport={{ once: true }}
									>
										<Link
											to={ProjectDetailRoute.to}
											params={{ projectId: String(project.id) }}
											className="text-sm text-primary"
										>
											View details →
										</Link>
									</motion.div>
								</div>
							</Card>
						</AnimatedCard>
					))}
				</motion.div>

				<motion.div
					className="text-center mt-12"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8, duration: 0.6 }}
					viewport={{ once: true }}
				>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button variant="outline" size="lg">
							View All Projects
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
