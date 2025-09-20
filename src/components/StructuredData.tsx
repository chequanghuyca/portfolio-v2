import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
	type: 'person' | 'project' | 'organization';
	data: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
	const getStructuredData = () => {
		switch (type) {
			case 'person':
				return {
					'@context': 'https://schema.org',
					'@type': 'Person',
					name: data.name,
					jobTitle: data.jobTitle,
					description: data.description,
					url: data.url,
					sameAs: data.sameAs || [],
					worksFor: data.worksFor,
					alumniOf: data.alumniOf,
					knowsAbout: data.knowsAbout || [],
					hasOccupation: data.hasOccupation,
				};
			case 'project':
				return {
					'@context': 'https://schema.org',
					'@type': 'CreativeWork',
					name: data.title,
					description: data.description,
					creator: {
						'@type': 'Person',
						name: 'Huy Che',
						jobTitle: 'Full Stack Developer',
					},
					dateCreated: data.dateCreated,
					keywords: data.technologies?.join(', '),
					programmingLanguage: data.technologies || [],
					url: data.url,
					image: data.image,
					license: 'MIT',
				};
			case 'organization':
				return {
					'@context': 'https://schema.org',
					'@type': 'Organization',
					name: data.name,
					description: data.description,
					url: data.url,
					logo: data.logo,
				};
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
