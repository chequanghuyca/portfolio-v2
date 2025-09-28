import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectDetailHeader from './ProjectDetailHeader';

const NotFound = () => {
	return (
		<>
			<ProjectDetailHeader />
			<Helmet>
				<title>Project not found | Huy Che Portfolio</title>
				<meta name="description" content="The requested project could not be found." />
			</Helmet>
			<div className="pt-16 lg:pt-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="mb-6">
							<Link
								to="/"
								className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
							>
								<ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
							</Link>
						</div>
						<h1 className="text-2xl font-semibold mb-4">Project not found</h1>
						<p className="text-text-secondary">
							The project you're looking for doesn't exist or has been removed.
						</p>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default NotFound;
