import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Github, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { ProjectDetail } from '@/hooks/project/useQueryGetProject';

interface ProjectHeroProps {
	project: ProjectDetail;
	onImageClick?: (index: number) => void;
}

const ProjectHero = ({ project, onImageClick }: ProjectHeroProps) => {
	const { t } = useTranslation();

	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
			className="mb-20 space-y-10"
		>
			{/* Top Header Information & Actions */}
			<div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:items-end border-b border-white/10 pb-10">
				<div className="space-y-6">
					<div className="flex flex-wrap items-center gap-3">
						<span className="section-kicker">
							<span>01</span>
							{project.featured ? t('projects.featured') : t('projects.productionCaseStudy')}
						</span>
						<span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 font-mono-code text-[10px] uppercase tracking-[0.16em] text-white/50">
							{project.duration}
						</span>
					</div>

					<div>
						<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.055em] text-white">
							{project.title}
						</h1>
						<p className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl">
							{project.description}
						</p>
					</div>

					{/* Tech stack pills */}
					<div className="flex flex-wrap gap-2 pt-2">
						{project.technologies.map((tech) => (
							<span key={tech} className="project-tech-pill">
								{tech.replace(/^#/, '')}
							</span>
						))}
					</div>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-wrap items-center gap-3 lg:justify-end">
					{project.liveUrl && project.liveUrl !== '#' && (
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="button-primary group !py-3 !px-6"
						>
							<span>{t('projects.liveDemo')}</span>
							<ArrowUpRight
								size={16}
								className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
					)}

					{project.qaUrl && (
						<a
							href={project.qaUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="button-ghost group flex items-center gap-2 border-primary/40 text-primary hover:border-primary hover:bg-primary/10 !py-3 !px-5"
						>
							<FileText size={16} />
							<span>{t('projects.systemQa')}</span>
							<ArrowUpRight
								size={14}
								className="opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
					)}

					{project.githubUrl && project.githubUrl !== '#' && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${project.title} source code`}
							className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-primary hover:text-primary"
						>
							<Github size={18} />
						</a>
					)}

					{project.videoUrl && (
						<a
							href={project.videoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="button-ghost group !py-3 !px-5"
						>
							<Play size={15} />
							<span>{t('projects.watchDemo') || 'Watch Demo'}</span>
						</a>
					)}
				</div>
			</div>

			{/* Full-Width Panoramic Master Showcase Banner */}
			<motion.div
				initial={{ opacity: 0, scale: 0.98 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
				onClick={() => onImageClick?.(0)}
				className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#120704] shadow-[0_30px_90px_rgba(0,0,0,0.6)] group cursor-pointer"
			>
				<div className="relative aspect-[16/9.6] w-full overflow-hidden">
					<img
						src={project.image}
						alt={`${project.title} master showcase`}
						loading="eager"
						decoding="async"
						className="h-full w-full object-contain sm:object-cover transition-transform duration-700 group-hover:scale-[1.02]"
					/>
					<div className="project-card-scanline" />

					{/* Top Left Badge */}
					<div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3.5 py-1.5 font-mono-code text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
						<span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
						{t('projects.productionGrade')}
					</div>

					{/* Bottom Right Click to Expand Hint */}
					<div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 font-mono-code text-xs uppercase tracking-[0.14em] text-white/90 backdrop-blur-md transition-all group-hover:border-primary group-hover:text-primary group-hover:bg-black/80">
						<span>{t('projects.expand')}</span>
						<ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ProjectHero;
