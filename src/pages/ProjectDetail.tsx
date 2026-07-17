import { useParams } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import StructuredData from '@/components/StructuredData';
import { useQueryGetProject } from '@/hooks/project/useQueryGetProject';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocalizedUrl, getSiteLanguage, SITE_NAME, SITE_URL } from '@/lib/seo';

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
	const { i18n } = useTranslation();
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
		return (
			<>
				<Helmet>
					<title>Project not found | Huy Che</title>
					<meta name="robots" content="noindex, follow" />
				</Helmet>
				<NotFound />
			</>
		);
	}

	const language = getSiteLanguage(i18n.resolvedLanguage || i18n.language);
	const projectPath = `/projects/${projectId}`;
	const canonicalUrl = getLocalizedUrl(projectPath, language);
	const imageUrl = new URL(project.image, SITE_URL).toString();
	const seoTitle = `${project.title} | Huy Che`;
	const descriptionSuffix =
		language === 'vi'
			? 'Case study kỹ thuật bởi Huy Che, Senior Software Engineer.'
			: 'An engineering case study by Huy Che, Senior Software Engineer.';
	const fullDescription = `${project.description} ${descriptionSuffix}`;
	const seoDescription =
		fullDescription.length > 165
			? `${fullDescription.slice(0, 162).trimEnd()}…`
			: fullDescription;

	return (
		<>
			<ProjectDetailHeader />
			<Helmet htmlAttributes={{ lang: language }}>
				<title>{seoTitle}</title>
				<meta name="description" content={seoDescription} />
				<meta name="author" content="Huy Che" />
				<meta
					name="robots"
					content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
				/>
				<link rel="canonical" href={canonicalUrl} />
				<link rel="alternate" hrefLang="en" href={getLocalizedUrl(projectPath, 'en')} />
				<link rel="alternate" hrefLang="vi" href={getLocalizedUrl(projectPath, 'vi')} />
				<link
					rel="alternate"
					hrefLang="x-default"
					href={getLocalizedUrl(projectPath, 'en')}
				/>

				<meta property="og:title" content={seoTitle} />
				<meta property="og:description" content={seoDescription} />
				<meta property="og:url" content={canonicalUrl} />
				<meta property="og:image" content={imageUrl} />
				<meta property="og:image:alt" content={`${project.title} interface`} />
				<meta property="og:type" content="article" />
				<meta property="og:site_name" content={SITE_NAME} />
				<meta property="og:locale" content={language === 'vi' ? 'vi_VN' : 'en_US'} />
				<meta
					property="og:locale:alternate"
					content={language === 'vi' ? 'en_US' : 'vi_VN'}
				/>
				<meta property="article:author" content={`${SITE_URL}/#person`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={seoTitle} />
				<meta name="twitter:description" content={seoDescription} />
				<meta name="twitter:image" content={imageUrl} />
				<meta name="twitter:image:alt" content={`${project.title} interface`} />
				<meta name="twitter:url" content={canonicalUrl} />
			</Helmet>
			<StructuredData
				type="project"
				data={{
					title: project.title,
					description: project.description,
					technologies: project.technologies,
					url: canonicalUrl,
					image: imageUrl,
					liveUrl: project.liveUrl,
					inLanguage: language,
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
