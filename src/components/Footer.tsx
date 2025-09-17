import { Github, Linkedin, Mail, Heart, Copyright } from 'lucide-react';

const Footer = () => {
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

	return (
		<footer className="bg-surface-elevated border-t border-border">
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
							{new Date().getFullYear()} Huy Che. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
