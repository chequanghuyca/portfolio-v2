import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative overflow-hidden"
			style={{
				backgroundImage: `url(${heroImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-background/90" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div className="text-center lg:text-left animate-fade-in-up">
						<div className="mb-6">
							<p className="text-lg text-text-secondary mb-2 animate-fade-in">
								Hello, I'm
							</p>
							<h1 className="text-5xl lg:text-7xl font-bold mb-4 animate-slide-in-right">
								Huy Che
							</h1>
							<h2 className="text-2xl lg:text-3xl font-semibold text-gradient mb-6">
								Full Stack Developer
							</h2>
						</div>

						<p className="text-lg text-text-secondary mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in">
							I create exceptional digital experiences with modern web technologies.
							Passionate about clean code, user experience, and bringing innovative ideas
							to life.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in">
							<Button size="lg" className="gradient-primary text-white" asChild>
								<a href="#projects">View My Work</a>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<a href="#contact">Get In Touch</a>
							</Button>
						</div>

						{/* Social Links */}
						<div className="flex gap-4 justify-center lg:justify-start animate-fade-in">
							<Button variant="ghost" size="icon" asChild>
								<a href="https://github.com" target="_blank" rel="noopener noreferrer">
									<Github size={20} />
								</a>
							</Button>
							<Button variant="ghost" size="icon" asChild>
								<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
									<Linkedin size={20} />
								</a>
							</Button>
							<Button variant="ghost" size="icon" asChild>
								<a href="mailto:huy.che@example.com">
									<Mail size={20} />
								</a>
							</Button>
						</div>
					</div>

					{/* Right Content - Profile Photo */}
					<div className="flex justify-center lg:justify-end animate-float">
						<div className="relative">
							<div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-card-hover">
								<img
									src={profilePhoto}
									alt="Huy Che - Full Stack Developer"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="absolute -top-4 -right-4 w-24 h-24 gradient-primary rounded-full animate-pulse opacity-20" />
							<div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-blue rounded-full animate-pulse opacity-10" />
						</div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<ArrowDown size={24} className="text-text-secondary" />
			</div>
		</section>
	);
};

export default Hero;
