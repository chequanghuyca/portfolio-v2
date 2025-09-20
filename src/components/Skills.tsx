import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import { easeInOutCubic } from '@/lib/animations';
import frontEndSkills from '@/hooks/skills/frontEndSkills';
import backEndSkills from '@/hooks/skills/backEndSkills';
import devOpsToolsSkills from '@/hooks/skills/devOpsToolsSkills';
import designAndOthersSkills from '@/hooks/skills/designAndOthersSkills';
import CountUpStat from './CountUpStats';

interface SkillCategory {
	title: string;
	skills: Skill[];
	gradient: string;
}

export interface Skill {
	name: string;
	logo?: string;
	classNames?: string;
}

const Skills = () => {
	const calculateExperienceYears = (): number => {
		const startYear = 2022;
		const currentDate = new Date();
		const currentYear = currentDate.getFullYear() + 0.5;
		const currentMonth = currentDate.getMonth() + 1;

		let years = currentYear - startYear;

		if (currentMonth >= 6) years += 0.5;

		return years;
	};

	const skillCategories: SkillCategory[] = [
		{
			title: 'Frontend',
			skills: frontEndSkills,
			gradient: 'from-blue-500 to-purple-600',
		},
		{
			title: 'Backend',
			skills: backEndSkills,
			gradient: 'from-green-500 to-blue-500',
		},
		{
			title: 'DevOps & Tools',
			skills: devOpsToolsSkills,
			gradient: 'from-orange-500 to-red-500',
		},
		{
			title: 'Design & Others',
			skills: designAndOthersSkills,
			gradient: 'from-purple-500 to-pink-500',
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
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
	return (
		<section id="skills" className="py-16 sm:py-20">
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
						Skills & Technologies
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
						Here are the technologies and tools I use to bring ideas to life
					</motion.p>
				</motion.div>

				<motion.div
					className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}
				>
					{skillCategories.map((category, index) => (
						<AnimatedCard
							key={index}
							index={index}
							delay={0.1}
							hoverScale={1.05}
							hoverRotate={2}
						>
							<Card className="p-6 h-full shadow-xl">
								<motion.div
									className={`w-full h-2 rounded-full bg-gradient-to-r ${category.gradient} mb-6`}
									initial={{ width: 0 }}
									whileInView={{ width: '100%' }}
									transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
									viewport={{ once: true }}
								/>
								<motion.h3
									className="text-xl font-semibold mb-4"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
									viewport={{ once: true }}
								>
									{category.title}
								</motion.h3>
								<motion.div
									className="flex flex-wrap gap-2"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
									viewport={{ once: true }}
								>
									{category.skills.map((skill, skillIndex) => (
										<motion.div
											key={skillIndex}
											initial={{ opacity: 0, scale: 0, rotate: -180 }}
											whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
											transition={{
												delay: 0.2 + index * 0.1 + skillIndex * 0.05,
												duration: 0.4,
												type: 'spring',
												stiffness: 200,
											}}
											viewport={{ once: true }}
											whileHover={{ scale: 1.1, rotate: 5 }}
										>
											<Badge
												variant="secondary"
												className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer flex items-center gap-2 py-2 pr-3"
											>
												{skill.logo && (
													<img
														src={skill.logo}
														alt={skill.name}
														className={skill.classNames || 'h-4 w-auto object-contain'}
													/>
												)}
												{skill.name}
											</Badge>
										</motion.div>
									))}
								</motion.div>
							</Card>
						</AnimatedCard>
					))}
				</motion.div>

				{/* Stats Section with Count Up */}
				<motion.div
					className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}
				>
					{[
						{ number: '30+', label: 'Projects Completed', isExperience: false },
						{
							number: `${calculateExperienceYears()}+`,
							label: 'Years Experience',
							isExperience: true,
						},
						{ number: '5000+', label: 'Happy Clients', isExperience: false },
						{ number: '100%', label: 'Satisfaction Rate', isExperience: false },
					].map((stat, index) => (
						<CountUpStat
							key={index}
							number={stat.number}
							label={stat.label}
							delay={index}
							isExperience={stat.isExperience}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
