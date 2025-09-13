import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
	const skillCategories = [
		{
			title: 'Frontend',
			skills: [
				'React',
				'TypeScript',
				'Next.js',
				'Tailwind CSS',
				'Vue.js',
				'HTML5',
				'CSS3',
				'JavaScript ES6+',
			],
			gradient: 'from-blue-500 to-purple-600',
		},
		{
			title: 'Backend',
			skills: [
				'Node.js',
				'Express.js',
				'Python',
				'Django',
				'PostgreSQL',
				'MongoDB',
				'Redis',
				'GraphQL',
			],
			gradient: 'from-green-500 to-blue-500',
		},
		{
			title: 'DevOps & Tools',
			skills: [
				'Docker',
				'AWS',
				'Git',
				'GitHub Actions',
				'Webpack',
				'Vite',
				'Jest',
				'Cypress',
			],
			gradient: 'from-orange-500 to-red-500',
		},
		{
			title: 'Design & Others',
			skills: [
				'Figma',
				'Adobe XD',
				'UI/UX Design',
				'Responsive Design',
				'REST APIs',
				'Agile',
				'Scrum',
				'Team Leadership',
			],
			gradient: 'from-purple-500 to-pink-500',
		},
	];

	return (
		<section id="skills" className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold mb-6">Skills & Technologies</h2>
					<div className="w-24 h-1 gradient-primary mx-auto mb-8" />
					<p className="text-lg text-text-secondary max-w-2xl mx-auto">
						Here are the technologies and tools I use to bring ideas to life
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{skillCategories.map((category, index) => (
						<Card
							key={index}
							className="p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div
								className={`w-full h-2 rounded-full bg-gradient-to-r ${category.gradient} mb-6`}
							/>
							<h3 className="text-xl font-semibold mb-4">{category.title}</h3>
							<div className="flex flex-wrap gap-2">
								{category.skills.map((skill, skillIndex) => (
									<Badge
										key={skillIndex}
										variant="secondary"
										className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
									>
										{skill}
									</Badge>
								))}
							</div>
						</Card>
					))}
				</div>

				{/* Stats Section */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
					{[
						{ number: '50+', label: 'Projects Completed' },
						{ number: '3+', label: 'Years Experience' },
						{ number: '20+', label: 'Happy Clients' },
						{ number: '100%', label: 'Satisfaction Rate' },
					].map((stat, index) => (
						<div key={index} className="text-center animate-fade-in">
							<div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
								{stat.number}
							</div>
							<p className="text-text-secondary">{stat.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
