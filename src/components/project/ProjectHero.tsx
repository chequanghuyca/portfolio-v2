import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { ProjectDetail } from '@/hooks/project/useQueryGetProject';

interface ProjectHeroProps {
	project: ProjectDetail;
}

const ProjectHero = ({ project }: ProjectHeroProps) => {
	const { t } = useTranslation();

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.1 }}
			className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16"
		>
			<div className="space-y-6 order-2 lg:order-1">
				<div className="space-y-4">
					{project.featured && (
						<Badge className="gradient-primary text-white">Featured Project</Badge>
					)}
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
						{project.title}
					</h1>
					<p className="text-base sm:text-lg text-text-secondary leading-relaxed">
						{project.description}
					</p>
				</div>

				<div className="flex flex-wrap gap-2">
					{project.technologies.map((tech, index) => (
						<motion.div
							key={tech}
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
						>
							<Badge
								variant="outline"
								className="hover:bg-primary hover:text-primary-foreground transition-colors text-xs sm:text-sm"
							>
								{tech}
							</Badge>
						</motion.div>
					))}
				</div>

				<div className="flex flex-col sm:flex-row gap-3 pt-4">
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="flex-1"
					>
						<Button
							size="lg"
							className="w-full"
							onClick={() => window.open(project.liveUrl, '_blank')}
						>
							<ExternalLink size={18} className="mr-2" />
							{t('projects.liveDemo') || 'Live Demo'}
						</Button>
					</motion.div>
					{project.githubUrl && project.githubUrl !== '#' && (
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								variant="outline"
								size="lg"
								onClick={() => window.open(project.githubUrl, '_blank')}
							>
								<Github size={18} className="mr-2" />
								<span className="hidden sm:inline">GitHub</span>
							</Button>
						</motion.div>
					)}
					{project.videoUrl && (
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								variant="outline"
								size="lg"
								onClick={() => window.open(project.videoUrl, '_blank')}
							>
								<Play size={18} className="mr-2" />
								<span className="hidden sm:inline">
									{t('projects.watchDemo') || 'Watch Demo'}
								</span>
							</Button>
						</motion.div>
					)}
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="relative order-1 lg:order-2"
			>
				<img
					src={project.image}
					alt={`${project.title} project screenshot`}
					className="w-full h-64 sm:h-80 lg:h-96 rounded-xl shadow-2xl object-cover"
				/>
			</motion.div>
		</motion.div>
	);
};

export default ProjectHero;
