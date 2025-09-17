import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

export type Project = {
	id: string;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	liveUrl: string;
	githubUrl: string;
	featured: boolean;
};

export const projects: Project[] = [
	{
		id: '1',
		title: 'Analytics Dashboard',
		description:
			'A comprehensive analytics dashboard built with React and D3.js, featuring real-time data visualization, interactive charts, and responsive design.',
		image: project1,
		technologies: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
		liveUrl: '#',
		githubUrl: '#',
		featured: true,
	},
	{
		id: '2',
		title: 'E-commerce Platform',
		description:
			'Full-stack e-commerce solution with payment integration, admin panel, and modern user interface for seamless shopping experience.',
		image: project2,
		technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
		liveUrl: '#',
		githubUrl: '#',
		featured: true,
	},
	{
		id: '3',
		title: 'Social Media App',
		description:
			'Real-time social media application with chat functionality, post sharing, and user authentication built with modern technologies.',
		image: project3,
		technologies: ['React', 'Firebase', 'Socket.io', 'Material-UI'],
		liveUrl: '#',
		githubUrl: '#',
		featured: false,
	},
];

export const getProjectById = (id: string): Project | undefined =>
	projects.find((p) => p.id === id);
