import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
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
