import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import ukFlag from '@/assets/uk-flag.png';
import viFlag from '@/assets/vn-flag.png';

const languages = [
	{ code: 'en', shortCode: 'EN', name: 'English', flag: ukFlag },
	{ code: 'vi', shortCode: 'VI', name: 'Tiếng Việt', flag: viFlag },
];

interface LanguageSwitcherProps {
	onMobile?: boolean;
}

const LanguageSwitcher = ({ onMobile = false }: LanguageSwitcherProps) => {
	const { i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const currentCode = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0];

	const currentLanguage =
		languages.find((lang) => lang.code === currentCode) || languages[0];

	const handleLanguageChange = (languageCode: string) => {
		const url = new URL(window.location.href);

		if (languageCode === 'vi') {
			url.searchParams.set('lang', 'vi');
		} else {
			url.searchParams.delete('lang');
		}

		window.history.replaceState(
			window.history.state,
			'',
			`${url.pathname}${url.search}${url.hash}`,
		);
		void i18n.changeLanguage(languageCode);
		setIsOpen(false);
	};

	if (onMobile) {
		return (
			<div
				className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1"
				role="group"
				aria-label="Select language"
			>
				{languages.map((language) => (
					<button
						type="button"
						key={language.code}
						onClick={() => handleLanguageChange(language.code)}
						aria-pressed={currentCode === language.code}
						aria-label={`Switch to ${language.name}`}
						className={cn(
							'flex min-h-9 items-center gap-2 rounded-full px-3 font-mono-code text-[10px] font-semibold tracking-[0.12em] transition-all',
							currentCode === language.code
								? 'bg-primary text-primary-foreground shadow-[0_8px_24px_hsl(var(--primary)/0.18)]'
								: 'text-white/45 hover:bg-white/[0.06] hover:text-white',
						)}
					>
						<img
							src={language.flag}
							alt=""
							className="h-4 w-4 rounded-full object-cover"
						/>
						{language.shortCode}
					</button>
				))}
			</div>
		);
	}

	return (
		<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
			<DropdownMenuTrigger asChild>
				<button
					type="button"
					aria-label={`Current language: ${currentLanguage.name}`}
					className="group flex h-11 items-center gap-2 rounded-full border border-white/12 bg-[#160d0a]/65 px-3 text-[#f5e4ca] shadow-[0_12px_32px_rgba(22,13,10,0.18)] backdrop-blur-xl transition-all hover:border-primary/50 hover:bg-[#24130e] data-[state=open]:border-primary/60 data-[state=open]:bg-[#24130e]"
				>
					<span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.045]">
						<img
							src={currentLanguage.flag}
							alt=""
							className="h-4 w-4 rounded-full object-cover"
						/>
					</span>
					<span className="hidden font-mono-code text-[10px] font-semibold uppercase tracking-[0.14em] sm:inline">
						{currentLanguage.shortCode}
					</span>
					<ChevronDown
						size={13}
						className="text-primary/70 transition-transform duration-200 group-data-[state=open]:rotate-180"
					/>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				sideOffset={10}
				className="w-52 rounded-2xl border border-[#e8a44a]/20 bg-[#1d100c]/95 p-2 text-[#f5e4ca] shadow-[0_24px_80px_rgba(22,13,10,0.52)] backdrop-blur-xl"
			>
				<div className="flex items-center justify-between px-2 pb-2 pt-1 font-mono-code text-[9px] uppercase tracking-[0.16em] text-white/35">
					<span>Select language</span>
					<span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
				</div>
				{languages.map((language) => (
					<DropdownMenuItem
						key={language.code}
						onClick={() => handleLanguageChange(language.code)}
						className={cn(
							'mb-1 flex cursor-pointer items-center justify-between rounded-xl border border-transparent px-3 py-2.5 outline-none transition-all last:mb-0 focus:bg-[#e8a44a]/10 focus:text-[#f5e4ca]',
							currentCode === language.code && 'border-[#e8a44a]/20 bg-[#e8a44a]/10',
						)}
					>
						<div className="flex items-center gap-3">
							<span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
								<img
									src={language.flag}
									alt=""
									className="h-4 w-4 rounded-full object-cover"
								/>
							</span>
							<span>
								<span className="block text-sm font-medium text-[#f5e4ca]">
									{language.name}
								</span>
								<span className="mt-0.5 block font-mono-code text-[8px] uppercase tracking-[0.14em] text-white/30">
									{language.shortCode} / SYS
								</span>
							</span>
						</div>
						{currentCode === language.code && (
							<span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
								<Check className="h-3.5 w-3.5" />
							</span>
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LanguageSwitcher;
