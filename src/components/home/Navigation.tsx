import CV from '@/assets/HUYCHE-CV.pdf?url';
import logo from '@/assets/logo-ui.webp';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import classNames from 'classnames';
import { Download, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { t } = useTranslation();
	const mobileMenuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 24);
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setIsOpen(false);
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen]);

	const navItems = [
		{ name: t('navigation.about'), href: '#about' },
		{ name: t('navigation.skills'), href: '#skills' },
		{ name: t('navigation.projects'), href: '#projects' },
		{ name: t('navigation.contact'), href: '#contact' },
	];

	return (
		<nav
			aria-label="Primary navigation"
			className={classNames(
				'fixed inset-x-0 top-0 z-50 transition-all duration-500',
				scrolled ? 'px-3 pt-3 sm:px-5' : 'px-0 pt-0',
			)}
		>
			<div
				className={classNames(
					'mx-auto flex max-w-[1480px] items-center justify-between px-5 py-4 transition-all duration-500 sm:px-7',
					scrolled &&
						'rounded-2xl border border-white/10 bg-[#160d0a]/95 shadow-[0_20px_60px_rgba(28,12,6,0.32)] backdrop-blur-xl',
				)}
			>
				<a
					href="#home"
					aria-label="Huy Che — back to top"
					className="group flex items-center gap-3"
				>
					<span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] transition-colors group-hover:border-primary/60 lg:h-12 lg:w-12">
						<img
							src={logo}
							alt="Huy Che logo"
							width={256}
							height={256}
							className="brand-logo h-7 w-7 object-contain lg:h-8 lg:w-8"
						/>
					</span>
					<span className="hidden sm:block">
						<span className="block text-base font-semibold leading-none text-white lg:text-lg">
							Huy Che
						</span>
						<span className="mt-1.5 flex items-center gap-1.5 font-mono-code text-[10px] uppercase tracking-[0.18em] text-white/50">
							<span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_10px_hsl(var(--primary))]" />
							Available
						</span>
					</span>
				</a>

				<div className="hidden items-center gap-1 lg:flex">
					{navItems.map((item, index) => (
						<a key={item.href} href={item.href} className="nav-link group">
							<span className="text-[10px] text-primary/75">0{index + 1}</span>
							{item.name}
						</a>
					))}
				</div>

				<div className="flex items-center gap-1.5">
					<div className="hidden sm:block">
						<LanguageSwitcher />
					</div>
					<a
						href={CV}
						download="HUYCHE-CV.pdf"
						className="hidden items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-mono-code text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground xl:flex"
					>
						{t('navigation.downloadCV')}
						<Download size={13} />
					</a>
					<button
						type="button"
						aria-label={isOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={isOpen}
						aria-controls="mobile-menu"
						onClick={() => setIsOpen((current) => !current)}
						className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-primary hover:text-primary lg:hidden"
					>
						{isOpen ? <X size={18} /> : <Menu size={18} />}
					</button>
				</div>
			</div>

			{isOpen && (
				<div
					id="mobile-menu"
					ref={mobileMenuRef}
					className="mx-3 mt-2 rounded-2xl border border-white/10 bg-[#160d0a]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
				>
					<div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3 sm:hidden">
						<span className="font-mono-code text-[10px] uppercase tracking-[0.16em] text-white/45">
							Language
						</span>
						<LanguageSwitcher onMobile />
					</div>
					{navItems.map((item, index) => (
						<a
							key={item.href}
							href={item.href}
							onClick={() => setIsOpen(false)}
							className="flex items-center justify-between border-b border-white/10 px-1 py-4 text-lg font-semibold text-white last:border-0"
						>
							<span>{item.name}</span>
							<span className="font-mono-code text-[10px] text-primary">
								0{index + 1}
							</span>
						</a>
					))}
					<a
						href={CV}
						download="HUYCHE-CV.pdf"
						className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-mono-code text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground"
					>
						{t('navigation.downloadCV')}
						<Download size={14} />
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navigation;
