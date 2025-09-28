import { useParams } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import StructuredData from '@/components/StructuredData';
import { useQueryGetProject } from '@/hooks/project/useQueryGetProject';
import { useState } from 'react';

// Import components
import {
	ProjectDetailHeader,
	LoadingSkeleton,
	NotFound,
	ProjectHero,
	ProjectDetailsGrid,
	DetailedDescription,
	ProjectGallery,
} from '@/components/project';
import ImageModal from '@/components/ImageModal';

const ProjectDetail = () => {
	const { projectId } = useParams({ from: '/projects/$projectId' });
	const { data: project, isLoading } = useQueryGetProject(projectId);
	const [isImageModalOpen, setIsImageModalOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleImageClick = (index: number) => {
		setCurrentImageIndex(index);
		setIsImageModalOpen(true);
	};

	if (isLoading) {
		return <LoadingSkeleton />;
	}

	if (!project) {
		return <NotFound />;
	}

	return (
		<>
			<ProjectDetailHeader />
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

			<div className="pt-16 lg:pt-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-16">
					<ProjectHero project={project} />
					<ProjectDetailsGrid project={project} />
					<DetailedDescription project={project} />
					<ProjectGallery project={project} onImageClick={handleImageClick} />
				</div>
			</div>

			{/* Image Modal */}
			<ImageModal
				isOpen={isImageModalOpen}
				onClose={() => setIsImageModalOpen(false)}
				images={project.gallery || []}
				currentIndex={currentImageIndex}
				onNavigate={setCurrentImageIndex}
				projectTitle={project.title}
			/>
		</>
	);
};

export default ProjectDetail;
