import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { useCallback, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { easeInOutCubic } from '@/lib/animations';
import { useMutationResponsePortfolio } from '@/hooks/email/useMutationResponsePortfolio';

const Contact = () => {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const emailMutation = useMutationResponsePortfolio({
		onSuccess: () => {
			toast({
				title: 'Message Sent!',
				description: "Thank you for your message. I'll get back to you soon!",
			});
			setFormData({ name: '', email: '', message: '' });
		},
		onError: () => {
			toast({
				title: 'Error!',
				description: 'Failed to send message. Please try again later.',
				variant: 'destructive',
			});
		},
	});

	const handleSubmit = useCallback(
		async (e: React.FormEvent) => {
			try {
				e.preventDefault();

				if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
					toast({
						title: 'Validation Error',
						description: 'Please fill in all fields.',
						variant: 'destructive',
					});
					return;
				}

				await emailMutation.mutate({
					name: formData.name,
					email: formData.email,
					message: formData.message,
				});
			} catch (error) {
				console.error(error);
			}
		},
		[emailMutation, formData],
	);

	const contactInfo = [
		{
			icon: Mail,
			title: 'Email',
			value: 'chequanghuybtt@gmail.com',
			href: 'mailto:chequanghuybtt@gmail.com',
		},
		{
			icon: Phone,
			title: 'Phone',
			value: '+84 939 260 508',
			href: 'tel:+15551234567',
		},
		{
			icon: MapPin,
			title: 'Location',
			value: 'Ho Chi Minh City, Vietnam',
			href: 'https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam',
		},
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const headingVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: easeInOutCubic,
			},
		},
	};

	const formVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: easeInOutCubic,
			},
		},
	};

	const infoVariants = {
		hidden: { opacity: 0, x: 50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: easeInOutCubic,
			},
		},
	};

	return (
		<section id="contact" className="py-16 sm:py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<motion.div
					className="text-center mb-12 sm:mb-16"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
				>
					<motion.h2
						className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
						variants={headingVariants}
					>
						Get In Touch
					</motion.h2>
					<motion.div
						className="w-24 h-1 gradient-primary mx-auto mb-8"
						initial={{ width: 0 }}
						whileInView={{ width: '6rem' }}
						transition={{ duration: 1, delay: 0.5 }}
						viewport={{ once: true }}
					/>
					<motion.p
						className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto"
						variants={headingVariants}
					>
						Have a project in mind or just want to chat? I'd love to hear from you. Let's
						create something amazing together!
					</motion.p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
					{/* Contact Form */}
					<motion.div
						variants={formVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '-50px' }}
					>
						<Card className="p-6 sm:p-8">
							<motion.h3
								className="text-xl sm:text-2xl font-semibold mb-6"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2, duration: 0.5 }}
								viewport={{ once: true }}
							>
								Send Message
							</motion.h3>
							<form onSubmit={handleSubmit} className="space-y-6">
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.3, duration: 0.5 }}
									viewport={{ once: true }}
								>
									<motion.div whileFocus={{ scale: 1.02 }}>
										<Input
											placeholder="Your Name"
											value={formData.name}
											onChange={(e) => setFormData({ ...formData, name: e.target.value })}
											disabled={emailMutation.isPending}
											required
										/>
									</motion.div>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.4, duration: 0.5 }}
									viewport={{ once: true }}
								>
									<motion.div whileFocus={{ scale: 1.02 }}>
										<Input
											type="email"
											placeholder="Your Email"
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
											disabled={emailMutation.isPending}
											required
										/>
									</motion.div>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.5, duration: 0.5 }}
									viewport={{ once: true }}
								>
									<motion.div whileFocus={{ scale: 1.02 }}>
										<Textarea
											placeholder="Your Message"
											rows={6}
											value={formData.message}
											onChange={(e) =>
												setFormData({ ...formData, message: e.target.value })
											}
											disabled={emailMutation.isPending}
											required
										/>
									</motion.div>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.6, duration: 0.5 }}
									viewport={{ once: true }}
								>
									<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
										<Button
											type="submit"
											size="lg"
											className="w-full gradient-primary text-white"
											disabled={emailMutation.isPending}
										>
											{emailMutation.isPending ? (
												<>
													<Loader2 className="w-4 h-4 mr-2 animate-spin" />
													Sending...
												</>
											) : (
												'Send Message'
											)}
										</Button>
									</motion.div>
								</motion.div>
							</form>
						</Card>
					</motion.div>

					{/* Contact Information */}
					<motion.div
						variants={infoVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '-50px' }}
					>
						<motion.div
							className="space-y-8 mb-12"
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: '-50px' }}
						>
							{contactInfo.map((info, index) => {
								const IconComponent = info.icon;
								return (
									<motion.div
										key={index}
										className="flex items-center space-x-4"
										initial={{ opacity: 0, x: 20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
										viewport={{ once: true }}
										whileHover={{ x: 10 }}
									>
										<motion.div
											className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center"
											whileHover={{ rotate: 360, scale: 1.1 }}
											transition={{ duration: 0.5 }}
										>
											<IconComponent size={24} className="text-white" />
										</motion.div>
										<div>
											<p className="font-medium">{info.title}</p>
											<motion.a
												href={info.href}
												className="text-text-secondary hover:text-primary transition-colors"
												whileHover={{ scale: 1.05 }}
											>
												{info.value}
											</motion.a>
										</div>
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
