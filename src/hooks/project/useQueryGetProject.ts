import mergePalsImage from '@/assets/projects/merge-pals/merge-pals-sign.webp';
import mhpImage from '@/assets/projects/mhp/mhp-sign.webp';
import pegaxyImage from '@/assets/projects/pegaxy/pegaxy-sign.webp';
import petopiaImage from '@/assets/projects/petopia/petopia-sign.webp';
import remotyImage from '@/assets/projects/remoty/remoty-sign.webp';
import remotySecondaryImage from '@/assets/projects/remoty/remoty-2.webp';
import telegramWalletImage from '@/assets/projects/telegram-wallet/telegram-wallet-sign.webp';
import transmasterImage from '@/assets/projects/transmaster/transmaster-sign.webp';
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
	challenges: string[];
	features: string[];
	role: string;
	duration: string;
	teamSize: string;
	gallery?: string[];
	videoUrl?: string;
};

type ProjectCopy = Pick<
	ProjectDetail,
	'longDescription' | 'challenges' | 'features' | 'role' | 'duration' | 'teamSize'
>;

type LocalizedProjectDetail = {
	en: ProjectCopy;
	vi: ProjectCopy;
	gallery: string[];
};

const projectImages: Record<string, string> = {
	'1': remotyImage,
	'2': petopiaImage,
	'3': pegaxyImage,
	'4': telegramWalletImage,
	'5': mergePalsImage,
	'6': transmasterImage,
	'7': mhpImage,
};

