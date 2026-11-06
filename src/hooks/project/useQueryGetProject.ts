import envispeedSettings from '@/assets/projects/envispeed/envispeed-settings.webp';
import envispeedImage from '@/assets/projects/envispeed/envispeed-sign.webp';
import ltaDarkImage from '@/assets/projects/lta-tracking/lta-tracking-dark.png';
import ltaLightImage from '@/assets/projects/lta-tracking/lta-tracking-light.png';
import ltaQaImage from '@/assets/projects/lta-tracking/lta-tracking-qa.png';
import ltaSignImage from '@/assets/projects/lta-tracking/lta-tracking-sign.webp';
import superAppAccount from '@/assets/projects/lta-superapp/lta-superapp-account.png';
import superAppEdepot from '@/assets/projects/lta-superapp/lta-superapp-edepot.png';
import superAppEkyc from '@/assets/projects/lta-superapp/lta-superapp-ekyc-cccd.png';
import superAppEmptyCont from '@/assets/projects/lta-superapp/lta-superapp-empty-container.png';
import superAppLogin from '@/assets/projects/lta-superapp/lta-superapp-login.png';
import superAppSignImage from '@/assets/projects/lta-superapp/lta-superapp-sign.webp';
import mergePalsImage from '@/assets/projects/merge-pals/merge-pals-sign.webp';
import mhpImage from '@/assets/projects/mhp/mhp-sign.webp';
import pegaxyImage from '@/assets/projects/pegaxy/pegaxy-sign.webp';
import petopiaImage from '@/assets/projects/petopia/petopia-sign.webp';
import remotySecondaryImage from '@/assets/projects/remoty/remoty-2.webp';
import remotyImage from '@/assets/projects/remoty/remoty-sign.webp';
import smartHrmsFace from '@/assets/projects/smarthrms/smarthrms-face.webp';
import smartHrmsImage from '@/assets/projects/smarthrms/smarthrms-sign.webp';
import telegramWalletImage from '@/assets/projects/telegram-wallet/telegram-wallet-sign.webp';
import transmasterImage from '@/assets/projects/transmaster/transmaster-sign.webp';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import enProjects from '@/i18n/locales/en.json';
import viProjects from '@/i18n/locales/vi.json';
import type { Project } from './useQueryGetAllProject';

export type ProjectDetail = Pick<Project, 'liveLabel' | 'secondaryLink'> & {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	image: string;
	technologies: string[];
	liveUrl: string;
	qaUrl?: string;
	githubUrl?: string;
	featured: boolean;
	preview?: boolean;
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
	preview?: boolean;
};

const projectImages: Record<string, string> = {
	'1': ltaSignImage,
	'2': superAppSignImage,
	'3': remotyImage,
	'4': petopiaImage,
	'5': pegaxyImage,
	'6': telegramWalletImage,
	'7': mergePalsImage,
	'8': transmasterImage,
	'9': mhpImage,
	'10': envispeedImage,
	'11': smartHrmsImage,
};

