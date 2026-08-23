import { Helmet } from 'react-helmet-async';
import ProjectDetailHeader from './ProjectDetailHeader';

const LoadingSkeleton = () => {
	return (
		<div className="dark portfolio-shell min-h-screen w-full bg-background text-foreground">
			<ProjectDetailHeader />
			<Helmet>
				<title>Loading... | Huy Che Portfolio</title>
			</Helmet>
			<div className="pt-28 sm:pt-36 pb-20">
				<div className="section-container">
					<div className="animate-pulse space-y-12">
						<div className="h-4 bg-white/10 rounded-full w-32 mb-6" />
						<div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
							<div className="space-y-6">
								<div className="h-6 bg-white/10 rounded-full w-48" />
								<div className="h-14 bg-white/10 rounded-2xl w-3/4" />
								<div className="h-20 bg-white/5 rounded-2xl w-full" />
								<div className="flex gap-2">
									<div className="h-8 bg-white/10 rounded-full w-24" />
									<div className="h-8 bg-white/10 rounded-full w-28" />
									<div className="h-8 bg-white/10 rounded-full w-20" />
								</div>
							</div>
							<div className="h-80 bg-white/10 rounded-3xl" />
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="h-64 bg-white/5 rounded-3xl border border-white/5" />
							<div className="h-64 bg-white/5 rounded-3xl border border-white/5" />
							<div className="h-64 bg-white/5 rounded-3xl border border-white/5" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoadingSkeleton;
