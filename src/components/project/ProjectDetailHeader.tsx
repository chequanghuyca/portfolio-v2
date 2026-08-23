import { Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import logo from '@/assets/logo-ui.webp';
import type { ProjectDetail } from '@/hooks/project/useQueryGetProject';

interface ProjectDetailHeaderProps {
	project?: ProjectDetail;
}

const ProjectDetailHeader = ({ project }: ProjectDetailHeaderProps) => {
	const { t, i18n } = useTranslation();
	const isVietnamese = (i18n.resolvedLanguage || i18n.language).startsWith('vi');

	return (
		<motion.header
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5"
		>
			<div className="mx-auto flex max-w-[1480px] items-center justify-between px-5 py-3.5 sm:py-4 rounded-2xl border border-white/10 bg-[#160d0a]/95 shadow-[0_20px_60px_rgba(28,12,6,0.32)] backdrop-blur-xl sm:px-7">
				{/* Logo & Brand */}
				<Link
					to="/"
					search={isVietnamese ? { lang: 'vi' } : {}}
					className="group flex items-center gap-3"
				>
					<span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] transition-colors group-hover:border-primary/60 lg:h-12 lg:w-12">
						<img
							src={logo}
							alt="Huy Che logo"
							width={256}
							height={256}
							className="brand-logo h-7 w-7 object-contain lg:h-8 lg:w-8"
						/>
					</span>
					<span className="hidden sm:block">
						<span className="block text-base font-semibold leading-none text-white lg:text-lg">
							Huy Che
						</span>
						<span className="mt-1.5 flex items-center gap-1.5 font-mono-code text-[10px] uppercase tracking-[0.18em] text-white/50">
							<span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
							{project ? `Case Study / ${project.id.padStart(2, '0')}` : 'Software Engineer'}
						</span>
					</span>
				</Link>

				{/* Actions */}
				<div className="flex items-center gap-2.5 sm:gap-3">
					<LanguageSwitcher />

					<Link
						to="/"
						search={isVietnamese ? { lang: 'vi' } : {}}
						className="button-ghost group hidden sm:inline-flex"
					>
						<ArrowLeft
							size={14}
							className="transition-transform group-hover:-translate-x-0.5"
						/>
						<span>{t('common.backToHome')}</span>
					</Link>

					{project?.liveUrl && project.liveUrl !== '#' && (
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="button-primary group"
						>
							<span className="hidden sm:inline">{t('projects.liveDemo')}</span>
							<span className="sm:hidden">Demo</span>
							<ArrowUpRight
								size={14}
								className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
					)}
				</div>
			</div>
		</motion.header>
	);
};

export default ProjectDetailHeader;
