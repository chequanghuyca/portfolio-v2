import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
	const socialLinks = [
		{ icon: Github, href: '#', label: 'GitHub' },
		{ icon: Linkedin, href: '#', label: 'LinkedIn' },
		{ icon: Mail, href: '#', label: 'Email' },
	];

	return (
		<footer className="bg-surface-elevated border-t border-border">
			<div className="container mx-auto px-4 py-12">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Brand */}
					<div className="lg:col-span-2">
						<div className="text-2xl font-bold text-gradient mb-4">Huy Che</div>
						<p className="text-text-secondary mb-6 max-w-md">
							Full Stack Developer passionate about creating exceptional digital
							experiences with modern web technologies.
						</p>
						<div className="flex space-x-4">
							{socialLinks.map((social, index) => {
								const IconComponent = social.icon;
								return (
									<Button key={index} variant="ghost" size="icon" asChild>
										<a
											href={social.href}
											aria-label={social.label}
											className="hover:text-primary transition-colors"
										>
											<IconComponent size={20} />
										</a>
									</Button>
								);
							})}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
								<li key={item}>
									<a
										href={`#${item.toLowerCase()}`}
										className="text-text-secondary hover:text-primary transition-colors"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="font-semibold mb-4">Services</h3>
						<ul className="space-y-2">
							{['Web Development', 'Mobile Apps', 'UI/UX Design', 'Consulting'].map(
								(service) => (
									<li key={service}>
										<span className="text-text-secondary">{service}</span>
									</li>
								),
							)}
						</ul>
					</div>
				</div>

				<div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-text-secondary text-sm">
						© 2024 Huy Che. All rights reserved.
					</p>
					<p className="text-text-secondary text-sm flex items-center mt-4 md:mt-0">
						Made with <Heart size={16} className="mx-1 text-red-500" /> using React &
						TypeScript
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
