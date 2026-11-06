import projectLTA from '@/assets/projects/lta-tracking/lta-tracking-sign.webp';
import projectLTASuperApp from '@/assets/projects/lta-superapp/lta-superapp-sign.webp';
import project1 from '@/assets/projects/remoty/remoty-sign.webp';
import project2 from '@/assets/projects/petopia/petopia-sign.webp';
import project3 from '@/assets/projects/pegaxy/pegaxy-sign.webp';
import project4 from '@/assets/projects/telegram-wallet/telegram-wallet-sign.webp';
import project5 from '@/assets/projects/merge-pals/merge-pals-sign.webp';
import project6 from '@/assets/projects/transmaster/transmaster-sign.webp';
import project7 from '@/assets/projects/mhp/mhp-sign.webp';
import envispeedImage from '@/assets/projects/envispeed/envispeed-sign.webp';
import smartHrmsImage from '@/assets/projects/smarthrms/smarthrms-sign.webp';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

import enProjects from '@/i18n/locales/en.json';
import viProjects from '@/i18n/locales/vi.json';

const projectPriority = new Map([
	['10', 0], // Envispeed
	['11', 1], // Smart HRMS
	['2', 2], // OneStop@LTA
]);

export type Project = {
	id: string;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	liveUrl: string;
	liveLabel?: string;
	secondaryLink?: { label: string; url: string };
	qaUrl?: string;
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
					liveLabel: projectData.liveLabel,
					secondaryLink: projectData.secondaryLink,
					qaUrl: projectData.qaUrl,
					githubUrl: projectData.githubUrl,
					featured: Boolean(projectData?.featured),
				};
			});

			return projects.sort(
				(a, b) =>
					(projectPriority.get(a.id) ?? projectPriority.size) -
					(projectPriority.get(b.id) ?? projectPriority.size),
			);
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
			return projectLTA;
		case '2':
			return projectLTASuperApp;
		case '3':
			return project1;
		case '4':
			return project2;
		case '5':
			return project3;
		case '6':
			return project4;
		case '7':
			return project5;
		case '8':
			return project6;
		case '9':
			return project7;
		case '10':
			return envispeedImage;
		case '11':
			return smartHrmsImage;
		default:
			return projectLTA;
	}
};
