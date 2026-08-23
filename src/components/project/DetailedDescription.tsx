import { FileText, ArrowUpRight, TrendingUp, Cpu, Sparkles } from 'lucide-react';
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
			transition={{ duration: 0.6, delay: 0.3 }}
			className="mb-16 rounded-3xl border border-white/10 bg-[#24130e]/80 backdrop-blur-xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(30,12,6,0.3)]"
		>
			{/* Section Header */}
			<div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
				<div>
					<span className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-primary">
						02 / {t('projects.architectureDeepDive')}
					</span>
					<h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.04em] text-white mt-1">
						{t('projects.detailedDescription')}
					</h2>
				</div>
				<div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-primary">
					<Sparkles className="h-5 w-5" />
				</div>
			</div>

			{/* Narrative Text */}
			<p className="text-white/75 leading-relaxed text-base sm:text-lg font-sans">
				{project.longDescription}
			</p>

			{/* Highlighted Q&A / System Specification Callout */}
			{project.qaUrl && (
				<div className="my-10 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_0_40px_rgba(230,163,82,0.08)]">
					<div className="space-y-1.5 max-w-2xl">
						<div className="flex items-center gap-2.5 font-display text-lg sm:text-xl font-semibold text-white">
							<span className="grid h-8 w-8 place-items-center rounded-xl border border-primary/30 bg-primary/20 text-primary">
								<FileText className="h-4 w-4" />
							</span>
							<span>{t('projects.qaDocTitle')}</span>
						</div>
						<p className="text-sm text-white/60 leading-relaxed font-sans">
							{t('projects.qaDocDesc')}
						</p>
					</div>
					<a
						href={project.qaUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="button-primary group shrink-0"
					>
						<span>{t('projects.viewQa')}</span>
						<ArrowUpRight
							size={15}
							className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						/>
					</a>
				</div>
			)}

			{/* Additional Project Highlights */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 pt-10 border-t border-white/10">
				{/* Column 1: Impact */}
				<div className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
					<h3 className="font-display text-lg font-semibold text-white flex items-center gap-2.5">
						<div className="grid h-8 w-8 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
							<TrendingUp className="h-4 w-4" />
						</div>
						<span>{t('projects.projectImpact') || 'Project Impact'}</span>
					</h3>
					<ul className="space-y-3 text-white/70 text-sm sm:text-base">
						<li className="flex items-start gap-3">
							<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
							<span>{t('projects.impact1') || 'Improved user experience and engagement'}</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
							<span>{t('projects.impact2') || 'Enhanced performance and scalability'}</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
							<span>{t('projects.impact3') || 'Modern and maintainable codebase'}</span>
						</li>
					</ul>
				</div>

				{/* Column 2: Technical Highlights */}
				<div className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
					<h3 className="font-display text-lg font-semibold text-white flex items-center gap-2.5">
						<div className="grid h-8 w-8 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
							<Cpu className="h-4 w-4" />
						</div>
						<span>{t('projects.technicalHighlights') || 'Technical Highlights'}</span>
					</h3>
					<ul className="space-y-3 text-white/70 text-sm sm:text-base">
						<li className="flex items-start gap-3">
							<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
							<span>{t('projects.tech1') || 'Modern development practices and patterns'}</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
							<span>{t('projects.tech2') || 'Responsive design and accessibility'}</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
							<span>{t('projects.tech3') || 'Optimized performance and SEO'}</span>
						</li>
					</ul>
				</div>
			</div>
		</motion.div>
	);
};

export default DetailedDescription;