const projectDetails: Record<string, LocalizedProjectDetail> = {
	'1': {
		en: {
			longDescription:
				'Remoty is a cross-platform product for remote-team productivity and activity oversight. The solution combines a Tauri desktop application with a React interface and AI-assisted analytics so operational signals can be reviewed in one reliable workflow.',
			challenges: [
				'Keeping desktop activity capture reliable across platforms',
				'Turning raw activity signals into useful operational insights',
				'Balancing monitoring depth with a clear, responsive interface',
			],
			features: [
				'Productivity and activity tracking',
				'Remote-team oversight dashboard',
				'AI-assisted productivity analytics',
				'Cross-platform desktop delivery with Tauri',
			],
			role: 'Software Engineer',
			duration: 'Production project',
			teamSize: 'Product team',
		},
		vi: {
			longDescription:
				'Remoty là sản phẩm đa nền tảng hỗ trợ theo dõi năng suất và hoạt động của đội ngũ làm việc từ xa. Giải pháp kết hợp ứng dụng desktop Tauri, giao diện React và phân tích có hỗ trợ AI trong một quy trình vận hành rõ ràng.',
			challenges: [
				'Duy trì khả năng ghi nhận hoạt động ổn định trên nhiều nền tảng',
				'Chuyển dữ liệu hoạt động thành thông tin vận hành hữu ích',
				'Cân bằng độ sâu giám sát với giao diện rõ ràng, mượt mà',
			],
			features: [
				'Theo dõi năng suất và hoạt động',
				'Dashboard quản lý đội ngũ từ xa',
				'Phân tích năng suất có hỗ trợ AI',
				'Ứng dụng desktop đa nền tảng với Tauri',
			],
			role: 'Software Engineer',
			duration: 'Dự án production',
			teamSize: 'Product team',
		},
		gallery: [remotyImage, remotySecondaryImage],
	},
	'2': {
		en: {
			longDescription:
				'Petopia Marketplace enables users to buy, sell, and auction game assets through Web3 wallet flows. The frontend connects marketplace discovery, GraphQL data, wallet authentication, and smart-contract transactions in a cohesive product experience.',
			challenges: [
				'Coordinating wallet state with marketplace application state',
				'Presenting blockchain transaction states clearly to users',
				'Keeping asset discovery responsive as data changes',
			],
			features: [
				'NFT listings, sales, and auctions',
				'MetaMask and WalletConnect integration',
				'GraphQL-powered marketplace data',
				'Smart-contract transaction flows',
			],
			role: 'Software Engineer',
			duration: 'Production project',
			teamSize: 'Cross-functional team',
		},
		vi: {
			longDescription:
				'Petopia Marketplace cho phép người dùng mua, bán và đấu giá tài sản game thông qua các luồng ví Web3. Frontend kết nối khám phá marketplace, dữ liệu GraphQL, xác thực ví và giao dịch smart contract trong một trải nghiệm thống nhất.',
			challenges: [
				'Đồng bộ trạng thái ví với trạng thái ứng dụng marketplace',
				'Hiển thị trạng thái giao dịch blockchain rõ ràng cho người dùng',
				'Duy trì trải nghiệm tìm tài sản nhanh khi dữ liệu thay đổi',
			],
			features: [
				'Đăng bán, mua và đấu giá NFT',
				'Tích hợp MetaMask và WalletConnect',
				'Dữ liệu marketplace qua GraphQL',
				'Luồng giao dịch smart contract',
			],
			role: 'Software Engineer',
			duration: 'Dự án production',
			teamSize: 'Đội ngũ đa chức năng',
		},
		gallery: [petopiaImage],
	},
	'3': {
		en: {
			longDescription:
				'Pegaxy Marketplace is a Web3 asset marketplace for discovering, buying, selling, and auctioning game assets. The product combines a Next.js interface, GraphQL data access, wallet connectivity, and smart-contract interactions.',
			challenges: [
				'Managing wallet connections and network changes safely',
				'Communicating multi-step blockchain transactions',
				'Keeping marketplace data and UI state synchronized',
			],
			features: [
				'Asset discovery and marketplace listings',
				'Buy, sell, and auction workflows',
				'Web3 wallet connectivity',
				'GraphQL and Apollo Client data layer',
			],
			role: 'Software Engineer',
			duration: 'Production project',
			teamSize: 'Cross-functional team',
		},
		vi: {
			longDescription:
				'Pegaxy Marketplace là marketplace Web3 để khám phá, mua, bán và đấu giá tài sản game. Sản phẩm kết hợp giao diện Next.js, lớp dữ liệu GraphQL, kết nối ví và tương tác smart contract.',
			challenges: [
				'Quản lý an toàn kết nối ví và thay đổi network',
				'Truyền đạt rõ ràng các bước của giao dịch blockchain',
				'Đồng bộ dữ liệu marketplace với trạng thái giao diện',
			],
			features: [
				'Khám phá tài sản và listing trên marketplace',
				'Luồng mua, bán và đấu giá',
				'Kết nối ví Web3',
				'Lớp dữ liệu GraphQL và Apollo Client',
			],
			role: 'Software Engineer',
			duration: 'Dự án production',
			teamSize: 'Đội ngũ đa chức năng',
		},
		gallery: [pegaxyImage],
	},
	'4': {
		en: {
			longDescription:
				'Mirai Telegram Wallet brings wallet management and Web3 transaction flows into Telegram. The experience is designed around concise bot interactions while preserving the feedback users need when completing blockchain operations.',
			challenges: [
				'Adapting wallet workflows to Telegram interaction patterns',
				'Handling transaction state and failure feedback clearly',
				'Keeping sensitive wallet operations predictable and secure',
			],
			features: [
				'Telegram bot-based wallet experience',
				'Web3 wallet management',
				'Blockchain transaction workflows',
				'Smart-contract integration',
			],
			role: 'Software Engineer',
			duration: 'Production project',
			teamSize: 'Product team',
		},
		vi: {
			longDescription:
				'Mirai Telegram Wallet đưa chức năng quản lý ví và giao dịch Web3 vào Telegram. Trải nghiệm được thiết kế theo luồng tương tác ngắn gọn của bot nhưng vẫn cung cấp đầy đủ phản hồi khi người dùng thực hiện thao tác blockchain.',
			challenges: [
				'Điều chỉnh quy trình ví theo mô hình tương tác Telegram',
				'Hiển thị rõ trạng thái và lỗi giao dịch',
				'Duy trì thao tác ví nhạy cảm theo cách an toàn, dễ dự đoán',
			],
			features: [
				'Trải nghiệm ví thông qua Telegram bot',
				'Quản lý ví Web3',
				'Luồng giao dịch blockchain',
				'Tích hợp smart contract',
			],
			role: 'Software Engineer',
			duration: 'Dự án production',
			teamSize: 'Product team',
		},
		gallery: [telegramWalletImage],
	},
	'5': {
		en: {
			longDescription:
				'Merge Pals Play to Whitelist connects a game experience with a Web3 access flow. Players complete the product journey to qualify for whitelist access, with the application coordinating game state and smart-contract-backed eligibility.',
			challenges: [
				'Connecting gameplay progress with whitelist eligibility',
				'Keeping Web3 actions understandable for game users',
				'Delivering a fast experience across device sizes',
			],
			features: [
				'Play-to-whitelist user journey',
				'Web3 wallet interaction',
				'Smart-contract-backed access flow',
				'Responsive Next.js interface',
			],
			role: 'Software Engineer',
			duration: 'Production project',
			teamSize: 'Product team',
		},
		vi: {
			longDescription:
				'Merge Pals Play to Whitelist kết nối trải nghiệm game với quy trình cấp quyền Web3. Người chơi hoàn thành hành trình trong sản phẩm để đủ điều kiện vào whitelist, còn ứng dụng đồng bộ trạng thái game với điều kiện từ smart contract.',
			challenges: [
				'Kết nối tiến trình chơi với điều kiện whitelist',
				'Làm cho thao tác Web3 dễ hiểu với người chơi',
				'Duy trì trải nghiệm nhanh trên nhiều kích thước thiết bị',
			],
			features: [
				'Hành trình play-to-whitelist',
				'Tương tác ví Web3',
				'Quy trình cấp quyền qua smart contract',
				'Giao diện Next.js responsive',
			],
			role: 'Software Engineer',
			duration: 'Dự án production',
			teamSize: 'Product team',
		},
		gallery: [mergePalsImage],
	},
	'6': {
		en: {
			longDescription:
				'TransMaster is an independent learning product for practicing English translation at sentence and paragraph level. A Next.js frontend works with Go services, MongoDB, and Gemini-assisted feedback, deployed through Docker and Cloudflare.',
			challenges: [
				'Producing useful AI feedback without interrupting practice flow',
				'Designing APIs for repeatable translation exercises',
				'Operating the application through a practical cloud setup',
			],
			features: [
				'Sentence and paragraph translation practice',
				'Gemini-assisted learning feedback',
				'Go API and MongoDB persistence',
				'Docker and Cloudflare deployment workflow',
			],
			role: 'Product Engineer',
			duration: 'Independent project',
			teamSize: 'Solo project',
		},
		vi: {
			longDescription:
				'TransMaster là sản phẩm cá nhân giúp luyện dịch tiếng Anh ở cấp độ câu và đoạn văn. Frontend Next.js kết nối với dịch vụ Go, MongoDB và phản hồi hỗ trợ bởi Gemini, được triển khai bằng Docker và Cloudflare.',
			challenges: [
				'Tạo phản hồi AI hữu ích mà không làm gián đoạn quá trình luyện tập',
				'Thiết kế API cho các bài luyện dịch có thể lặp lại',
				'Vận hành ứng dụng với hạ tầng cloud thực dụng',
			],
			features: [
				'Luyện dịch câu và đoạn văn',
				'Phản hồi học tập có hỗ trợ Gemini',
				'Go API và lưu trữ MongoDB',
				'Quy trình deploy với Docker và Cloudflare',
			],
			role: 'Product Engineer',
			duration: 'Dự án cá nhân',
			teamSize: 'Cá nhân',
		},
		gallery: [transmasterImage],
	},
	'7': {
		en: {
			longDescription:
				'MHP Technology is a corporate website delivered as a freelance engagement. The implementation focuses on clear company information, responsive presentation, contact protection, and a maintainable web stack backed by Go and MongoDB.',
			challenges: [
				'Translating company content into a clear information structure',
				'Protecting public contact flows from automated abuse',
				'Maintaining reliable delivery across frontend and backend',
			],
			features: [
				'Responsive corporate website',
				'Company and service presentation',
				'Google reCAPTCHA-protected contact flow',
				'Cloudflare-backed delivery',
			],
			role: 'Freelance Full-Stack Engineer',
			duration: 'Freelance project',
			teamSize: 'Client collaboration',
		},
		vi: {
			longDescription:
				'MHP Technology là website doanh nghiệp được thực hiện theo hình thức freelance. Phần triển khai tập trung vào thông tin công ty rõ ràng, giao diện responsive, bảo vệ luồng liên hệ và stack web dễ bảo trì với Go và MongoDB.',
			challenges: [
				'Chuyển nội dung doanh nghiệp thành cấu trúc thông tin rõ ràng',
				'Bảo vệ luồng liên hệ công khai khỏi truy cập tự động',
				'Duy trì khả năng vận hành ổn định giữa frontend và backend',
			],
			features: [
				'Website doanh nghiệp responsive',
				'Trình bày thông tin công ty và dịch vụ',
				'Luồng liên hệ được bảo vệ bởi Google reCAPTCHA',
				'Phân phối nội dung qua Cloudflare',
			],
			role: 'Freelance Full-Stack Engineer',
			duration: 'Dự án freelance',
			teamSize: 'Phối hợp với khách hàng',
		},
		gallery: [mhpImage],
	},
};

