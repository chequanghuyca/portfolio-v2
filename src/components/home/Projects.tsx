import { Project, useQueryGetProjects } from '@/hooks/project';
import { Link } from '@tanstack/react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, FileText, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
	project: Project;
	index: number;
}

const showcaseProjectIds = ['1', '2', '3', '4', '5', '10', '11'];

const ProjectCard = ({ project, index }: ProjectCardProps) => {
	const { t, i18n } = useTranslation();
	const isVietnamese = (i18n.resolvedLanguage || i18n.language).startsWith('vi');

	return (
		<article className="project-card-stage">
			<div
				style={{ top: `calc(4.5rem + ${index * 12}px)` }}
				className="project-card group"
			>
				{/* 1. Header Bar with Metadata & Quick Action Buttons */}
				<div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-5 bg-[#170a06]/90">
					<div className="flex flex-wrap items-center gap-3">
						<span className="flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3 py-1 font-mono-code text-[11px] uppercase tracking-[0.16em] text-primary">
							<span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
							Case Study / {String(index + 1).padStart(2, '0')}
						</span>
						<span className="font-mono-code text-[11px] uppercase tracking-[0.15em] text-white/40">
							{project.featured ? '• Featured Case Study' : '• Production Grade'}
						</span>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
						<Link
							to="/projects/$projectId"
							params={{ projectId: project.id }}
							search={isVietnamese ? { lang: 'vi' } : {}}
							className="button-ghost group/btn !py-2 !px-4 text-xs font-semibold"
						>
							<span>{t('projects.viewDetails')}</span>
							<ArrowRight
								size={14}
								className="transition-transform group-hover/btn:translate-x-0.5"
							/>
						</Link>

						{project.liveUrl && project.liveUrl !== '#' && (
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="button-primary group/btn !py-2 !px-4 text-xs font-semibold"
							>
								<span>{project.liveLabel || t('projects.liveDemo')}</span>
								<ArrowUpRight
									size={14}
									className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
								/>
							</a>
						)}

						{project.secondaryLink && (
							<a
								href={project.secondaryLink.url}
								target="_blank"
								rel="noopener noreferrer"
								className="button-ghost !py-2 !px-4 text-xs font-semibold"
							>
								<span>{project.secondaryLink.label}</span>
								<ArrowUpRight size={14} />
							</a>
						)}

						{project.qaUrl && (
							<a
								href={project.qaUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="button-ghost group/btn !py-2 !px-3.5 text-xs font-semibold border border-primary/35 text-primary hover:border-primary hover:bg-primary/10"
								title={t('projects.systemQa')}
							>
								<FileText size={14} />
								<span className="hidden sm:inline">{t('projects.systemQa')}</span>
								<ArrowUpRight
									size={13}
									className="opacity-70 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
								/>
							</a>
						)}

						{project.githubUrl && project.githubUrl !== '#' && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${project.title} source code`}
								className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-primary hover:text-primary"
							>
								<Github size={15} />
							</a>
						)}
					</div>
				</div>

				{/* 2. Full-Width Panoramic Master Showcase Banner (100% Uncropped) */}
				<Link
					to="/projects/$projectId"
					params={{ projectId: project.id }}
					search={isVietnamese ? { lang: 'vi' } : {}}
					className="project-card-media block relative w-full aspect-[16/9.6] overflow-hidden bg-[#120704] cursor-pointer"
				>
					<img
						src={project.image}
						alt={`${project.title} interface`}
						loading="lazy"
						decoding="async"
						className="h-full w-full object-contain sm:object-cover transition-transform duration-700 group-hover:scale-[1.02]"
					/>
					<div className="project-card-scanline" />

					{/* Subtle overlay gradient on bottom */}
					<div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#120704]/95 via-[#120704]/40 to-transparent p-5 sm:p-7 lg:p-8">
						<div>
							<h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl drop-shadow-md">
								{project.title}
							</h3>
						</div>
						<div className="hidden sm:flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 font-mono-code text-xs uppercase tracking-[0.14em] text-white/90 backdrop-blur-md transition-all group-hover:border-primary group-hover:text-primary group-hover:bg-black/80">
							<span>{t('projects.viewDetails')}</span>
							<ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
						</div>
					</div>
				</Link>

				{/* 3. Card Footer with Description & Complete Tech Stack */}
				<div className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[1.3fr_1fr] lg:gap-10 lg:px-8 lg:py-6 border-t border-white/10 bg-[#1c0d08]/75">
					<div>
						<h4 className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-white/40 mb-2">
							Overview &amp; Engineering Focus
						</h4>
						<p className="text-sm sm:text-base leading-relaxed text-white/70">
							{project.description}
						</p>
					</div>

					<div>
						<h4 className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-white/40 mb-2">
							Tech Stack
						</h4>
						<div className="flex flex-wrap gap-1.5 sm:gap-2">
							{project.technologies.map((technology) => (
								<span key={technology} className="project-tech-pill">
									{technology.replace(/^#/, '')}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

const Projects = () => {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();
	const { data: projects, isLoading } = useQueryGetProjects();
	const showcaseProjects = projects?.filter(({ id }) => showcaseProjectIds.includes(id));

	return (
		<section
			id="projects"
			className="relative overflow-clip rounded-t-[2rem] bg-primary text-primary-foreground sm:rounded-t-[3rem]"
		>
			<div className="project-grid absolute inset-0 opacity-25" />
			<div className="section-container relative z-10 py-24 sm:py-32 lg:py-40">
				<div className="mb-16 grid gap-10 lg:grid-cols-[0.8fr_1.7fr] lg:gap-20">
					<motion.div
						initial={reduceMotion ? false : { opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-15%' }}
						transition={{ duration: 0.7 }}
						className="section-kicker section-kicker-on-gold"
					>
						<span>03</span>
						{t('projects.title')}
					</motion.div>
					<motion.div
						initial={reduceMotion ? false : { opacity: 0, y: 36 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-15%' }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					>
						<h2 className="display-heading text-black">{t('projects.statement')}</h2>
						<p className="mt-7 max-w-2xl text-base leading-relaxed text-black/55 sm:text-lg">
							{t('projects.subtitle')}
						</p>
					</motion.div>
				</div>

				{isLoading ? (
					<div className="grid min-h-[50vh] place-items-center">
						<div className="font-mono-code text-xs uppercase tracking-[0.18em] text-black/60">
							{t('common.loading')}
						</div>
					</div>
				) : (
					<div>
						{showcaseProjects?.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Projects;
