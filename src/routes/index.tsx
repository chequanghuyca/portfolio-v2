import Index from '@/pages/Index';
import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import DynamicViewport from '@/components/DynamicViewport';
import { viewportConfigs } from '@/hooks/useViewport';
import { useTranslation } from 'react-i18next';
import {
	getLocalizedUrl,
	getSiteLanguage,
	homeSeo,
	OG_IMAGE_URL,
	SITE_NAME,
} from '@/lib/seo';

export const Route = createFileRoute('/')({
	component: RouteComponent,
});

function RouteComponent() {
	const { i18n } = useTranslation();
	const language = getSiteLanguage(i18n.resolvedLanguage || i18n.language);
	const seo = homeSeo[language];
	const canonicalUrl = getLocalizedUrl('/', language);

	return (
		<DynamicViewport config={viewportConfigs.mobile}>
			<Helmet htmlAttributes={{ lang: language }}>
				<title>{seo.title}</title>
				<meta name="description" content={seo.description} />
				<meta name="author" content="Huy Che" />
				<meta
					name="robots"
					content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
				/>
				<link rel="canonical" href={canonicalUrl} />
				<link rel="alternate" hrefLang="en" href={getLocalizedUrl('/', 'en')} />
				<link rel="alternate" hrefLang="vi" href={getLocalizedUrl('/', 'vi')} />
				<link rel="alternate" hrefLang="x-default" href={getLocalizedUrl('/', 'en')} />
				<link rel="me" href="https://github.com/chequanghuyca" />
				<link rel="me" href="https://www.linkedin.com/in/quang-huy-che-11493311b" />

				<meta property="og:title" content={seo.title} />
				<meta property="og:description" content={seo.ogDescription} />
				<meta property="og:url" content={canonicalUrl} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content={SITE_NAME} />
				<meta property="og:locale" content={seo.locale} />
				<meta property="og:locale:alternate" content={seo.alternateLocale} />
				<meta property="og:image" content={OG_IMAGE_URL} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:alt" content={seo.imageAlt} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={seo.title} />
				<meta name="twitter:description" content={seo.ogDescription} />
				<meta name="twitter:url" content={canonicalUrl} />
				<meta name="twitter:image" content={OG_IMAGE_URL} />
				<meta name="twitter:image:alt" content={seo.imageAlt} />
			</Helmet>
			<Index />
		</DynamicViewport>
	);
}
