import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import classNames from 'classnames';
import CV from '@/assets/HUYCHE-CV.pdf?url';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { t } = useTranslation();
	const mobileMenuRef = useRef<HTMLDivElement>(null);
	const toggleButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Handle click outside to close mobile menu
	useEffect(() => {
		if (!isOpen) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target as Node) &&
				toggleButtonRef.current &&
				!toggleButtonRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

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

	const handleLogoClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const navItems = [
		{ name: t('navigation.home'), href: '#home' },
		{ name: t('navigation.about'), href: '#about' },
		{ name: t('navigation.skills'), href: '#skills' },
		{ name: t('navigation.projects'), href: '#projects' },
		{ name: t('navigation.contact'), href: '#contact' },
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
					{scrolled && (
						<img
							src={logo}
							alt="Huy Che - Full Stack Developer Portfolio Logo"
							className="lg:w-10 lg:h-10 w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300"
							onClick={handleLogoClick}
						/>
					)}

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-4">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="relative text-foreground hover:text-primary transition-colors duration-300 font-inter font-medium py-1 px-2 group tracking-tight"
							>
								{item.name}
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
							</a>
						))}
						<LanguageSwitcher />
						<Button variant="outline" size="sm" onClick={handleDownloadClick}>
							{t('navigation.downloadCV')}
						</Button>
					</div>

					{/* Mobile Menu Button */}

					<div className="flex items-center justify-between md:hidden">
						<LanguageSwitcher onMobile />
						<Button
							ref={toggleButtonRef}
							variant="ghost"
							size="sm"
							onClick={() => setIsOpen(!isOpen)}
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div
						ref={mobileMenuRef}
						className="md:hidden mt-4 py-4 bg-slate-50 rounded-lg animate-fade-in border border-border shadow-md w-[200px] fixed top-11 right-4 z-50"
					>
						<div className="flex flex-col space-y-2 px-4">
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
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;
