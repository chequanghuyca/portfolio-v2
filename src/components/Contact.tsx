import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { useCallback, useState } from 'react';
// import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { easeInOutCubic } from '@/lib/animations';
import { useTranslation } from 'react-i18next';
// import { useMutationResponsePortfolio } from '@/hooks/email/useMutationResponsePortfolio';

const Contact = () => {
	const { t } = useTranslation();
	// const { toast } = useToast();
	// const [formData, setFormData] = useState({
	// 	name: '',
	// 	email: '',
	// 	message: '',
	// });

	// const emailMutation = useMutationResponsePortfolio({
	// 	onSuccess: () => {
	// 		toast({
	// 			title: 'Message Sent!',
	// 			description: "Thank you for your message. I'll get back to you soon!",
	// 		});
	// 		setFormData({ name: '', email: '', message: '' });
	// 	},
	// 	onError: () => {
	// 		toast({
	// 			title: 'Error!',
	// 			description: 'Failed to send message. Please try again later.',
	// 			variant: 'destructive',
	// 		});
	// 	},
	// });

	// const handleSubmit = useCallback(
	// 	async (e: React.FormEvent) => {
	// 		try {
	// 			e.preventDefault();

	// 			if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
	// 				toast({
	// 					title: 'Validation Error',
	// 					description: 'Please fill in all fields.',
	// 					variant: 'destructive',
	// 				});
	// 				return;
	// 			}

	// 			await emailMutation.mutate({
	// 				name: formData.name,
	// 				email: formData.email,
	// 				message: formData.message,
	// 			});
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	},
	// 	[emailMutation, formData],
	// );

	const contactInfo = [
		{
			icon: Mail,
			title: t('contact.email'),
			value: 'chequanghuybtt@gmail.com',
			href: 'mailto:chequanghuybtt@gmail.com',
		},
		{
			icon: Phone,
			title: t('contact.phone'),
			value: '+84 939 260 508',
			href: 'https://zalo.me/0939260508',
		},
		{
			icon: MapPin,
			title: t('contact.location'),
			value: t('contact.locationValue'),
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
						className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-sans"
						variants={headingVariants}
					>
						{t('contact.title')}
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
						{t('contact.subtitle')}
					</motion.p>
				</motion.div>

				{/* Contact Information - Centered Layout */}
				<div className="max-w-4xl mx-auto">
					<motion.div
						className="grid md:grid-cols-3 gap-6 lg:gap-8"
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
									variants={infoVariants}
									initial="hidden"
									whileInView="visible"
									transition={{ delay: index * 0.2, duration: 0.6 }}
									viewport={{ once: true, margin: '-50px' }}
								>
									<motion.div
										className="group"
										whileHover={{ y: -5 }}
										transition={{ duration: 0.3 }}
									>
										<Card className="p-6 lg:p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
											{/* Icon Container */}
											<motion.div
												className="w-16 h-16 lg:w-20 lg:h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
												whileHover={{ rotate: 360 }}
												transition={{ duration: 0.6 }}
											>
												<IconComponent size={32} className="text-white" />
											</motion.div>

											{/* Content */}
											<div className="text-center space-y-3">
												<motion.h3
													className="text-lg lg:text-xl font-semibold text-foreground"
													initial={{ opacity: 0, y: 10 }}
													whileInView={{ opacity: 1, y: 0 }}
													transition={{ delay: index * 0.2 + 0.2, duration: 0.4 }}
													viewport={{ once: true }}
												>
													{info.title}
												</motion.h3>

												<motion.a
													href={info.href}
													className="block text-text-secondary hover:text-primary transition-colors duration-300 text-sm lg:text-base break-words"
													whileHover={{ scale: 1.05 }}
													target="_blank"
													rel="noopener noreferrer"
													initial={{ opacity: 0, y: 10 }}
													whileInView={{ opacity: 1, y: 0 }}
													transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
													viewport={{ once: true }}
												>
													{info.value}
												</motion.a>
											</div>

											{/* Hover Effect Overlay */}
											<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
										</Card>
									</motion.div>
								</motion.div>
							);
						})}
					</motion.div>

					{/* Call to Action */}
					<motion.div
						className="text-center mt-12 lg:mt-16"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.6 }}
						viewport={{ once: true }}
					>
						<motion.p
							className="text-text-secondary text-base lg:text-lg mb-6"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 1, duration: 0.5 }}
							viewport={{ once: true }}
						>
							{t('contact.cta')}
						</motion.p>
						<motion.div
							className="flex flex-col sm:flex-row gap-4 justify-center items-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.2, duration: 0.6 }}
							viewport={{ once: true }}
						>
							<motion.a
								href="mailto:chequanghuybtt@gmail.com"
								className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Mail className="w-4 h-4" />
								{t('contact.sendEmail')}
							</motion.a>
							<motion.a
								href="https://zalo.me/0939260508"
								className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Phone className="w-4 h-4" />
								{t('contact.callNow')}
							</motion.a>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
