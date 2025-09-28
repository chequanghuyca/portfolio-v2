import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { ProjectDetail } from '@/hooks/project/useQueryGetProject';

interface DetailedDescriptionProps {
	project: ProjectDetail;
}

const DetailedDescription = ({ project }: DetailedDescriptionProps) => {
	const { t } = useTranslation();

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.4 }}
			className="mb-16"
		>
			<Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50">
				<CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-primary/10">
					<div className="flex items-center gap-3">
						<div className="p-2 bg-primary/10 rounded-lg">
							<Calendar className="h-6 w-6 text-primary" />
						</div>
						<div>
							<CardTitle className="text-2xl lg:text-3xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
								{t('projects.detailedDescription') || 'Detailed Description'}
							</CardTitle>
							<p className="text-sm text-muted-foreground mt-1">
								{t('projects.learnMore') || 'Learn more about this project'}
							</p>
						</div>
					</div>
				</CardHeader>
				<CardContent className="p-8">
					<div className="prose prose-lg max-w-none">
						<p className="text-text-secondary leading-relaxed text-lg mb-6">
							{project.longDescription}
						</p>

						{/* Additional Project Highlights */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
							<div className="space-y-4">
								<h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
									<Users className="h-5 w-5 text-primary" />
									{t('projects.projectImpact') || 'Project Impact'}
								</h4>
								<ul className="space-y-2 text-text-secondary">
									<li className="flex items-start gap-2">
										<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
										{t('projects.impact1') || 'Improved user experience and engagement'}
									</li>
									<li className="flex items-start gap-2">
										<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
										{t('projects.impact2') || 'Enhanced performance and scalability'}
									</li>
									<li className="flex items-start gap-2">
										<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
										{t('projects.impact3') || 'Modern and maintainable codebase'}
									</li>
								</ul>
							</div>

							<div className="space-y-4">
								<h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
									<Code className="h-5 w-5 text-primary" />
									{t('projects.technicalHighlights') || 'Technical Highlights'}
								</h4>
								<ul className="space-y-2 text-text-secondary">
									<li className="flex items-start gap-2">
										<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
										{t('projects.tech1') || 'Modern development practices and patterns'}
									</li>
									<li className="flex items-start gap-2">
										<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
										{t('projects.tech2') || 'Responsive design and accessibility'}
									</li>
									<li className="flex items-start gap-2">
										<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
										{t('projects.tech3') || 'Optimized performance and SEO'}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default DetailedDescription;
