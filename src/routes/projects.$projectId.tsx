import { createFileRoute, Link, useParams } from '@tanstack/react-router';
import { getProjectById } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import StructuredData from '@/components/StructuredData';
import DynamicViewport from '@/components/DynamicViewport';
import { viewportConfigs } from '@/hooks/useViewport';

export const Route = createFileRoute('/projects/$projectId')({
	component: RouteComponent,
});

function RouteComponent() {
	const { projectId } = useParams({ from: '/projects/$projectId' });
	const project = getProjectById(projectId);

	if (!project) {
		return (
			<>
				<Helmet>
					<title>Project not found | Huy Che Portfolio</title>
					<meta name="description" content="The requested project could not be found." />
				</Helmet>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
					<div className="mb-6">
						<Link to="/" className="inline-flex items-center text-sm text-primary">
							<ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
						</Link>
					</div>
					<h1 className="text-2xl font-semibold">Project not found</h1>
				</div>
			</>
		);
	}

	return (
		<DynamicViewport config={viewportConfigs.project}>
			<Helmet>
				<title>{project.title} | Huy Che - Full Stack Developer Portfolio</title>
				<meta
					name="description"
					content={`${project.description} - Built by Huy Che, Full Stack Developer specializing in ${project.technologies.join(', ')}.`}
				/>
				<meta
					name="keywords"
					content={`${project.title}, ${project.technologies.join(', ')}, Full Stack Developer, Huy Che, Portfolio, Web Development, Software Engineer`}
				/>
				<link rel="canonical" href={`https://huyche.site/projects/${projectId}`} />

				<meta
					property="og:title"
					content={`${project.title} | Huy Che - Full Stack Developer Portfolio`}
				/>
				<meta
					property="og:description"
					content={`${project.description} - Built by Huy Che, Full Stack Developer.`}
				/>
				<meta property="og:url" content={`https://huyche.site/projects/${projectId}`} />
				<meta property="og:image" content={project.image} />
				<meta property="og:type" content="article" />
				<meta property="og:site_name" content="Huy Che Portfolio" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content={`${project.title} | Huy Che - Full Stack Developer Portfolio`}
				/>
				<meta
					name="twitter:description"
					content={`${project.description} - Built by Huy Che, Full Stack Developer.`}
				/>
				<meta name="twitter:image" content={project.image} />
				<meta name="twitter:url" content={`https://huyche.site/projects/${projectId}`} />
			</Helmet>
			<StructuredData
				type="project"
				data={{
					title: project.title,
					description: project.description,
					technologies: project.technologies,
					url: `https://huyche.site/projects/${projectId}`,
					image: project.image,
					dateCreated: '2024',
				}}
			/>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
				<div className="mb-6">
					<Link to="/" className="inline-flex items-center text-sm text-primary">
						<ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
					</Link>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<img
						src={project.image}
						alt={`${project.title} project screenshot - ${project.description} - Built with ${project.technologies.join(', ')} by Huy Che`}
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
		</DynamicViewport>
	);
}