export const useQueryGetProject = (
	projectId: string,
	options?: Pick<UseQueryOptions<ProjectDetail | null>, 'enabled'>,
) => {
	const { i18n } = useTranslation();
	const language = i18n.resolvedLanguage?.startsWith('vi') ? 'vi' : 'en';

	const response = useQuery<ProjectDetail | null>({
		...options,
		queryKey: ['project', projectId, language],
		queryFn: () => {
			const projectsData =
				language === 'vi'
					? viProjects.projects.allProjectsItem
					: enProjects.projects.allProjectsItem;
			const projectData = projectsData[projectId as keyof typeof projectsData];
			const detailData = projectDetails[projectId];

			if (!projectData || !detailData) return null;

			return {
				id: projectId,
				title: projectData.title,
				description: projectData.description,
				image: projectImages[projectId],
				technologies: projectData.technologies,
				liveUrl: projectData.liveUrl,
				githubUrl: 'githubUrl' in projectData ? projectData.githubUrl : undefined,
				featured: projectData.featured,
				...detailData[language],
				gallery: detailData.gallery,
			};
		},
		staleTime: 1000 * 60 * 5,
		gcTime: 1000 * 60 * 10,
	});

	return {
		data: response.data,
		isLoading: response.isLoading,
		error: response.error,
		refetch: response.refetch,
	};
};
