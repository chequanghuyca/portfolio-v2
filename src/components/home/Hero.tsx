import profilePhoto from '@/assets/profile-photo.webp';
import ParticleNetwork from '@/components/canvas/ParticleNetwork';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();

	const entrance = (delay: number, y = 24) => ({
		initial: reduceMotion ? false : { opacity: 0, y },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
	});

	return (
		<section
			id="home"
			className="hero-stage relative min-h-[100svh] overflow-hidden bg-background"
		>
			<div className="absolute inset-0 opacity-80">
				<ParticleNetwork />
			</div>
			<div className="hero-grid absolute inset-0" />
			<div className="hero-aurora hero-aurora-left" />
			<div className="hero-aurora hero-aurora-right" />

			<div className="hero-layout relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col px-5 pb-7 pt-28 sm:px-8 sm:pb-9 sm:pt-32 lg:px-12">
				<motion.div
					{...entrance(0.05, -12)}
					className="flex items-center justify-between border-b border-white/10 pb-4 font-mono-code text-[9px] uppercase tracking-[0.2em] text-white/45 sm:text-[10px]"
				>
					<span>Chế Quang Huy / Portfolio 2026</span>
					<span className="hidden items-center gap-2 sm:flex">
						<span className="signal-bars" aria-hidden="true">
							<i />
							<i />
							<i />
							<i />
						</span>
						{t('hero.systemStatus')}
					</span>
				</motion.div>

				<div className="hero-content-core relative flex flex-1 flex-col justify-center py-10 sm:py-12">
					<motion.div
						{...entrance(0.12)}
						className="mb-5 flex items-center gap-3 font-mono-code text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs"
					>
						<span className="h-px w-8 bg-primary" />
						{t('hero.eyebrow')}
					</motion.div>

					<h1
						className="hero-title relative z-10 uppercase"
						aria-label="Senior Software Engineer"
					>
						<motion.span {...entrance(0.18, 48)} className="hero-title-solid">
							Software
						</motion.span>
						<motion.span {...entrance(0.27, 48)} className="hero-title-outline">
							Engineer
						</motion.span>
					</h1>

					<motion.div {...entrance(0.42, 32)} className="hero-portrait-shell">
						<div className="hero-orbit hero-orbit-one" aria-hidden="true" />
						<div className="hero-orbit hero-orbit-two" aria-hidden="true" />
						<div className="hero-portrait-glow" aria-hidden="true" />
						<img
							src={profilePhoto}
							alt="Huy Che, Senior Software Engineer"
							width={509}
							height={490}
							decoding="async"
							className="hero-portrait-image"
						/>
						<span className="hero-coordinate hero-coordinate-top">10.8231° N</span>
						<span className="hero-coordinate hero-coordinate-bottom">106.6297° E</span>
					</motion.div>
				</div>

				<div className="hero-bottom-panel relative z-20 grid gap-7 border-t border-white/10 pt-5 sm:grid-cols-[1fr_auto] sm:items-end lg:grid-cols-[1fr_1.15fr_1fr]">
					{/* <motion.div {...entrance(0.48)} className="max-w-sm">
						<p className="text-balance text-sm leading-relaxed text-white/60 sm:text-base">
							{t('hero.lead')}
						</p>
					</motion.div> */}

					<motion.a
						{...entrance(0.56)}
						href="#about"
						className="group order-3 hidden h-14 w-14 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground lg:flex"
						aria-label={t('hero.scrollDown')}
					>
						<ArrowDownRight
							size={20}
							className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
						/>
					</motion.a>

					<motion.div
						{...entrance(0.52)}
						className="flex flex-wrap items-center gap-3 sm:justify-end"
					>
						<a href="#projects" className="button-primary group">
							{t('hero.viewProjects')}
							<ArrowUpRight
								size={16}
								className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
						<a href="#contact" className="button-ghost">
							{t('hero.getInTouch')}
						</a>
						<div className="ml-1 flex items-center gap-1">
							{[
								{
									icon: Github,
									href: 'https://github.com/chequanghuyca',
									label: 'GitHub',
								},
								{
									icon: Linkedin,
									href: 'https://www.linkedin.com/in/quang-huy-che-11493311b/',
									label: 'LinkedIn',
								},
								{ icon: Mail, href: 'mailto:chequanghuybtt@gmail.com', label: 'Email' },
							].map(({ icon: Icon, href, label }) => (
								<a
									key={label}
									href={href}
									target={href.startsWith('http') ? '_blank' : undefined}
									rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
									aria-label={label}
									className="grid h-10 w-10 place-items-center rounded-full text-white/50 transition-all hover:bg-white/10 hover:text-primary"
								>
									<Icon size={16} />
								</a>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
