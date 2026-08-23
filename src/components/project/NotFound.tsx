import { Link } from '@tanstack/react-router';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ProjectDetailHeader from './ProjectDetailHeader';

const NotFound = () => {
	const { t, i18n } = useTranslation();
	const isVietnamese = (i18n.resolvedLanguage || i18n.language).startsWith('vi');

	return (
		<div className="dark portfolio-shell min-h-screen w-full bg-background text-foreground">
			<ProjectDetailHeader />
			<Helmet>
				<title>Project not found | Huy Che</title>
				<meta name="description" content="The requested project could not be found." />
			</Helmet>
			<div className="pt-32 sm:pt-40 pb-20">
				<div className="section-container max-w-2xl text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="rounded-3xl border border-white/10 bg-[#24130e]/80 backdrop-blur-xl p-8 sm:p-12 shadow-2xl"
					>
						<div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
							<AlertCircle className="h-8 w-8" />
						</div>
						<span className="font-mono-code text-[10px] uppercase tracking-[0.2em] text-primary">
							404 Error
						</span>
						<h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.04em] text-white mt-2 mb-4">
							{t('projects.notFound')}
						</h1>
						<p className="text-white/60 leading-relaxed font-sans mb-8">
							{t('projects.notFoundDesc')}
						</p>
						<div>
							<Link
								to="/"
								search={isVietnamese ? { lang: 'vi' } : {}}
								className="button-primary group"
							>
								<ArrowLeft
									size={16}
									className="transition-transform group-hover:-translate-x-1"
								/>
								<span>{t('common.backToHome')}</span>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
