import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router';
import { useQueryGetProjects } from '@/hooks/project';

const Footer = () => {
	const { t, i18n } = useTranslation();
	const { data: projects } = useQueryGetProjects();
	const isVietnamese = (i18n.resolvedLanguage || i18n.language).startsWith('vi');

	return (
		<footer className="relative z-20 border-t border-white/10 bg-background text-white">
			<div className="section-container py-8">
				<nav
					aria-label="Project case studies"
					className="flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-white/10 pb-6"
				>
					<span className="font-mono-code text-[9px] uppercase tracking-[0.16em] text-primary">
						Case studies
					</span>
					{projects?.map((project) => (
						<Link
							key={project.id}
							to="/projects/$projectId"
							params={{ projectId: project.id }}
							search={isVietnamese ? { lang: 'vi' } : {}}
							className="font-mono-code text-[9px] uppercase tracking-[0.12em] text-white/35 transition-colors hover:text-primary"
						>
							{project.id.padStart(2, '0')} {project.title}
						</Link>
					))}
				</nav>

				<div className="flex flex-col gap-6 pt-6 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p className="font-display text-lg font-semibold tracking-[-0.04em]">
							Huy Che
						</p>
						<p className="mt-1 font-mono-code text-[9px] uppercase tracking-[0.16em] text-white/30">
							Senior Software Engineer
						</p>
					</div>
					<p className="flex items-center gap-1 font-mono-code text-[9px] uppercase tracking-[0.14em] text-white/30">
						<span className="text-[14px]">©</span> {new Date().getFullYear()} —{' '}
						{t('footer.rights')}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
