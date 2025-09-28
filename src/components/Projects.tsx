import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { Route as ProjectDetailRoute } from '@/routes/projects.$projectId';
import AnimatedCard from './AnimatedCard';
import { easeInOutCubic } from '@/lib/animations';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Project, useQueryGetProjects } from '@/hooks/project';

const Projects = () => {
	const { t } = useTranslation();

	const [size, setSize] = useState<number | 'all'>(3);

	const { data: projects, isLoading } = useQueryGetProjects({ size });

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
						className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-sans"
						variants={headingVariants}
					>
						{t('projects.title')}
					</motion.h2>
					<motion.div
						className="h-1 gradient-primary mx-auto mb-8"
						variants={lineVariants}
					/>
					<motion.p
						className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto"
						variants={headingVariants}
					>
						{t('projects.subtitle')}
					</motion.p>
				</motion.div>

				<motion.div
					className="flex flex-wrap gap-6 sm:gap-8 justify-center"
					variants={projectsGridVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}
				>
					{isLoading ? (
						<section id="projects" className="py-16 sm:py-20 bg-surface">
							<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
								<div className="text-center">
									<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
									<p className="mt-4 text-text-secondary">{t('common.loading')}</p>
								</div>
							</div>
						</section>
					) : (
						projects?.map((project: Project, index: number) => (
							<AnimatedCard
								key={project.id}
								index={index}
								delay={0.1}
								hoverScale={1.03}
								hoverRotate={1}
								className="flex-1 basis-full sm:basis-[calc(50%-1rem)] xl:basis-[calc(33.333%-2rem)] max-w-[400px]"
							>
								<Card className="overflow-hidden h-full flex flex-col shadow-md">
									<div className="relative overflow-hidden">
										<motion.img
											src={project.image}
											alt={`${project.title} - ${project.description} - Built with ${(project.technologies || []).join(', ')} by Huy Che`}
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
											{(project.technologies || []).map((tech, techIndex) => (
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
													<Badge
														variant="outline"
														className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer flex items-center gap-2 py-2 pr-3"
													>
														{tech}
													</Badge>
												</motion.div>
											))}
										</motion.div>

										<motion.div
											className="flex gap-3 items-center"
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
												<Button
													size="sm"
													className="w-full"
													onClick={() => window.open(project.liveUrl, '_blank')}
												>
													<ExternalLink size={16} className="mr-2" />
													{t('projects.liveDemo')}
												</Button>
											</motion.div>

											<motion.div
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
												viewport={{ once: true }}
											>
												<Button variant="outline" size="sm" asChild>
													<Link
														to="/projects/$projectId"
														params={{ projectId: String(project.id) }}
													>
														View details →
													</Link>
												</Button>
											</motion.div>
											{project.githubUrl && project.githubUrl !== '#' && (
												<motion.div
													whileHover={{ scale: 1.05, rotate: 5 }}
													whileTap={{ scale: 0.95 }}
												>
													<Button
														variant="outline"
														size="sm"
														onClick={() => window.open(project.githubUrl, '_blank')}
													>
														<Github size={16} />
													</Button>
												</motion.div>
											)}
										</motion.div>
									</div>
								</Card>
							</AnimatedCard>
						))
					)}
				</motion.div>

				{size !== 'all' && (
					<motion.div
						className="text-center mt-12"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.6 }}
						viewport={{ once: true }}
					>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button variant="outline" size="lg" onClick={() => setSize('all')}>
								{t('projects.viewAllProjects')}
							</Button>
						</motion.div>
					</motion.div>
				)}
			</div>
		</section>
	);
};

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

export default Projects;
