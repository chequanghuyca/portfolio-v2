import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import enProjects from '@/i18n/locales/en.json';
import viProjects from '@/i18n/locales/vi.json';

export type ProjectDetail = {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	image: string;
	technologies: string[];
	liveUrl: string;
	githubUrl?: string;
	featured: boolean;
	// Additional fields for project detail
	challenges: string[];
	features: string[];
	role: string;
	duration: string;
	teamSize: string;
	gallery?: string[];
	videoUrl?: string;
};

export const useQueryGetProject = (
	projectId: string,
	options?: Pick<UseQueryOptions<ProjectDetail | null>, 'enabled'>,
) => {
	const { i18n } = useTranslation();

	const response = useQuery<ProjectDetail | null>({
		...options,
		queryKey: ['project', projectId, i18n.language],
		queryFn: () => {
			const currentLang = i18n.language || 'en';
			let projectsData: Record<string, any>;

			if (currentLang === 'vi') {
				projectsData = viProjects.projects.allProjectsItem as unknown as Record<
					string,
					any
				>;
			} else {
				projectsData = enProjects.projects.allProjectsItem as unknown as Record<
					string,
					any
				>;
			}

			const projectData = projectsData[projectId];
			if (!projectData) return null;

			// Mock additional data for project detail
			const mockDetailData = getMockProjectDetail(projectId, currentLang);

			const project: ProjectDetail = {
				id: projectId,
				title: projectData?.title || 'Untitled Project',
				description: projectData?.description || 'No description available',
				longDescription: mockDetailData.longDescription,
				image: getProjectImage(projectId),
				technologies: Array.isArray(projectData?.technologies)
					? projectData.technologies
					: [],
				liveUrl: projectData?.liveUrl || '#',
				githubUrl: projectData.githubUrl,
				featured: Boolean(projectData?.featured),
				challenges: mockDetailData.challenges,
				features: mockDetailData.features,
				role: mockDetailData.role,
				duration: mockDetailData.duration,
				teamSize: mockDetailData.teamSize,
				gallery: mockDetailData.gallery,
				videoUrl: mockDetailData.videoUrl,
			};

			return project;
		},
		staleTime: 1000 * 60 * 5, // Cache for 5 minutes
		gcTime: 1000 * 60 * 10, // Keep in cache for 10 minutes
	});

	return {
		data: response.data,
		isLoading: response.isLoading,
		error: response.error,
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
			return project3;
		default:
			return project1;
	}
};

