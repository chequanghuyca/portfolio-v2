import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		toast({
			title: 'Message Sent!',
			description: "Thank you for your message. I'll get back to you soon!",
		});
		setFormData({ name: '', email: '', message: '' });
	};

	const contactInfo = [
		{
			icon: Mail,
			title: 'Email',
			value: 'huy.che@example.com',
			href: 'mailto:huy.che@example.com',
		},
		{
			icon: Phone,
			title: 'Phone',
			value: '+1 (555) 123-4567',
			href: 'tel:+15551234567',
		},
		{
			icon: MapPin,
			title: 'Location',
			value: 'San Francisco, CA',
			href: '#',
		},
	];

	const socialLinks = [
		{ icon: Github, href: '#', label: 'GitHub' },
		{ icon: Linkedin, href: '#', label: 'LinkedIn' },
		{ icon: Twitter, href: '#', label: 'Twitter' },
	];

	return (
		<section id="contact" className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
					<div className="w-24 h-1 gradient-primary mx-auto mb-8" />
					<p className="text-lg text-text-secondary max-w-2xl mx-auto">
						Have a project in mind or just want to chat? I'd love to hear from you. Let's
						create something amazing together!
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-16">
					{/* Contact Form */}
					<Card className="p-8 animate-fade-in-up">
						<h3 className="text-2xl font-semibold mb-6">Send Message</h3>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<Input
									placeholder="Your Name"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									required
								/>
							</div>
							<div>
								<Input
									type="email"
									placeholder="Your Email"
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									required
								/>
							</div>
							<div>
								<Textarea
									placeholder="Your Message"
									rows={6}
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									required
								/>
							</div>
							<Button
								type="submit"
								size="lg"
								className="w-full gradient-primary text-white"
							>
								Send Message
							</Button>
						</form>
					</Card>

					{/* Contact Information */}
					<div className="animate-fade-in">
						<div className="space-y-8 mb-12">
							{contactInfo.map((info, index) => {
								const IconComponent = info.icon;
								return (
									<div key={index} className="flex items-center space-x-4">
										<div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
											<IconComponent size={24} className="text-white" />
										</div>
										<div>
											<p className="font-medium">{info.title}</p>
											<a
												href={info.href}
												className="text-text-secondary hover:text-primary transition-colors"
											>
												{info.value}
											</a>
										</div>
									</div>
								);
							})}
						</div>

						{/* Social Links */}
						<div>
							<h4 className="text-xl font-semibold mb-6">Follow Me</h4>
							<div className="flex space-x-4">
								{socialLinks.map((social, index) => {
									const IconComponent = social.icon;
									return (
										<a
											key={index}
											href={social.href}
											aria-label={social.label}
											className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110"
										>
											<IconComponent size={20} />
										</a>
									);
								})}
							</div>
						</div>

						{/* CTA */}
						<Card className="p-6 mt-8 gradient-primary text-white">
							<h4 className="text-xl font-semibold mb-2">Ready to collaborate?</h4>
							<p className="mb-4 text-white/90">
								Let's discuss your project and turn your ideas into reality.
							</p>
							<Button variant="secondary" size="sm">
								Schedule a Call
							</Button>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
