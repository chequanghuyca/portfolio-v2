import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
	const location = useLocation();

	useEffect(() => {
		console.error(
			'404 Error: User attempted to access non-existent route:',
			location.pathname,
		);
	}, [location.pathname]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<div className="text-center animate-fade-in-up">
				<div className="text-8xl lg:text-9xl font-bold text-gradient mb-4">404</div>
				<h1 className="text-2xl lg:text-3xl font-semibold mb-4">Page Not Found</h1>
				<p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
					Oops! The page you're looking for doesn't exist. It might have been moved or
					deleted.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button size="lg" asChild>
						<a href="/">
							<Home size={20} className="mr-2" />
							Back to Home
						</a>
					</Button>
					<Button variant="outline" size="lg" onClick={() => window.history.back()}>
						<ArrowLeft size={20} className="mr-2" />
						Go Back
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
