import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
	const { t } = useTranslation();
	const reduceMotion = useReducedMotion();

	return (
		<section id="contact" className="contact-stage relative overflow-hidden bg-background">
			<div className="contact-rings" aria-hidden="true" />
			<div className="section-container relative z-10 py-24 sm:py-32 lg:py-40">
				<motion.div
					initial={reduceMotion ? false : { opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-15%' }}
					transition={{ duration: 0.7 }}
					className="section-kicker mb-12"
				>
					<span>04</span>
					{t('contact.title')}
				</motion.div>

				<motion.div
					initial={reduceMotion ? false : { opacity: 0, y: 48 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-10%' }}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
				>
					<p className="mb-5 font-mono-code text-[10px] uppercase tracking-[0.22em] text-primary sm:text-xs">
						{t('contact.availability')}
					</p>
					<h2 className="contact-heading">
						<span>{t('contact.headlineTop')}</span>
						<span className="contact-heading-outline">{t('contact.headlineBottom')}</span>
					</h2>
				</motion.div>

				<div className="mt-14 grid gap-10 border-t border-white/10 pt-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
					<motion.div
						initial={reduceMotion ? false : { opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.1 }}
					>
						<p className="max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
							{t('contact.subtitle')}
						</p>
						<a
							href="mailto:chequanghuybtt@gmail.com"
							className="group mt-8 inline-flex items-center gap-3 border-b border-primary pb-2 font-display text-xl font-semibold tracking-[-0.035em] text-white transition-colors hover:text-primary sm:text-2xl"
						>
							chequanghuybtt@gmail.com
							<ArrowUpRight
								size={20}
								className="text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
					</motion.div>

					<motion.div
						initial={reduceMotion ? false : { opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.18 }}
						className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1"
					>
						<a
							href="https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-link"
						>
							<MapPin size={15} />
							{t('contact.locationValue')}
						</a>
						<a
							href="https://github.com/chequanghuyca"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-link"
						>
							<Github size={15} />
							GitHub
						</a>
						<a
							href="https://www.linkedin.com/in/quang-huy-che-11493311b/"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-link"
						>
							<Linkedin size={15} />
							LinkedIn
						</a>
					</motion.div>
				</div>

				<div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono-code text-[9px] uppercase tracking-[0.16em] text-white/30 sm:text-[10px]">
					<span className="flex items-center gap-2">
						<Mail size={12} />
						{t('contact.responseTime')}
					</span>
					<span>Ho Chi Minh City / GMT+7</span>
				</div>
			</div>
		</section>
	);
};

export default Contact;
