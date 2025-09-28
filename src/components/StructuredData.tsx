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
	dateCreated: string;
	technologies?: string[];
	url: string;
	image: string;
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
					name: projectData.title,
					description: projectData.description,
					creator: {
						'@type': 'Person',
						name: 'Chế Quang Huy',
						alternateName: ['Che Quang Huy', 'Huy Che'],
						jobTitle: 'Full Stack Developer',
					},
					dateCreated: projectData.dateCreated,
					keywords: projectData.technologies?.join(', '),
					programmingLanguage: projectData.technologies || [],
					url: projectData.url,
					image: projectData.image,
					license: 'MIT',
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
