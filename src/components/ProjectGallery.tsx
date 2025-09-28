import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { ProjectDetail } from '@/hooks/project/useQueryGetProject';

interface ProjectGalleryProps {
	project: ProjectDetail;
	onImageClick: (index: number) => void;
}

const ProjectGallery = ({ project, onImageClick }: ProjectGalleryProps) => {
	const { t } = useTranslation();

	if (!project.gallery || project.gallery.length === 0) {
		return null;
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.5 }}
			className="mb-16"
		>
			<Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50">
				<CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-primary/10">
					<div className="flex items-center gap-3">
						<div className="p-2 bg-primary/10 rounded-lg">
							<Play className="h-6 w-6 text-primary" />
						</div>
						<div>
							<CardTitle className="text-2xl lg:text-3xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
								{t('projects.gallery') || 'Project Gallery'}
							</CardTitle>
							<p className="text-sm text-muted-foreground mt-1">
								{t('projects.galleryDescription') ||
									'Click on any image to view in full size'}
							</p>
						</div>
					</div>
				</CardHeader>
				<CardContent className="p-8">
					{/* Main Gallery Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						{project.gallery.map((image, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
								whileHover={{ scale: 1.02 }}
								className="group cursor-pointer"
								onClick={() => onImageClick(index)}
							>
								<div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
									<div className="aspect-[4/3] overflow-hidden">
										<img
											src={image}
											alt={`${project.title} screenshot ${index + 1}`}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
										/>
									</div>

									{/* Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

									{/* Zoom Icon */}
									<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
											<ExternalLink className="h-8 w-8 text-white" />
										</div>
									</div>

									{/* Image Label */}
									<div className="absolute bottom-0 left-0 right-0 p-4">
										<div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
											<p className="text-sm font-medium text-gray-900 text-center">
												{t('projects.screenshot') || 'Screenshot'} {index + 1}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* Additional Screenshots */}
					<div className="mt-12">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1" />
							<h4 className="text-lg font-semibold text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent px-4">
								{t('projects.moreScreenshots') || 'More Screenshots'}
							</h4>
							<div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1" />
						</div>

						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
							{Array.from({ length: 6 }).map((_, index) => (
								<motion.div
									key={`mock-${index}`}
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
									whileHover={{ scale: 1.05 }}
									className="group cursor-pointer"
									onClick={() => {
										const actualIndex = index % project.gallery!.length;
										onImageClick(actualIndex);
									}}
								>
									<div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white">
										<div className="aspect-square overflow-hidden">
											<img
												src={project.gallery![index % project.gallery!.length]}
												alt={`${project.title} additional screenshot ${index + 1}`}
												className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
											/>
										</div>
										<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
										<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											<div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
												<ExternalLink className="h-4 w-4 text-gray-800" />
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default ProjectGallery;
