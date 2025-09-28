import { Github, Linkedin, Mail, Copyright } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();

	const socialLinks = [
		{ icon: Github, href: 'https://github.com/chequanghuyca', label: 'GitHub' },
		{
			icon: Linkedin,
			href: 'https://www.linkedin.com/in/quang-huy-che-11493311b/',
			label: 'LinkedIn',
		},
		{
			icon: Mail,
			href: '#contact',
			label: 'Email',
		},
	];
	// inset 0px -20px 20px -1px #969696
	return (
		<footer className="bg-slate-50 shadow-[inset_0_-10px_20px_10px_rgba(182,182,182,0.6)]">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					{/* Brand & Social */}
					<div className="flex flex-col items-center md:items-start">
						<div className="text-xl font-bold text-gradient mb-3">Huy Che</div>
						<div className="flex space-x-4">
							{socialLinks.map((social, index) => {
								const IconComponent = social.icon;
								return (
									<a
										key={index}
										href={social.href}
										aria-label={social.label}
										className="text-text-secondary hover:text-primary transition-colors p-2 hover:bg-surface rounded-lg"
									>
										<IconComponent size={20} />
									</a>
								);
							})}
						</div>
					</div>

					{/* Copyright */}
					<div className="text-center md:text-right flex items-center gap-0.5">
						<Copyright size={18} className="text-text-secondary" />
						<p className="text-text-secondary text-sm">
							{new Date().getFullYear()} Huy Che. {t('footer.rights')}
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
