import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import logo from '@/assets/logo.png';

const ProjectDetailHeader = () => {
	const { t } = useTranslation();

	return (
		<motion.header
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="flex items-center justify-between h-16 lg:h-20">
					{/* Logo */}
					<Link to="/" className="flex items-center gap-3 group">
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="relative"
						>
							<img
								src={logo}
								alt="Huy Che Logo"
								className="h-8 w-8 lg:h-10 lg:w-10 rounded-lg"
							/>
						</motion.div>
						<div className="hidden sm:block">
							<h1 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
								Huy Che
							</h1>
							<p className="text-xs lg:text-sm text-muted-foreground">
								{t('navigation.subtitle') || 'Full Stack Developer'}
							</p>
						</div>
					</Link>

					{/* Language Switcher & Back Button */}
					<div className="flex items-center gap-3">
						<LanguageSwitcher />
						<Button variant="outline" size="sm" asChild className="hidden sm:flex">
							<Link to="/">
								<ArrowLeft className="h-4 w-4" />
								{t('common.backToHome') || 'Back'}
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</motion.header>
	);
};

export default ProjectDetailHeader;
