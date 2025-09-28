import {
	Navigation,
	About,
	Hero,
	Skills,
	Projects,
	Contact,
	Footer,
} from '@/components/home';
import PageTransition from '@/components/PageTransition';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
	return (
		<PageTransition>
			<div className="min-h-screen">
				<Navigation />
				<main>
					<Hero />
					<About />
					<Skills />
					<Projects />
					<Contact />
				</main>
				<Footer />
				<ScrollToTop />
			</div>
		</PageTransition>
	);
};

export default Index;