const projectDetails: Record<string, LocalizedProjectDetail> = {
	'1': {
		en: {
			longDescription:
				'LTA Tracking is an enterprise-grade ecosystem for workforce management, shift-based timekeeping, and real-time productivity oversight built for Logistics Technology Application (LTA - Genuine Partner Group). The solution integrates a lightweight cross-platform desktop application built with Wails (Go + React), an operational web dashboard for analytics and scheduling, and distributed Golang backend microservices handling high-volume event streams, live WebRTC screen streaming, and secure cloud storage.',
			challenges: [
				'Architecting a lightweight, resilient cross-platform desktop client (macOS, Windows, Linux) with Wails v2, offline queueing, and automatic reconnection',
				'Implementing low-latency WebRTC live screen streaming and periodic high-resolution capture with MinIO/S3 storage while keeping workstation resource usage minimal',
				'Streaming and aggregating millions of activity logs using Kafka and tuning PostgreSQL queries for real-time executive productivity dashboards',
				'Building an end-to-end CI/CD release pipeline with automated code signing and notarization (Apple Notarization & Windows Authenticode)',
			],
			features: [
				'Cross-platform desktop application (macOS, Windows, Linux) with Wails v2 & React',
				'Automated periodic screen capture and low-latency WebRTC live streaming',
				'Offline activity caching and seamless background synchronization',
				'Executive web dashboard for shift scheduling, approvals, and analytics',
				'High-performance distributed Go backend with Kafka, PostgreSQL, and MinIO',
				'Automated CI/CD pipelines with Apple Notarization and Windows Code Signing',
			],
			role: 'Senior Software Engineer / Lead Developer',
			duration: 'May 2026 - Present',
			teamSize: 'Core Engineering Team',
		},
		vi: {
			longDescription:
				'LTA Tracking là giải pháp toàn diện phục vụ quản lý nhân sự, chấm công ca làm việc và đo lường năng suất làm việc cho doanh nghiệp Logistics Technology Application (LTA - Genuine Partner Group). Hệ sinh thái bao gồm ứng dụng desktop đa nền tảng hiệu năng cao với Wails (Go + React), hệ thống Web Dashboard điều hành phân tích dữ liệu chuyên sâu và cụm Backend Microservices viết bằng Golang xử lý hàng triệu sự kiện, phát trực tiếp màn hình qua WebRTC và lưu trữ hình ảnh tự động.',
			challenges: [
				'Xây dựng kiến trúc Desktop đa nền tảng nhẹ và ổn định (macOS, Windows, Linux) với Wails v2, hỗ trợ đồng bộ offline và cơ chế phục hồi tự động khi mất kết nối',
				'Triển khai luồng WebRTC Screen Streaming độ trễ thấp và chụp màn hình định kỳ tải lên MinIO/S3 mà không gây ảnh hưởng đến hiệu năng máy trạm nhân viên',
				'Xử lý hàng triệu bản ghi sự kiện hoạt động với Kafka message broker và tối ưu hóa truy vấn PostgreSQL cho các báo cáo năng suất lớn',
				'Thiết lập quy trình CI/CD hoàn chỉnh với ký số mã nguồn (Apple Notarization & Windows Authenticode) cho bản phát hành doanh nghiệp',
			],
			features: [
				'Ứng dụng Desktop đa nền tảng (macOS, Windows, Linux) với Wails v2 & React',
				'Chụp ảnh màn hình định kỳ và phát trực tiếp màn hình qua WebRTC',
				'Đồng bộ hóa hoạt động offline khi mất kết nối mạng',
				'Web Dashboard quản trị ca làm việc, duyệt lịch và báo cáo năng suất',
				'Hệ thống Backend Golang phân tán với Kafka, PostgreSQL và MinIO',
				'Quy trình CI/CD tự động ký số và công chứng ứng dụng desktop',
			],
			role: 'Senior Software Engineer / Lead Developer',
			duration: 'Tháng 5/2026 - Hiện tại',
			teamSize: 'Core Engineering Team',
		},
		gallery: [ltaSignImage, ltaDarkImage, ltaLightImage, ltaQaImage],
	},
	'2': {
		en: {
			longDescription:
				'OneStop@LTA is an enterprise logistics mobile superapp built for Genuine Partner Group (GPG - LTA) and its comprehensive e-Depot network. Engineered with Flutter and Dart using BLoC state management, the application streamlines empty container return workflows (ISO 6346 compliance), automates driver eKYC identity verification with chip-embedded citizen cards & MRZ scanning via Flutter Face SDK, integrates the cashless LTA Pay wallet with loyalty coin rewards, and delivers robust offline-tolerant execution in harsh depot field environments.',
			challenges: [
				'Engineering an offline-tolerant, low-latency mobile client capable of operating reliably in harsh depot yards with weak network connectivity',
				'Integrating high-security eKYC identity verification with Flutter Face SDK, chip-embedded citizen ID recognition, and MRZ optical code decoding',
				'Building a dynamic remote server configuration matrix and real-time kill-switch mechanism to control features and dynamic labels without app redeployments',
				'Integrating the LTA Pay wallet module for cashless depot billing, coin accumulation, and loyalty partner tiering for logistics fleet drivers',
			],
			features: [
				'Automated empty container return and EIR declaration conforming to ISO 6346 standards',
				'Integrated eKYC identity verification with Face SDK, chip ID card capture, and MRZ scanning',
				'Real-time e-Depot partner network connection, booking, and truck fleet dispatching',
				'LTA Pay cashless billing module, loyalty coin rewards, and discount redemption',
				'Biometric authentication (Fingerprint, Face ID), Zalo customer support, and multi-language support',
				'Dynamic server-driven configuration matrix for instant feature toggling and kill-switch control',
			],
			role: 'Senior Mobile Engineer / Lead Flutter Developer',
			duration: 'May 2026 - Present',
			teamSize: 'Core Mobile & Logistics Engineering Team',
		},
		vi: {
			longDescription:
				'OneStop@LTA là siêu ứng dụng di động logistics toàn diện được xây dựng cho tập đoàn Genuine Partner Group (GPG - LTA) và mạng lưới bãi e-Depot liên kết. Ứng dụng phát triển trên nền tảng Flutter và Dart với mô hình quản lý trạng thái BLoC, hỗ trợ tối ưu hóa quy trình điều phối trả container rỗng (chuẩn ISO 6346), tự động hóa định danh tài xế eKYC với CCCD gắn chip & quét mã MRZ qua Flutter Face SDK, tích hợp ví thanh toán không tiền mặt LTA Pay cùng hệ thống tích điểm thưởng, và đảm bảo khả năng hoạt động ổn định trong môi trường bãi cảng khắc nghiệt.',
			challenges: [
				'Tối ưu hiệu năng và độ ổn định cho ứng dụng di động hoạt động mượt mà ngoài bãi cảng / depot trong điều kiện kết nối mạng yếu hoặc chập chờn',
				'Tích hợp giải pháp định danh eKYC độ bảo mật cao với Flutter Face SDK, nhận diện CCCD gắn chip và giải mã mã vạch quang học MRZ tiêu chuẩn quốc tế',
				'Thiết kế kiến trúc Dynamic Server Matrix và cơ chế Kill-Switch từ xa giúp bật/tắt tính năng khẩn cấp và cập nhật text động mà không cần cập nhật ứng dụng',
				'Xây dựng module ví thanh toán LTA Pay, xử lý thanh toán cước phí depot, tích luỹ xu thưởng và phân hạng đối tác nhà xe đồng hành',
			],
			features: [
				'Điều phối và khai báo trả container rỗng chuẩn ISO 6346, kiểm tra số vận đơn B/L và hãng tàu',
				'Định danh tài xế eKYC tự động với Face SDK, chụp CCCD gắn chip 2 mặt và quét mã MRZ',
				'Khám phá và kết nối hệ thống mạng lưới e-Depot đối tác thuộc tập đoàn GPG',
				'Tích hợp ví điện tử LTA Pay thanh toán cước phí, tích điểm xu và đổi quà ưu đãi',
				'Bảo mật sinh trắc học (vân tay, FaceID), hỗ trợ trực tuyến qua Zalo và đa ngôn ngữ',
				'Hệ thống quản trị cấu hình động từ server với cơ chế Kill-Switch an toàn tuyệt đối',
			],
			role: 'Senior Mobile Engineer / Lead Flutter Developer',
			duration: 'Tháng 5/2026 - Hiện tại',
			teamSize: 'Core Mobile & Logistics Engineering Team',
		},
		gallery: [
			superAppSignImage,
			superAppEdepot,
			superAppEkyc,
			superAppEmptyCont,
			superAppAccount,
			superAppLogin,
		],
	},
	'3': {
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
	'4': {
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
	'5': {
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
	'6': {
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
	'7': {
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
	'8': {
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
	'9': {
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
	'10': {
		en: {
			longDescription:
				'Envispeed is a GPL-3.0 distribution of Vikey, which is based on OpenKey. I worked on the Envispeed identity, desktop build and packaging workflows, the public macOS preview, and a bilingual product site with a typing demo. The app uses the upstream C++ engine to process keystrokes on the device and recognize Vietnamese and English in the same sentence.',
			challenges: [
				'Preserving upstream typing behavior and attribution while adapting the native apps for distribution',
				'Packaging a single macOS preview for Apple Silicon and Intel and guiding users through Accessibility setup',
				'Demonstrating mixed-language input on the web with examples taken from the app’s onboarding',
			],
			features: [
				'Telex input with context-aware Vietnamese and English switching',
				'On-device keystroke processing and undo after an automatic correction',
				'Public macOS preview and Windows build instructions in the source repository',
				'Bilingual product site with an interactive typing demo',
			],
			role: 'Maintainer / Release Engineer',
			duration: '2026 · Public preview',
			teamSize: 'Personal open-source project',
		},
		vi: {
			longDescription:
				'Envispeed là bản phân phối mã nguồn mở theo GPL-3.0, phát triển từ Vikey dựa trên OpenKey. Tôi thực hiện nhận diện Envispeed, quy trình build và đóng gói desktop, phát hành bản thử nghiệm macOS và xây dựng trang sản phẩm song ngữ có demo gõ. Ứng dụng dùng engine C++ từ dự án gốc để xử lý phím trên thiết bị và nhận diện tiếng Việt lẫn tiếng Anh trong cùng một câu.',
			challenges: [
				'Giữ hành vi của bộ gõ và ghi nhận tác giả gốc khi điều chỉnh ứng dụng để phân phối',
				'Đóng gói một bản thử nghiệm macOS cho Apple Silicon và Intel, kèm hướng dẫn cấp quyền Trợ năng',
				'Minh họa cách gõ xen kẽ Việt và Anh trên web bằng các ví dụ từ phần hướng dẫn của ứng dụng',
			],
			features: [
				'Gõ Telex và tự chuyển giữa tiếng Việt và tiếng Anh theo ngữ cảnh',
				'Xử lý phím trên thiết bị và hỗ trợ hoàn tác sau khi tự sửa',
				'Bản thử nghiệm macOS công khai và hướng dẫn build Windows trong repo',
				'Trang sản phẩm song ngữ có demo gõ tương tác',
			],
			role: 'Bảo trì dự án và phát hành',
			duration: '2026 · Bản thử nghiệm công khai',
			teamSize: 'Dự án mã nguồn mở cá nhân',
		},
		gallery: [envispeedImage, envispeedSettings],
		preview: true,
	},
	'11': {
		en: {
			longDescription:
				'Smart HRMS is an iOS and Android employee app published by GSOT Group for attendance and day-to-day HR workflows. My work focused on adding eKYC with document capture, NFC and face matching, improving face attendance with Luxand, and fixing i-Office WebView permissions and sign-in continuity. I also worked on Khmer localization and the mobile release workflow.',
			challenges: [
				'Handling camera permissions, NFC interruptions, and face verification timeouts across iOS and Android',
				'Applying employer-specific identity and attendance rules while keeping check-in guidance clear',
				'Keeping employees signed in when opening i-Office and handling WebView permissions and navigation',
			],
			features: [
				'Face attendance with liveness checks and employer-configured GPS work zones',
				'eKYC with identity document capture, supported NFC cards, and live face matching',
				'Shift schedules, monthly attendance records, leave requests, and approvals by role',
				'i-Office integration and Khmer localization alongside Vietnamese and English',
			],
			role: 'Senior Software Engineer · Mobile',
			duration: '2026 · Mobile enhancements',
			teamSize: 'Enterprise product team',
		},
		vi: {
			longDescription:
				'Smart HRMS là ứng dụng chấm công và quản trị nhân sự trên iOS và Android do GSOT Group phát hành. Tôi phụ trách các hạng mục eKYC gồm chụp giấy tờ, đọc NFC và đối chiếu khuôn mặt, cải thiện chấm công bằng Luxand, và xử lý quyền truy cập cùng phiên đăng nhập i-Office trong WebView. Tôi cũng tham gia bổ sung tiếng Khmer và chuẩn bị bản phát hành mobile.',
			challenges: [
				'Xử lý quyền camera, gián đoạn khi đọc NFC và hết thời gian xác thực khuôn mặt trên iOS và Android',
				'Áp dụng quy tắc xác thực và vùng chấm công của từng doanh nghiệp, đồng thời hướng dẫn rõ ở từng bước',
				'Duy trì phiên đăng nhập khi mở i-Office và xử lý quyền, điều hướng trong WebView',
			],
			features: [
				'Chấm công bằng khuôn mặt với kiểm tra người thật và vùng GPS do doanh nghiệp cấu hình',
				'eKYC bằng ảnh giấy tờ, thẻ NFC tương thích và đối chiếu khuôn mặt trực tiếp',
				'Lịch ca, bảng công tháng, đơn nghỉ phép và phê duyệt theo vai trò',
				'Tích hợp i-Office và hỗ trợ tiếng Khmer bên cạnh tiếng Việt và tiếng Anh',
			],
			role: 'Senior Software Engineer · Mobile',
			duration: '2026 · Nâng cấp ứng dụng mobile',
			teamSize: 'Nhóm sản phẩm doanh nghiệp',
		},
		gallery: [smartHrmsImage, smartHrmsFace],
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
				liveLabel: 'liveLabel' in projectData ? projectData.liveLabel : undefined,
				secondaryLink:
					'secondaryLink' in projectData ? projectData.secondaryLink : undefined,
				githubUrl: 'githubUrl' in projectData ? projectData.githubUrl : undefined,
				featured: projectData.featured,
				preview: detailData.preview,
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
