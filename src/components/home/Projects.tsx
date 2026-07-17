import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Project, useQueryGetProjects } from '@/hooks/project';

interface ProjectCardProps {
	project: Project;
	index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
	const { t } = useTranslation();

	return (
		<article className="project-card-stage">
			<div
				style={{ top: `calc(5.5rem + ${index * 10}px)` }}
				className="project-card group"
			>
				<div className="project-card-media">
					<img
						src={project.image}
						alt={`${project.title} interface`}
						loading={index > 0 ? 'lazy' : 'eager'}
						className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
					/>
					<div className="project-card-scanline" />
					<div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 font-mono-code text-[9px] uppercase tracking-[0.15em] text-white/70 backdrop-blur-md">
						<span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
						Production
					</div>
				</div>

				<div className="flex flex-col p-6 sm:p-8 lg:p-10">
					<div className="mb-10 flex items-start justify-between">
						<p className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-white/35">
							Case study / {String(index + 1).padStart(2, '0')}
						</p>
						<span className="font-display text-5xl font-semibold leading-none tracking-[-0.08em] text-white/10">
							{String(index + 1).padStart(2, '0')}
						</span>
					</div>

					<div className="flex-1">
						<h3 className="max-w-xl font-display text-3xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-4xl lg:text-5xl">
							{project.title}
						</h3>
						<p className="mt-6 max-w-lg text-sm leading-relaxed text-white/48 sm:text-base">
							{project.description}
						</p>
						<div className="mt-7 flex flex-wrap gap-2">
							{project.technologies.map((technology) => (
								<span key={technology} className="project-tech-pill">
									{technology.replace(/^#/, '')}
								</span>
							))}
						</div>
					</div>

					<div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="button-primary group"
						>
							{t('projects.liveDemo')}
							<ArrowUpRight
								size={16}
								className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
						{project.githubUrl && project.githubUrl !== '#' && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${project.title} source code`}
								className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-primary hover:text-primary"
							>
								<Github size={16} />
							</a>
						)}
					</div>
				</div>
			</div>
		</article>
	);
};

const Projects = () => {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();
	const { data: projects, isLoading } = useQueryGetProjects({ size: 5 });

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
						{projects?.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Projects;
