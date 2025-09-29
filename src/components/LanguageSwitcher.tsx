import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import ukFlag from '@/assets/uk-flag.png';
import viFlag from '@/assets/vn-flag.png';

const languages = [
	{ code: 'en', name: 'English', flag: ukFlag },
	{ code: 'vi', name: 'Tiếng Việt', flag: viFlag },
];

interface LanguageSwitcherProps {
	onMobile?: boolean;
}

const LanguageSwitcher = ({ onMobile = false }: LanguageSwitcherProps) => {
	const { i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const currentLanguage =
		languages.find((lang) => lang.code === i18n.language) || languages[0];

	const handleLanguageChange = (languageCode: string) => {
		i18n.changeLanguage(languageCode);
		setIsOpen(false);
	};

	if (onMobile) {
		return (
			<div className="flex flex-row gap-1">
				<Button
					variant="ghost"
					size="mini"
					onClick={() => handleLanguageChange('en')}
					className={cn(i18n.language === 'en' && 'bg-gray-200 border')}
				>
					<img src={languages[0].flag} alt={languages[0].name} className="w-3 h-3" />
				</Button>
				<Button
					variant="ghost"
					size="mini"
					onClick={() => handleLanguageChange('vi')}
					className={cn(i18n.language === 'vi' && 'bg-gray-200 border')}
				>
					<img src={languages[1].flag} alt={languages[1].name} className="w-3 h-3" />
				</Button>
			</div>
		);
	}

	return (
		<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="sm" className="gap-2">
					<img
						src={currentLanguage.flag}
						alt={currentLanguage.name}
						className="w-4 h-4"
					/>
					<span className="hidden md:inline">{currentLanguage.name}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-36">
				{languages.map((language) => (
					<DropdownMenuItem
						key={language.code}
						onClick={() => handleLanguageChange(language.code)}
						className="flex items-center justify-between cursor-pointer"
					>
						<div className="flex items-center gap-2">
							<img src={language.flag} alt={language.name} className="w-4 h-4" />
							<span>{language.name}</span>
						</div>
						{i18n.language === language.code && (
							<Check className="h-4 w-4 text-primary" />
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LanguageSwitcher;
