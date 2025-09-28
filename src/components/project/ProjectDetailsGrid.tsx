import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { ProjectDetail } from '@/hooks/project/useQueryGetProject';

interface ProjectDetailsGridProps {
	project: ProjectDetail;
}

const ProjectDetailsGrid = ({ project }: ProjectDetailsGridProps) => {
	const { t } = useTranslation();

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.3 }}
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
		>
			{/* Project Info */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Calendar className="h-5 w-5" />
						{t('projects.projectInfo') || 'Project Info'}
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex items-center gap-3">
						<Users className="h-4 w-4 text-primary" />
						<div>
							<p className="text-sm font-medium">{t('projects.role') || 'Role'}</p>
							<p className="text-text-secondary">{project.role}</p>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<Clock className="h-4 w-4 text-primary" />
						<div>
							<p className="text-sm font-medium">
								{t('projects.duration') || 'Duration'}
							</p>
							<p className="text-text-secondary">{project.duration}</p>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<Users className="h-4 w-4 text-primary" />
						<div>
							<p className="text-sm font-medium">
								{t('projects.teamSize') || 'Team Size'}
							</p>
							<p className="text-text-secondary">{project.teamSize}</p>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Key Features */}
			<Card>
				<CardHeader>
					<CardTitle>{t('projects.keyFeatures') || 'Key Features'}</CardTitle>
				</CardHeader>
				<CardContent>
					<ul className="space-y-3">
						{project.features.map((feature, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
								className="flex items-start gap-2"
							>
								<ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
								<span className="text-sm text-text-secondary">{feature}</span>
							</motion.li>
						))}
					</ul>
				</CardContent>
			</Card>

			{/* Challenges */}
			<Card>
				<CardHeader>
					<CardTitle>{t('projects.challenges') || 'Challenges'}</CardTitle>
				</CardHeader>
				<CardContent>
					<ul className="space-y-3">
						{project.challenges.map((challenge, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
								className="flex items-start gap-2"
							>
								<ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
								<span className="text-sm text-text-secondary">{challenge}</span>
							</motion.li>
						))}
					</ul>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default ProjectDetailsGrid;
