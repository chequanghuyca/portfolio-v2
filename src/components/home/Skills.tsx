import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Braces, CloudCog, Cpu, PanelsTopLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const skillCategories = [
	{
		icon: PanelsTopLeft,
		title: 'Frontend Architecture',
		descriptionKey: 'skills.categories.frontend',
		skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Query', 'Zustand'],
	},
	{
		icon: Braces,
		title: 'Backend Systems',
		descriptionKey: 'skills.categories.backend',
		skills: ['NestJS', 'Node.js', 'Golang', 'GraphQL', 'REST APIs', 'PostgreSQL'],
	},
	{
		icon: CloudCog,
		title: 'Cloud & Delivery',
		descriptionKey: 'skills.categories.cloud',
		skills: ['Docker', 'CI/CD', 'Cloudflare', 'Nginx', 'DigitalOcean', 'GitLab'],
	},
	{
		icon: Cpu,
		title: 'Emerging Systems',
		descriptionKey: 'skills.categories.systems',
		skills: ['Web3', 'Smart Contracts', 'Tauri / Rust', 'AI Workflows', 'SEO', 'System Design'],
	},
];

const Skills = () => {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();

	const stats = [
		{ value: '5+', label: t('skills.experience') },
		{ value: '20+', label: t('skills.completed') },
		{ value: '03', label: t('skills.domains') },
		{ value: '∞', label: t('skills.curiosity') },
	];

	return (
		<section id="skills" className="relative overflow-hidden bg-background">
			<div className="skills-radial" />
			<div className="section-container relative z-10 py-24 sm:py-32 lg:py-40">
				<div className="mb-16 grid gap-10 lg:grid-cols-[0.8fr_1.7fr] lg:gap-20">
					<motion.div
						initial={reduceMotion ? false : { opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-15%' }}
						transition={{ duration: 0.7 }}
						className="section-kicker"
					>
						<span>02</span>
						{t('skills.title')}
					</motion.div>
					<motion.div
						initial={reduceMotion ? false : { opacity: 0, y: 36 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-15%' }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					>
						<h2 className="display-heading text-white">{t('skills.statement')}</h2>
						<p className="mt-7 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
							{t('skills.intro')}
						</p>
					</motion.div>
				</div>

				<div className="mb-14 grid grid-cols-2 border-y border-white/10 lg:grid-cols-4">
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={reduceMotion ? false : { opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.06 }}
							className="border-b border-white/10 px-4 py-7 last:border-b-0 even:border-l sm:px-7 lg:border-b-0 lg:border-l lg:first:border-l-0"
						>
							<p className="font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
								{stat.value}
							</p>
							<p className="mt-2 font-mono-code text-[9px] uppercase tracking-[0.16em] text-white/35 sm:text-[10px]">
								{stat.label}
							</p>
						</motion.div>
					))}
				</div>

				<div className="border-t border-white/10">
					{skillCategories.map((category, index) => {
						const Icon = category.icon;

						return (
							<motion.article
								key={category.title}
								initial={reduceMotion ? false : { opacity: 0, x: -24 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: '-10%' }}
								transition={{
									duration: 0.65,
									delay: index * 0.07,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="skill-row group"
							>
								<div className="flex items-center gap-4">
									<span className="font-mono-code text-[10px] text-primary/70">
										0{index + 1}
									</span>
									<div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all group-hover:border-primary/50 group-hover:text-primary">
										<Icon size={19} />
									</div>
								</div>

								<div>
									<h3 className="font-display text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">
										{category.title}
									</h3>
									<p className="mt-2 max-w-xl text-sm leading-relaxed text-white/40">
										{t(category.descriptionKey)}
									</p>
								</div>

								<div className="flex flex-wrap gap-2">
									{category.skills.map((skill) => (
										<span key={skill} className="tech-pill">
											{skill}
										</span>
									))}
								</div>

								<ArrowUpRight
									size={18}
									className="hidden text-white/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary xl:block"
								/>
							</motion.article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;
