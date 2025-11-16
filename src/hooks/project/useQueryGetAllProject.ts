import project1 from '@/assets/projects/remoty/remoty-sign.png';
import project2 from '@/assets/projects/petopia/petopia-sign.png';
import project3 from '@/assets/projects/pegaxy/pegaxy-sign.png';
import project4 from '@/assets/projects/telegram-wallet/telegram-wallet-sign.png';
import project5 from '@/assets/projects/merge-pals/merge-pals-sign.png';
import project6 from '@/assets/projects/transmaster/transmaster-sign.png';
import project7 from '@/assets/projects/mhp/mhp-sign.png';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

import enProjects from '@/i18n/locales/en.json';
import viProjects from '@/i18n/locales/vi.json';

export type Project = {
	id: string;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	liveUrl: string;
	githubUrl?: string;
	featured: boolean;
};

export const useQueryGetProjects = (
	args?: {
		size?: number | 'all';
	},
	options?: Pick<UseQueryOptions<Project[]>, 'enabled'>,
) => {
	const { size = 'all' } = args || {};
	const { i18n } = useTranslation();

	const response = useQuery<Project[]>({
		...options,
		queryKey: ['projects', i18n.language],
		queryFn: () => {
			const currentLang = i18n.language || 'en';
			let projectsData: Record<string, Project>;

			if (currentLang === 'vi') {
				projectsData = viProjects.projects.allProjectsItem as unknown as Record<
					string,
					Project
				>;
			} else {
				projectsData = enProjects.projects.allProjectsItem as unknown as Record<
					string,
					Project
				>;
			}

			const projects: Project[] = Object.entries(projectsData).map(([id, project]) => {
				const projectData = project as Project;
				return {
					id,
					title: projectData?.title || 'Untitled Project',
					description: projectData?.description || 'No description available',
					image: getProjectImage(id),
					technologies: Array.isArray(projectData?.technologies)
						? projectData.technologies
						: [],
					liveUrl: projectData?.liveUrl || '#',
					githubUrl: projectData.githubUrl,
					featured: Boolean(projectData?.featured),
				};
			});

			return projects; // Return all projects, filter by size in component
		},
		staleTime: 1000 * 60 * 5, // Cache for 5 minutes
		gcTime: 1000 * 60 * 10, // Keep in cache for 10 minutes (renamed from cacheTime in newer versions)
	});

	// Memoize the filtered data to prevent unnecessary re-renders
	const filteredData = useMemo(() => {
		if (!response.data) return undefined;
		return size === 'all' ? response.data : response.data.slice(0, size as number);
	}, [response.data, size]);

	return {
		data: filteredData,
		isLoading: response.isLoading,
		refetch: response.refetch,
	};
};

// Helper function to get project image based on ID
const getProjectImage = (id: string): string => {
	switch (id) {
		case '1':
			return project1;
		case '2':
			return project2;
		case '3':
			return project3;
		case '4':
			return project4;
		case '5':
			return project5;
		case '6':
			return project6;
		case '7':
			return project7;
		default:
			return project5;
	}
};
