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
				<title>Huy Che — Senior Software Engineer | Product & Systems</title>
				<meta
					name="description"
					content="Senior Software Engineer building reliable digital products, scalable frontend and backend systems, Web3 infrastructure, and AI-assisted engineering workflows."
				/>
				<meta
					name="keywords"
					content="Huy Che, Full Stack Developer, React Developer, TypeScript, Node.js, Web3, Blockchain, Frontend Developer, Backend Developer, Portfolio, Software Engineer"
				/>
				<link rel="canonical" href="https://huyche.site" />

				<meta
					property="og:title"
					content="Huy Che — Senior Software Engineer | Product & Systems"
				/>
				<meta
					property="og:description"
					content="Reliable digital products, scalable systems, Web3 infrastructure, and thoughtful engineering."
				/>
				<meta property="og:url" content="https://huyche.site" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Huy Che Portfolio" />
				<meta property="og:image" content="https://huyche.site/og.png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta
					property="og:image:alt"
					content="Huy Che — Senior Software Engineer"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Huy Che — Senior Software Engineer | Product & Systems"
				/>
				<meta
					name="twitter:description"
					content="Reliable digital products, scalable systems, Web3 infrastructure, and thoughtful engineering."
				/>
				<meta name="twitter:url" content="https://huyche.site" />
				<meta name="twitter:image" content="https://huyche.site/og.png" />
			</Helmet>
			<Index />
		</DynamicViewport>
	);
}
