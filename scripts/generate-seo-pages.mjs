import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://www.huyche.com';
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(currentDirectory, '..');
const outputDirectory = path.join(projectRoot, 'dist');
const projectOutputDirectory = path.join(outputDirectory, 'projects');
const projectImageOutputDirectory = path.join(outputDirectory, 'seo', 'projects');

const projectImageFolders = {
	'1': 'lta-tracking',
	'2': 'lta-superapp',
	'3': 'remoty',
	'4': 'petopia',
	'5': 'pegaxy',
	'6': 'telegram-wallet',
	'7': 'merge-pals',
	'8': 'transmaster',
	'9': 'mhp',
};

const escapeHtml = (value) =>
	String(value)
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');

const createDescription = (description) => {
	const fullDescription = `${description} An engineering case study by Huy Che, Senior Software Engineer.`;
	if (fullDescription.length <= 165) return fullDescription;

	const truncated = fullDescription.slice(0, 164).trimEnd();
	const lastWordBoundary = truncated.lastIndexOf(' ');
	const text = lastWordBoundary > 0 ? truncated.slice(0, lastWordBoundary) : truncated;

	return `${text.trimEnd()}…`;
};

const createProjectHead = ({ id, title, description, imageUrl }) => {
	const projectUrl = `${SITE_URL}/projects/${id}`;
	const vietnameseUrl = `${projectUrl}?lang=vi`;
	const pageTitle = `${title} | Huy Che`;
	const imageAlt = `${title} interface`;

	return `<!-- seo:page:start -->
		<title data-rh="true">${escapeHtml(pageTitle)}</title>
		<meta data-rh="true" name="description" content="${escapeHtml(description)}" />
		<meta data-rh="true" name="author" content="Huy Che" />
		<meta data-rh="true" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
		<link data-rh="true" rel="alternate" hreflang="en" href="${projectUrl}" />
		<link data-rh="true" rel="alternate" hreflang="vi" href="${vietnameseUrl}" />
		<link data-rh="true" rel="alternate" hreflang="x-default" href="${projectUrl}" />

		<meta data-rh="true" property="og:type" content="article" />
		<meta data-rh="true" property="og:site_name" content="Huy Che" />
		<meta data-rh="true" property="og:locale" content="en_US" />
		<meta data-rh="true" property="og:locale:alternate" content="vi_VN" />
		<meta data-rh="true" property="og:url" content="${projectUrl}" />
		<meta data-rh="true" property="og:title" content="${escapeHtml(pageTitle)}" />
		<meta data-rh="true" property="og:description" content="${escapeHtml(description)}" />
		<meta data-rh="true" property="og:image" content="${imageUrl}" />
		<meta data-rh="true" property="og:image:secure_url" content="${imageUrl}" />
		<meta data-rh="true" property="og:image:type" content="image/webp" />
		<meta data-rh="true" property="og:image:alt" content="${escapeHtml(imageAlt)}" />
		<meta data-rh="true" property="article:author" content="${SITE_URL}/#person" />

		<meta data-rh="true" name="twitter:card" content="summary_large_image" />
		<meta data-rh="true" name="twitter:url" content="${projectUrl}" />
		<meta data-rh="true" name="twitter:title" content="${escapeHtml(pageTitle)}" />
		<meta data-rh="true" name="twitter:description" content="${escapeHtml(description)}" />
		<meta data-rh="true" name="twitter:image" content="${imageUrl}" />
		<meta data-rh="true" name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />
		<!-- seo:page:end -->`;
};

const indexHtml = await readFile(path.join(outputDirectory, 'index.html'), 'utf8');
const projectsJson = JSON.parse(
	await readFile(path.join(projectRoot, 'src', 'i18n', 'locales', 'en.json'), 'utf8'),
);
const projects = projectsJson.projects.allProjectsItem;

await mkdir(projectOutputDirectory, { recursive: true });
await mkdir(projectImageOutputDirectory, { recursive: true });

for (const [id, project] of Object.entries(projects)) {
	const imageFolder = projectImageFolders[id];

	if (!imageFolder) {
		throw new Error(`Missing SEO image mapping for project ${id}.`);
	}

	const imageFileName = `${id}.webp`;
	const sourceImagePath = path.join(
		projectRoot,
		'src',
		'assets',
		'projects',
		imageFolder,
		`${imageFolder}-sign.webp`,
	);
	const outputImagePath = path.join(projectImageOutputDirectory, imageFileName);
	const imageUrl = `${SITE_URL}/seo/projects/${imageFileName}`;

	await copyFile(sourceImagePath, outputImagePath);

	const projectHtml = indexHtml.replace(
		/<!-- seo:page:start -->[\s\S]*?<!-- seo:page:end -->/,
		createProjectHead({
			id,
			title: project.title,
			description: createDescription(project.description),
			imageUrl,
		}),
	);

	await writeFile(path.join(projectOutputDirectory, `${id}.html`), projectHtml);
}

console.log(`Generated SEO HTML for ${Object.keys(projects).length} project pages.`);
