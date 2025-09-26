import Index from '@/pages/Index';
import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';
import DynamicViewport from '@/components/DynamicViewport';
import { viewportConfigs } from '@/hooks/useViewport';

export const Route = createFileRoute('/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<DynamicViewport config={viewportConfigs.mobile}>
			<Helmet>
				<title>Huy Che - Full Stack Developer | React, TypeScript, Web3 Expert</title>
				<meta
					name="description"
					content="Huy Che is a Full Stack Developer specializing in React, TypeScript, Node.js, and Web3 technologies. View my portfolio projects and get in touch for collaboration."
				/>
				<meta
					name="keywords"
					content="Huy Che, Full Stack Developer, React Developer, TypeScript, Node.js, Web3, Blockchain, Frontend Developer, Backend Developer, Portfolio, Software Engineer"
				/>
				<link rel="canonical" href="https://huyche.site" />

				<meta
					property="og:title"
					content="Huy Che - Full Stack Developer | React, TypeScript, Web3 Expert"
				/>
				<meta
					property="og:description"
					content="Full Stack Developer specializing in React, TypeScript, Node.js, and Web3 technologies. View my portfolio and get in touch."
				/>
				<meta property="og:url" content="https://huyche.site" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Huy Che Portfolio" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Huy Che - Full Stack Developer | React, TypeScript, Web3 Expert"
				/>
				<meta
					name="twitter:description"
					content="Full Stack Developer specializing in React, TypeScript, Node.js, and Web3 technologies."
				/>
				<meta name="twitter:url" content="https://huyche.site" />
			</Helmet>
			<Index />
		</DynamicViewport>
	);
}
