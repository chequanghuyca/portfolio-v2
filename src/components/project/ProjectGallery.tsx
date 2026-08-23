import { ExternalLink, Eye, Image as ImageIcon } from 'lucide-react';
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
			transition={{ duration: 0.6, delay: 0.4 }}
			className="mb-16 rounded-3xl border border-white/10 bg-[#24130e]/80 backdrop-blur-xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(30,12,6,0.3)]"
		>
			{/* Section Header */}
			<div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
				<div>
					<span className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-primary">
						03 / {t('projects.gallery')}
					</span>
					<h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.04em] text-white mt-1">
						{t('projects.gallery')}
					</h2>
					<p className="font-mono-code text-xs uppercase tracking-[0.14em] text-white/45 mt-2">
						{t('projects.galleryDescription')}
					</p>
				</div>
				<div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-primary">
					<ImageIcon className="h-5 w-5" />
				</div>
			</div>

			{/* Main Gallery Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
				{project.gallery.map((image, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, scale: 0.96 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
						whileHover={{ y: -4 }}
						className="group cursor-pointer"
						onClick={() => onImageClick(index)}
					>
						<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#160d0a] shadow-xl transition-all duration-500 hover:border-primary/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
							<div className="aspect-[16/10] overflow-hidden relative">
								<img
									src={image}
									alt={`${project.title} preview screenshot ${index + 1}`}
									loading="lazy"
									decoding="async"
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
								/>
								<div className="project-card-scanline" />

								{/* Top Index Badge */}
								<div className="absolute left-3.5 top-3.5 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1 font-mono-code text-[10px] uppercase tracking-[0.15em] text-white/80 backdrop-blur-md">
									<span className="text-primary font-semibold">#{String(index + 1).padStart(2, '0')}</span>
									<span>{t('projects.preview')}</span>
								</div>

								{/* Hover Overlay with Zoom Icon */}
								<div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
									<div className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-primary/20 text-primary backdrop-blur-md shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-transform duration-300 group-hover:scale-110">
										<Eye className="h-5 w-5" />
									</div>
								</div>

								{/* Bottom Tag */}
								<div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<span className="font-mono-code text-xs text-white/90 font-medium">
										{t('projects.screenshot')} {index + 1}
									</span>
									<span className="flex items-center gap-1 font-mono-code text-[10px] uppercase tracking-[0.14em] text-primary">
										<span>{t('projects.expand')}</span>
										<ExternalLink size={11} />
									</span>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default ProjectGallery;
