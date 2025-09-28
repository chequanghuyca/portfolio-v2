import { Helmet } from 'react-helmet-async';
import ProjectDetailHeader from './ProjectDetailHeader';

const LoadingSkeleton = () => {
	return (
		<>
			<ProjectDetailHeader />
			<Helmet>
				<title>Loading... | Huy Che Portfolio</title>
			</Helmet>
			<div className="pt-16 lg:pt-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
					<div className="animate-pulse">
						<div className="h-4 bg-gray-200 rounded w-32 mb-6"></div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<div className="h-96 bg-gray-200 rounded-lg"></div>
							<div className="space-y-4">
								<div className="h-8 bg-gray-200 rounded w-3/4"></div>
								<div className="h-4 bg-gray-200 rounded w-full"></div>
								<div className="h-4 bg-gray-200 rounded w-5/6"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoadingSkeleton;
