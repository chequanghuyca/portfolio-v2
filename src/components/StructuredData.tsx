import { Helmet } from 'react-helmet-async';

interface PersonData {
	name: string;
	jobTitle: string;
	description: string;
	url: string;
	sameAs?: string[];
	worksFor?: string;
	alumniOf?: string;
	knowsAbout?: string[];
	hasOccupation?: string;
}

interface ProjectData {
	title: string;
	description: string;
	dateCreated?: string;
	technologies?: string[];
	url: string;
	image: string;
	liveUrl?: string;
	inLanguage?: string;
}

interface OrganizationData {
	name: string;
	description: string;
	url: string;
	logo: string;
}

interface StructuredDataProps {
	type: 'person' | 'project' | 'organization';
	data: PersonData | ProjectData | OrganizationData;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
	const getStructuredData = () => {
		switch (type) {
			case 'person': {
				const personData = data as PersonData;
				return {
					'@context': 'https://schema.org',
					'@type': 'Person',
					name: personData.name,
					jobTitle: personData.jobTitle,
					description: personData.description,
					url: personData.url,
					sameAs: personData.sameAs || [],
					worksFor: personData.worksFor,
					alumniOf: personData.alumniOf,
					knowsAbout: personData.knowsAbout || [],
					hasOccupation: personData.hasOccupation,
				};
			}
			case 'project': {
				const projectData = data as ProjectData;
				return {
					'@context': 'https://schema.org',
					'@type': 'CreativeWork',
					'@id': `${projectData.url}#project`,
					name: projectData.title,
					description: projectData.description,
					url: projectData.url,
					image: projectData.image,
					inLanguage: projectData.inLanguage,
					creator: {
						'@id': 'https://huyche.site/#person',
					},
					author: {
						'@id': 'https://huyche.site/#person',
					},
					isPartOf: {
						'@id': 'https://huyche.site/#website',
					},
					dateCreated: projectData.dateCreated,
					keywords: projectData.technologies
						?.map((technology) => technology.replace(/^#/, ''))
						.join(', '),
					about: projectData.technologies?.map((technology) => ({
						'@type': 'Thing',
						name: technology.replace(/^#/, ''),
					})),
					sameAs:
						projectData.liveUrl && projectData.liveUrl !== '#'
							? projectData.liveUrl
							: undefined,
				};
			}
			case 'organization': {
				const orgData = data as OrganizationData;
				return {
					'@context': 'https://schema.org',
					'@type': 'Organization',
					name: orgData.name,
					description: orgData.description,
					url: orgData.url,
					logo: orgData.logo,
				};
			}
			default:
				return {};
		}
	};

	return (
		<Helmet>
			<script type="application/ld+json">
				{JSON.stringify(getStructuredData(), null, 2)}
			</script>
		</Helmet>
	);
};

export default StructuredData;
