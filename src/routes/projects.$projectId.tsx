import { createFileRoute, Link, useParams } from '@tanstack/react-router';
import { getProjectById } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/projects/$projectId')({
	component: RouteComponent,
});

function RouteComponent() {
	const { projectId } = useParams({ from: '/projects/$projectId' });
	const project = getProjectById(projectId);

	if (!project) {
		return (
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
				<div className="mb-6">
					<Link to="/" className="inline-flex items-center text-sm text-primary">
						<ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
					</Link>
				</div>
				<h1 className="text-2xl font-semibold">Project not found</h1>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
			<div className="mb-6">
				<Link to="/" className="inline-flex items-center text-sm text-primary">
					<ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
				</Link>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<img
					src={project.image}
					alt={project.title}
					className="w-full rounded-lg object-cover max-h-96"
				/>
				<div>
					<h1 className="text-3xl font-bold mb-4">{project.title}</h1>
					<p className="text-text-secondary mb-6">{project.description}</p>
					<div className="flex flex-wrap gap-2 mb-6">
						{project.technologies.map((t) => (
							<Badge key={t} variant="outline">
								{t}
							</Badge>
						))}
					</div>
					<div className="flex gap-3">
						<a href={project.liveUrl} target="_blank" rel="noreferrer">
							<Button>
								<ExternalLink size={16} className="mr-2" /> Live Demo
							</Button>
						</a>
						<a href={project.githubUrl} target="_blank" rel="noreferrer">
							<Button variant="outline">
								<Github size={16} className="mr-2" /> GitHub
							</Button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
