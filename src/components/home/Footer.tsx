import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="relative z-20 border-t border-white/10 bg-background text-white">
			<div className="section-container flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<p className="font-display text-lg font-semibold tracking-[-0.04em]">Huy Che</p>
					<p className="mt-1 font-mono-code text-[9px] uppercase tracking-[0.16em] text-white/30">
						Senior Software Engineer
					</p>
				</div>
				<p className="font-mono-code text-[9px] uppercase tracking-[0.14em] text-white/30">
					© {new Date().getFullYear()} — {t('footer.rights')}
				</p>
				<a
					href="#home"
					className="group inline-flex items-center gap-2 font-mono-code text-[9px] uppercase tracking-[0.16em] text-white/50 transition-colors hover:text-primary"
				>
					Back to top
					<span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 transition-colors group-hover:border-primary">
						<ArrowUp size={13} />
					</span>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
