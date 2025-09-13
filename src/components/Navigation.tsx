import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Contact', href: '#contact' },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
			}`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
				<div className="flex items-center justify-between">
					<div className="text-2xl font-bold text-gradient">HC</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
							>
								{item.name}
							</a>
						))}
						<Button variant="outline" size="sm">
							Resume
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="sm"
						className="md:hidden"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</Button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden mt-4 py-4 bg-surface-elevated rounded-lg shadow-card animate-fade-in">
						<div className="flex flex-col space-y-4 px-4">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</a>
							))}
							<Button variant="outline" size="sm" className="self-start">
								Resume
							</Button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;
