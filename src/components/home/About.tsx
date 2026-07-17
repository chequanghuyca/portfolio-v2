import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Building2, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logoFPT from '@/assets/fpt.png';
import logoHCMUT from '@/assets/hcmut.png';
import logoMirai from '@/assets/mirai.png';

const About = () => {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();

	const getExperience = (company: 'mirai' | 'hcmut' | 'fpt') => {
		const logoMap = {
			mirai: logoMirai,
			hcmut: logoHCMUT,
			fpt: logoFPT,
		};

		return {
			role: t(`about.experience.${company}.role`),
			company: t(`about.experience.${company}.company`),
			logo: logoMap[company],
			location: t(`about.experience.${company}.location`),
			period: t(`about.experience.${company}.period`),
			achievements: t(`about.experience.${company}.achievements`, {
				returnObjects: true,
			}) as string[],
		};
	};

	const workExperience = [
		getExperience('mirai'),
		getExperience('hcmut'),
		getExperience('fpt'),
	];

	return (
		<section
			id="about"
			className="relative overflow-hidden rounded-t-[2rem] bg-[#f1dfc4] text-[#28150e] sm:rounded-t-[3rem]"
		>
			<div className="section-container py-24 sm:py-32 lg:py-40">
				<div className="mb-20 grid gap-10 lg:grid-cols-[0.8fr_1.7fr] lg:gap-20">
					<motion.div
						initial={reduceMotion ? false : { opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-15%' }}
						transition={{ duration: 0.7 }}
						className="section-kicker section-kicker-on-light"
					>
						<span>01</span>
						{t('about.title')}
					</motion.div>
					<motion.div
						initial={reduceMotion ? false : { opacity: 0, y: 36 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-15%' }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					>
						<h2 className="display-heading max-w-5xl">
							{t('about.statement')}
						</h2>
						<div className="mt-8 grid gap-6 border-t border-black/15 pt-7 sm:grid-cols-2">
							<p className="max-w-xl text-base leading-relaxed text-black/60 sm:text-lg">
								{t('about.intro')}
							</p>
							<div className="flex flex-wrap content-start gap-2 sm:justify-end">
								{(['01', '02', '03'] as const).map((item) => (
									<span key={item} className="principle-pill">
										{t(`about.principles.${item}`)}
									</span>
								))}
							</div>
						</div>
					</motion.div>
				</div>

				<div className="grid gap-10 lg:grid-cols-[0.8fr_1.7fr] lg:gap-20">
					<div className="hidden lg:block">
						<div className="sticky top-32">
							<p className="font-mono-code text-[10px] uppercase tracking-[0.2em] text-black/45">
								{t('about.subtitle')}
							</p>
							<div className="mt-6 font-display text-[clamp(4rem,8vw,8rem)] font-semibold leading-none tracking-[-0.08em]">
								5<span className="text-primary">+</span>
							</div>
							<p className="mt-2 max-w-[12rem] text-sm leading-relaxed text-black/50">
								{t('skills.experience')}
							</p>
						</div>
					</div>

					<div className="border-t border-black/20">
						{workExperience.map((experience, index) => (
							<motion.article
								key={experience.company}
								initial={reduceMotion ? false : { opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-10%' }}
								transition={{
									duration: 0.7,
									delay: index * 0.08,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="group grid gap-6 border-b border-black/20 py-9 sm:grid-cols-[auto_1fr] sm:py-12"
							>
								<div className="flex items-start justify-between gap-4 sm:block">
									<div className="grid h-14 w-14 place-items-center rounded-2xl border border-black/10 bg-white/60 sm:h-16 sm:w-16">
										<img
											src={experience.logo}
											alt=""
											className="h-9 w-9 object-contain sm:h-10 sm:w-10"
										/>
									</div>
									<span className="font-mono-code text-xs text-black/45 sm:hidden">
										0{index + 1}
									</span>
								</div>

								<div>
									<div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
										<div>
											<div className="mb-2 flex items-center gap-2 text-xs text-black/50">
												<Building2 size={13} />
												<span>{experience.company}</span>
											</div>
											<h3 className="font-display text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
												{experience.role}
											</h3>
										</div>
										<div className="shrink-0 sm:text-right">
											<p className="font-mono-code text-[10px] uppercase tracking-[0.14em] text-black/70">
												{experience.period}
											</p>
											<p className="mt-2 flex items-center gap-1.5 text-xs text-black/45 sm:justify-end">
												<MapPin size={12} />
												{experience.location}
											</p>
										</div>
									</div>

									<ul className="grid gap-3 text-sm leading-relaxed text-black/60 sm:grid-cols-2">
										{experience.achievements.slice(0, 4).map((achievement) => (
											<li key={achievement} className="flex gap-3">
												<ArrowUpRight
													size={14}
													className="mt-1 shrink-0 text-black/35 transition-colors group-hover:text-primary"
												/>
												<span>{achievement}</span>
											</li>
										))}
									</ul>
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
