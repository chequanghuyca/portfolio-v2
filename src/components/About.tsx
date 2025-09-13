import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, Coffee, Users, Award } from 'lucide-react';

const About = () => {
	const highlights = [
		{
			icon: Code,
			title: 'Clean Code',
			description: 'Writing maintainable and scalable code',
		},
		{
			icon: Coffee,
			title: 'Problem Solver',
			description: 'Turning complex challenges into simple solutions',
		},
		{
			icon: Users,
			title: 'Team Player',
			description: 'Collaborative approach to project development',
		},
		{
			icon: Award,
			title: 'Quality Focus',
			description: 'Committed to delivering exceptional results',
		},
	];

	return (
		<section id="about" className="py-20 bg-surface">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
					<div className="w-24 h-1 gradient-primary mx-auto mb-8" />
				</div>

				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Left Content */}
					<div className="animate-fade-in-up">
						<h3 className="text-2xl font-semibold mb-6">
							Passionate Developer with a Vision
						</h3>
						<p className="text-lg text-text-secondary mb-6 leading-relaxed">
							I'm a full-stack developer with over 3 years of experience creating digital
							solutions that make a difference. My journey began with a curiosity for how
							things work, and it has evolved into a passion for building elegant,
							efficient applications.
						</p>
						<p className="text-lg text-text-secondary mb-6 leading-relaxed">
							When I'm not coding, you'll find me exploring new technologies, contributing
							to open-source projects, or sharing knowledge with the developer community.
							I believe in continuous learning and staying ahead of industry trends.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button size="lg">Download Resume</Button>
							<Button variant="outline" size="lg">
								Let's Connect
							</Button>
						</div>
					</div>

					{/* Right Content - Highlights Grid */}
					<div className="grid grid-cols-2 gap-6 animate-fade-in">
						{highlights.map((item, index) => {
							const IconComponent = item.icon;
							return (
								<Card
									key={index}
									className="p-6 text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
								>
									<div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
										<IconComponent size={24} className="text-white" />
									</div>
									<h4 className="font-semibold mb-2">{item.title}</h4>
									<p className="text-sm text-text-secondary">{item.description}</p>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
