import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import classNames from 'classnames';
import CV from '@/assets/HUYCHE-CV.pdf?url';

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

	const handleDownloadClick = () => {
		try {
			const link = document.createElement('a');
			link.href = CV;
			link.download = 'HUYCHE-CV.pdf';
			link.target = '_blank';
			link.rel = 'noopener noreferrer';

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.error('Error downloading CV:', error);
			window.open(CV, '_blank');
		}
	};

	const navItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Contact', href: '#contact' },
	];

	return (
		<nav
			className={classNames(
				'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
				scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent',
			)}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
				<div
					className={classNames(
						'flex items-center',
						scrolled ? ' justify-between' : 'justify-end',
					)}
				>
					{scrolled && <img src={logo} alt="logo" className="lg:w-10 lg:h-10 w-8 h-8" />}

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="relative text-foreground hover:text-primary transition-colors duration-300 font-inter font-medium py-1 group tracking-tight"
							>
								{item.name}
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
							</a>
						))}
						<Button variant="outline" size="sm" onClick={handleDownloadClick}>
							Download CV
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
									className="relative text-foreground hover:text-primary transition-colors duration-300 font-inter font-medium py-2 group tracking-tight"
									onClick={() => setIsOpen(false)}
								>
									{item.name}
									<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
								</a>
							))}
							<Button
								variant="outline"
								size="sm"
								className="self-start"
								onClick={handleDownloadClick}
							>
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