// Mock data for project details
const getMockProjectDetail = (projectId: string, language: string) => {
	const isVietnamese = language === 'vi';

	const mockData: Record<string, any> = {
		'1': {
			longDescription: isVietnamese
				? 'Đây là một nền tảng thương mại điện tử toàn diện được phát triển với kiến trúc hiện đại và khả năng mở rộng cao. Dự án này bao gồm hệ thống quản lý sản phẩm, giỏ hàng, thanh toán, và dashboard quản trị viên. Tôi đã áp dụng các công nghệ tiên tiến để đảm bảo hiệu suất tối ưu và trải nghiệm người dùng mượt mà.'
				: 'This is a comprehensive e-commerce platform developed with modern architecture and high scalability. The project includes product management system, shopping cart, payment processing, and admin dashboard. I applied cutting-edge technologies to ensure optimal performance and smooth user experience.',
			challenges: isVietnamese
				? [
						'Xử lý lượng truy cập lớn và tối ưu hóa hiệu suất database',
						'Triển khai hệ thống thanh toán bảo mật và đáng tin cậy',
						'Đảm bảo responsive design trên mọi thiết bị',
						'Quản lý state phức tạp với nhiều sản phẩm và người dùng',
					]
				: [
						'Handling high traffic and optimizing database performance',
						'Implementing secure and reliable payment system',
						'Ensuring responsive design across all devices',
						'Managing complex state with multiple products and users',
					],
			features: isVietnamese
				? [
						'Hệ thống quản lý sản phẩm với tìm kiếm và lọc nâng cao',
						'Giỏ hàng thông minh với tính năng lưu trữ local',
						'Tích hợp thanh toán Stripe và PayPal',
						'Dashboard quản trị với thống kê real-time',
						'Hệ thống đánh giá và bình luận sản phẩm',
						'Responsive design tối ưu cho mobile',
					]
				: [
						'Advanced product management with search and filtering',
						'Smart shopping cart with local storage',
						'Stripe and PayPal payment integration',
						'Admin dashboard with real-time statistics',
						'Product review and rating system',
						'Mobile-optimized responsive design',
					],
			role: isVietnamese ? 'Full Stack Developer' : 'Full Stack Developer',
			duration: isVietnamese ? '3 tháng' : '3 months',
			teamSize: isVietnamese ? '1 người' : '1 person',
			gallery: [project1, project2, project3],
			videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		},
		'2': {
			longDescription: isVietnamese
				? 'Một ứng dụng quản lý tác vụ hiện đại với giao diện trực quan và tính năng cộng tác nhóm. Ứng dụng này giúp các team làm việc hiệu quả hơn với khả năng quản lý dự án, theo dõi tiến độ, và giao tiếp trong nhóm.'
				: 'A modern task management application with intuitive interface and team collaboration features. This app helps teams work more efficiently with project management, progress tracking, and team communication capabilities.',
			challenges: isVietnamese
				? [
						'Thiết kế UX/UI tối ưu cho workflow phức tạp',
						'Xây dựng hệ thống real-time collaboration',
						'Quản lý permissions và roles phức tạp',
						'Tối ưu hóa performance cho large datasets',
					]
				: [
						'Designing optimal UX/UI for complex workflows',
						'Building real-time collaboration system',
						'Managing complex permissions and roles',
						'Optimizing performance for large datasets',
					],
			features: isVietnamese
				? [
						'Kanban board với drag & drop functionality',
						'Real-time collaboration và notifications',
						'File sharing và document management',
						'Time tracking và reporting',
						'Mobile app với offline support',
						'Integration với các tools phổ biến',
					]
				: [
						'Kanban board with drag & drop functionality',
						'Real-time collaboration and notifications',
						'File sharing and document management',
						'Time tracking and reporting',
						'Mobile app with offline support',
						'Integration with popular tools',
					],
			role: isVietnamese ? 'Lead Developer' : 'Lead Developer',
			duration: isVietnamese ? '4 tháng' : '4 months',
			teamSize: isVietnamese ? '3 người' : '3 people',
			gallery: [project2, project1, project3],
		},
		'3': {
			longDescription: isVietnamese
				? 'Ứng dụng mạng xã hội tập trung vào chia sẻ nội dung sáng tạo và kết nối cộng đồng. Với focus vào user-generated content, ứng dụng này mang đến trải nghiệm tương tác phong phú và khuyến khích sáng tạo.'
				: 'A social media application focused on creative content sharing and community building. With emphasis on user-generated content, this app provides rich interactive experiences and encourages creativity.',
			challenges: isVietnamese
				? [
						'Xử lý và tối ưu hóa media files lớn',
						'Xây dựng algorithm recommendation hiệu quả',
						'Đảm bảo content moderation và safety',
						'Scaling để handle millions of users',
					]
				: [
						'Processing and optimizing large media files',
						'Building efficient recommendation algorithms',
						'Ensuring content moderation and safety',
						'Scaling to handle millions of users',
					],
			features: isVietnamese
				? [
						'Upload và edit media với filters và effects',
						'AI-powered content recommendation',
						'Live streaming và real-time chat',
						'Monetization features cho creators',
						'Advanced analytics và insights',
						'Cross-platform mobile apps',
					]
				: [
						'Media upload and editing with filters and effects',
						'AI-powered content recommendation',
						'Live streaming and real-time chat',
						'Monetization features for creators',
						'Advanced analytics and insights',
						'Cross-platform mobile apps',
					],
			role: isVietnamese ? 'Senior Full Stack Developer' : 'Senior Full Stack Developer',
			duration: isVietnamese ? '6 tháng' : '6 months',
			teamSize: isVietnamese ? '5 người' : '5 people',
			gallery: [project3, project1, project2],
			videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		},
	};

	return mockData[projectId] || mockData['1'];
};
