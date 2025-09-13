import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: 'Analytics Dashboard',
			description:
				'A comprehensive analytics dashboard built with React and D3.js, featuring real-time data visualization, interactive charts, and responsive design.',
			image: project1,
			technologies: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
			liveUrl: '#',
			githubUrl: '#',
			featured: true,
		},
		{
			id: 2,
			title: 'E-commerce Platform',
			description:
				'Full-stack e-commerce solution with payment integration, admin panel, and modern user interface for seamless shopping experience.',
			image: project2,
			technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
			liveUrl: '#',
			githubUrl: '#',
			featured: true,
		},
		{
			id: 3,
			title: 'Social Media App',
			description:
				'Real-time social media application with chat functionality, post sharing, and user authentication built with modern technologies.',
			image: project3,
			technologies: ['React', 'Firebase', 'Socket.io', 'Material-UI'],
			liveUrl: '#',
			githubUrl: '#',
			featured: false,
		},
	];

	return (
		<section id="projects" className="py-20 bg-surface">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold mb-6">Featured Projects</h2>
					<div className="w-24 h-1 gradient-primary mx-auto mb-8" />
					<p className="text-lg text-text-secondary max-w-2xl mx-auto">
						Here are some of my recent projects that showcase my skills and expertise
					</p>
				</div>

				<div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<Card
							key={project.id}
							className="overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="relative overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
								/>
								{project.featured && (
									<Badge className="absolute top-4 left-4 gradient-primary text-white">
										Featured
									</Badge>
								)}
							</div>

							<div className="p-6">
								<h3 className="text-xl font-semibold mb-3">{project.title}</h3>
								<p className="text-text-secondary mb-4 line-clamp-3">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.technologies.map((tech, techIndex) => (
										<Badge key={techIndex} variant="outline">
											{tech}
										</Badge>
									))}
								</div>

								<div className="flex gap-3">
									<Button size="sm" className="flex-1">
										<ExternalLink size={16} className="mr-2" />
										Live Demo
									</Button>
									<Button variant="outline" size="sm">
										<Github size={16} />
									</Button>
								</div>
							</div>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<Button variant="outline" size="lg">
						View All Projects
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Projects;
