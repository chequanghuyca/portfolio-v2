export const SITE_URL = 'https://www.huyche.com';
export const SITE_NAME = 'Huy Che';
export const OG_IMAGE_URL = `${SITE_URL}/og.png`;

export type SiteLanguage = 'en' | 'vi';

export const getSiteLanguage = (language?: string): SiteLanguage =>
	language?.toLowerCase().startsWith('vi') ? 'vi' : 'en';

export const getLocalizedUrl = (path: string, language: SiteLanguage) => {
	const url = new URL(path, SITE_URL);

	if (language === 'vi') {
		url.searchParams.set('lang', 'vi');
	}

	return url.toString();
};

export const createSeoDescription = (description: string, maxLength = 165) => {
	if (description.length <= maxLength) return description;

	const truncated = description.slice(0, maxLength - 1).trimEnd();
	const lastWordBoundary = truncated.lastIndexOf(' ');
	const text = lastWordBoundary > 0 ? truncated.slice(0, lastWordBoundary) : truncated;

	return `${text.trimEnd()}…`;
};

export const homeSeo = {
	en: {
		title: 'Huy Che | Senior Software Engineer — Web, Systems & Web3',
		description:
			'Senior Software Engineer in Ho Chi Minh City building production-ready web products, scalable systems, Web3 infrastructure, and AI-assisted workflows.',
		ogDescription:
			'Production-ready digital products, scalable systems, Web3 infrastructure, and thoughtful engineering by Huy Che.',
		imageAlt: 'Huy Che — Senior Software Engineer portfolio',
		locale: 'en_US',
		alternateLocale: 'vi_VN',
	},
	vi: {
		title: 'Chế Quang Huy | Senior Software Engineer tại Việt Nam',
		description:
			'Senior Software Engineer tại TP. Hồ Chí Minh, chuyên xây dựng sản phẩm web, hệ thống mở rộng, hạ tầng Web3 và quy trình AI cho production.',
		ogDescription:
			'Portfolio của Chế Quang Huy: sản phẩm số, hệ thống có khả năng mở rộng, hạ tầng Web3 và kỹ thuật phần mềm chỉn chu.',
		imageAlt: 'Portfolio Senior Software Engineer của Chế Quang Huy',
		locale: 'vi_VN',
		alternateLocale: 'en_US',
	},
} as const;
