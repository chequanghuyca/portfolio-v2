import {
	About,
	Contact,
	Footer,
	Hero,
	Navigation,
	Projects,
	Skills,
} from '@/components/home';
import ScrollToTop from '@/components/ScrollToTop';
import TechCursor from '@/components/TechCursor';
import { StickyHeroWrapper } from '@/components/scroll/ScrollEffects';

const marqueeItems = [
	'Product Engineering',
	'Scalable Frontends',
	'Distributed Systems',
	'Web3 Infrastructure',
	'AI Workflows',
	'Technical Leadership',
];

const Index = () => {
	return (
		<div className="dark portfolio-shell min-h-screen w-full overflow-x-clip bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
			<TechCursor />
			<a className="skip-link" href="#main-content">
				Skip to content
			</a>
			<Navigation />
			<main id="main-content">
				<StickyHeroWrapper>
					<Hero />
				</StickyHeroWrapper>

				<div className="post-hero-content relative z-10 rounded-t-[2rem] border-t border-white/10 bg-background sm:rounded-t-[3rem]">
					<div className="tech-marquee" aria-label="Areas of expertise">
						<div className="tech-marquee-track">
							{[...marqueeItems, ...marqueeItems].map((item, index) => (
								<span key={`${item}-${index}`}>
									<span aria-hidden="true">✦</span>
									{item}
								</span>
							))}
						</div>
					</div>
					<About />
					<Skills />
					<Projects />
					<Contact />
				</div>
			</main>
			<Footer />
			<ScrollToTop />
		</div>
	);
};

export default Index;
