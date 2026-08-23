import { Briefcase, Clock, Users, CheckCircle2, Zap, Layers } from 'lucide-react';
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
			transition={{ duration: 0.6, delay: 0.2 }}
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
		>
			{/* Card 1: Project Info / Scope */}
			<div className="rounded-3xl border border-white/10 bg-[#24130e]/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(30,12,6,0.3)] flex flex-col justify-between">
				<div>
					<div className="flex items-center justify-between mb-6">
						<span className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-primary">
							{t('projects.specifications')}
						</span>
						<Layers className="h-5 w-5 text-primary/70" />
					</div>
					<h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white mb-6">
						{t('projects.projectInfo')}
					</h3>

					<div className="space-y-4">
						<div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-3.5">
							<div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
								<Briefcase className="h-4 w-4" />
							</div>
							<div>
								<p className="font-mono-code text-[10px] uppercase tracking-[0.14em] text-white/45">
									{t('projects.role')}
								</p>
								<p className="font-medium text-white text-sm sm:text-base mt-0.5">
									{project.role}
								</p>
							</div>
						</div>

						<div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-3.5">
							<div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
								<Clock className="h-4 w-4" />
							</div>
							<div>
								<p className="font-mono-code text-[10px] uppercase tracking-[0.14em] text-white/45">
									{t('projects.duration')}
								</p>
								<p className="font-medium text-white text-sm sm:text-base mt-0.5">
									{project.duration}
								</p>
							</div>
						</div>

						<div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-3.5">
							<div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
								<Users className="h-4 w-4" />
							</div>
							<div>
								<p className="font-mono-code text-[10px] uppercase tracking-[0.14em] text-white/45">
									{t('projects.teamSize')}
								</p>
								<p className="font-medium text-white text-sm sm:text-base mt-0.5">
									{project.teamSize}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Card 2: Key Features */}
			<div className="rounded-3xl border border-white/10 bg-[#24130e]/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(30,12,6,0.3)]">
				<div className="flex items-center justify-between mb-6">
					<span className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-primary">
						{t('projects.coreCapabilities')}
					</span>
					<CheckCircle2 className="h-5 w-5 text-primary/70" />
				</div>
				<h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white mb-6">
					{t('projects.keyFeatures')}
				</h3>
				<ul className="space-y-3.5">
					{project.features.map((feature, index) => (
						<motion.li
							key={index}
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3 + index * 0.08, duration: 0.3 }}
							className="flex items-start gap-3 text-sm sm:text-base text-white/70 leading-relaxed"
						>
							<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
							<span>{feature}</span>
						</motion.li>
					))}
				</ul>
			</div>

			{/* Card 3: Technical Challenges */}
			<div className="rounded-3xl border border-white/10 bg-[#24130e]/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(30,12,6,0.3)]">
				<div className="flex items-center justify-between mb-6">
					<span className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-primary">
						{t('projects.engineeringFocus')}
					</span>
					<Zap className="h-5 w-5 text-primary/70" />
				</div>
				<h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white mb-6">
					{t('projects.challenges')}
				</h3>
				<ul className="space-y-3.5">
					{project.challenges.map((challenge, index) => (
						<motion.li
							key={index}
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4 + index * 0.08, duration: 0.3 }}
							className="flex items-start gap-3 text-sm sm:text-base text-white/70 leading-relaxed"
						>
							<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
							<span>{challenge}</span>
						</motion.li>
					))}
				</ul>
			</div>
		</motion.div>
	);
};

export default ProjectDetailsGrid;
