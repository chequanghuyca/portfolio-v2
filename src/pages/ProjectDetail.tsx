import { useState } from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import TechCursor from '@/components/TechCursor';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/home/Footer';
import ImageModal from '@/components/ImageModal';
import { useQueryGetProject } from '@/hooks/project/useQueryGetProject';
import { getLocalizedUrl, getSiteLanguage, SITE_NAME, SITE_URL } from '@/lib/seo';

import {
	ProjectDetailHeader,
	LoadingSkeleton,
	NotFound,
	ProjectHero,
	ProjectDetailsGrid,
	DetailedDescription,
	ProjectGallery,
} from '@/components/project';

const ProjectDetail = () => {
	const { projectId } = useParams({ from: '/projects/$projectId' });
	const { data: project, isLoading } = useQueryGetProject(projectId);
	const { t, i18n } = useTranslation();
	const [isImageModalOpen, setIsImageModalOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const isVietnamese = (i18n.resolvedLanguage || i18n.language).startsWith('vi');

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
		<div className="dark portfolio-shell min-h-screen w-full overflow-x-clip bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
			<TechCursor />
			<ProjectDetailHeader project={project} />

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
					qaUrl: project.qaUrl,
					inLanguage: language,
				}}
			/>

			<main id="main-content" className="relative z-10 pt-28 sm:pt-36 pb-20">
				<div className="hero-grid absolute inset-0 opacity-40 pointer-events-none" />
				<div className="hero-aurora hero-aurora-left" />
				<div className="hero-aurora hero-aurora-right" />

				<div className="section-container relative z-10">
					{/* Navigation Breadcrumb / Back Link */}
					<div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
						<Link
							to="/"
							search={isVietnamese ? { lang: 'vi' } : {}}
							className="group inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-[0.16em] text-white/50 transition-colors hover:text-primary"
						>
							<ArrowLeft
								size={14}
								className="transition-transform group-hover:-translate-x-1"
							/>
							<span>{t('common.backToHome')}</span>
						</Link>
						<span className="font-mono-code text-[10px] uppercase tracking-[0.2em] text-primary">
							Case Study / {String(projectId).padStart(2, '0')}
						</span>
					</div>

					<ProjectHero project={project} onImageClick={() => handleImageClick(0)} />
					<ProjectDetailsGrid project={project} />
					<DetailedDescription project={project} />
					<ProjectGallery project={project} onImageClick={handleImageClick} />
				</div>
			</main>

			<Footer />
			<ScrollToTop />

			{/* Image Modal */}
			<ImageModal
				isOpen={isImageModalOpen}
				onClose={() => setIsImageModalOpen(false)}
				images={project.gallery || []}
				currentIndex={currentImageIndex}
				onNavigate={setCurrentImageIndex}
				projectTitle={project.title}
			/>
		</div>
	);
};

export default ProjectDetail;
