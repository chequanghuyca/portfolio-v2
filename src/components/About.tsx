import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { easeInOutCubic } from '@/lib/animations';
import logoHCMUT from '@/assets/hcmut.png';
import logoMirai from '@/assets/mirai.png';
import logoFPT from '@/assets/fpt.png';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const About = () => {
	const { t } = useTranslation();

	const getExperience = (company: string) => {
		const logoMap = {
			mirai: logoMirai,
			hcmut: logoHCMUT,
			fpt: logoFPT,
		};

		return {
			role: t(`about.experience.${company}.role`),
			company: t(`about.experience.${company}.company`),
			companyShort: t(`about.experience.${company}.companyShort`),
			logo: logoMap[company as keyof typeof logoMap],
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
		<section id="about" className="py-16 sm:py-20 bg-surface">
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
						variants={textVariants}
					>
						{t('about.title')}
					</motion.h2>
					<motion.div
						className="h-1 gradient-primary mx-auto mb-8"
						variants={lineVariants}
					/>
					<motion.p
						className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto"
						variants={textVariants}
					>
						{t('about.subtitle')}
					</motion.p>
				</motion.div>

				{/* Timeline Container */}
				<div className="max-w-6xl mx-auto">
					<div className="relative">
						<div
							className="hidden md:block absolute left-1/2 transform w-0.5 bg-gradient-to-b from-primary to-purple-600"
							style={{
								top: '2rem',
								height: 'calc(100% - 22rem)',
							}}
						/>

						{/* Timeline Items */}
						{workExperience.map((experience, index) => {
							const isLeft = index % 2 === 0;

							return (
								<motion.div
									key={index}
									className="relative mb-12 last:mb-0"
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: index * 0.2,
										ease: easeInOutCubic,
									}}
									viewport={{ once: true, margin: '-50px' }}
								>
									{/* Desktop Layout */}
									<div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:items-start">
										{/* Left Column */}
										<div className={`flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
											{isLeft && (
												<div className="max-w-md w-full">
													<motion.div
														whileHover={{ scale: 1.02, y: -5 }}
														transition={{ duration: 0.3 }}
													>
														<Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-r-4 border-r-primary">
															{/* Period Badge */}
															{/* */}

															{/* Header */}
															<div className="mb-4">
																<h3 className="text-xl font-bold text-foreground mb-2">
																	{experience.role}
																</h3>
																<div className="flex items-start gap-2 text-text-secondary mb-2">
																	<Building2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
																	<span className="font-semibold text-base leading-relaxed">
																		{experience.company}
																	</span>
																</div>
																<div className="flex items-center gap-2 text-text-secondary">
																	<MapPin className="w-4 h-4 flex-shrink-0" />
																	<span className="text-sm">{experience.location}</span>
																</div>
															</div>

															{/* Achievements */}
															<div className="space-y-3">
																{experience.achievements.map(
																	(achievement, achievementIndex) => (
																		<motion.div
																			key={achievementIndex}
																			className="flex items-start gap-3"
																			initial={{ opacity: 0, x: -20 }}
																			whileInView={{ opacity: 1, x: 0 }}
																			transition={{
																				duration: 0.4,
																				delay: index * 0.2 + achievementIndex * 0.1 + 0.3,
																			}}
																			viewport={{ once: true }}
																		>
																			<div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
																			<p className="text-sm text-text-secondary leading-relaxed">
																				{achievement}
																			</p>
																		</motion.div>
																	),
																)}
															</div>
														</Card>
													</motion.div>
												</div>
											)}
										</div>

										{/* Center Column - Logo */}
										<div className="flex flex-col items-center justify-start pt-4">
											<motion.div
												className="flex flex-col items-center relative"
												whileHover={{ scale: 1.05 }}
												transition={{ duration: 0.3 }}
											>
												<div className="w-20 h-20 rounded-full bg-background shadow-xl border-4 border-primary/30 flex items-center justify-center relative overflow-hidden">
													<img
														src={experience.logo}
														alt={`${experience.company} company logo - ${experience.role} at ${experience.company}`}
														className="w-12 h-12 object-contain"
													/>
													<div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 blur-sm"></div>
												</div>
												<div
													className={cn(
														'absolute top-1/2 -translate-y-1/2',
														isLeft ? 'left-24' : 'right-24',
													)}
												>
													<Badge
														variant="secondary"
														className="bg-primary/10 text-primary text-nowrap text-sm"
													>
														<Calendar className="w-3 h-3 mr-1" />
														{experience.period}
													</Badge>
												</div>
											</motion.div>
										</div>

										{/* Right Column */}
										<div className={`flex ${!isLeft ? 'justify-start' : 'justify-end'}`}>
											{!isLeft && (
												<div className="max-w-md w-full">
													<motion.div
														whileHover={{ scale: 1.02, y: -5 }}
														transition={{ duration: 0.3 }}
													>
														<Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
															{/* Header */}
															<div className="mb-4">
																<h3 className="text-xl font-bold text-foreground mb-2">
																	{experience.role}
																</h3>
																<div className="flex items-start gap-2 text-text-secondary mb-2">
																	<Building2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
																	<span className="font-semibold text-base leading-relaxed">
																		{experience.company}
																	</span>
																</div>
																<div className="flex items-center gap-2 text-text-secondary">
																	<MapPin className="w-4 h-4 flex-shrink-0" />
																	<span className="text-sm">{experience.location}</span>
																</div>
															</div>

															{/* Achievements */}
															<div className="space-y-3">
																{experience.achievements.map(
																	(achievement, achievementIndex) => (
																		<motion.div
																			key={achievementIndex}
																			className="flex items-start gap-3"
																			initial={{ opacity: 0, x: -20 }}
																			whileInView={{ opacity: 1, x: 0 }}
																			transition={{
																				duration: 0.4,
																				delay: index * 0.2 + achievementIndex * 0.1 + 0.3,
																			}}
																			viewport={{ once: true }}
																		>
																			<div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
																			<p className="text-sm text-text-secondary leading-relaxed">
																				{achievement}
																			</p>
																		</motion.div>
																	),
																)}
															</div>
														</Card>
													</motion.div>
												</div>
											)}
										</div>
									</div>

									{/* Mobile Content Card */}
									<div className="md:hidden">
										<Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary relative">
											{/* Mobile Logo */}
											<div className="flex items-center gap-4 mb-4">
												<div className="w-12 h-12 rounded-full bg-background shadow-md border-2 border-primary/20 flex items-center justify-center flex-shrink-0">
													<img
														src={experience.logo}
														alt={`${experience.companyShort} logo`}
														className="w-8 h-8 rounded-full object-cover"
													/>
												</div>
												<div className="flex-1">
													<Badge
														variant="secondary"
														className="bg-primary/10 text-primary mb-2"
													>
														<Calendar className="w-3 h-3 mr-1" />
														{experience.period}
													</Badge>
												</div>
											</div>

											{/* Header */}
											<div className="mb-4">
												<h3 className="text-xl font-bold text-foreground mb-2">
													{experience.role}
												</h3>
												<div className="flex items-start gap-2 text-text-secondary mb-2">
													<Building2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
													<span className="font-semibold text-base leading-relaxed">
														{experience.company}
													</span>
												</div>
												<div className="flex items-center gap-2 text-text-secondary">
													<MapPin className="w-4 h-4 flex-shrink-0" />
													<span className="text-sm">{experience.location}</span>
												</div>
											</div>

											{/* Achievements */}
											<div className="space-y-3">
												{experience.achievements.map((achievement, achievementIndex) => (
													<div key={achievementIndex} className="flex items-start gap-3">
														<div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
														<p className="text-sm text-text-secondary leading-relaxed">
															{achievement}
														</p>
													</div>
												))}
											</div>
										</Card>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

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

const textVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: easeInOutCubic,
		},
	},
};

const lineVariants = {
	hidden: { width: 0 },
	visible: {
		width: '6rem',
		transition: {
			duration: 0.8,
			ease: easeInOutCubic,
			delay: 0.5,
		},
	},
};

export default About;
