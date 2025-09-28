import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.5 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className="fixed bottom-4 right-2 sm:bottom-8 sm:right-6 z-50"
				>
					<Button
						onClick={scrollToTop}
						size="icon"
						className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 opacity-80"
					>
						<ChevronUp className="sm:w-6 sm:h-6 w-4 h-4" />
					</Button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTop;
