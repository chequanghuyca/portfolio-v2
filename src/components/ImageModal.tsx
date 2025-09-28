import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageModalProps {
	isOpen: boolean;
	onClose: () => void;
	images: string[];
	currentIndex: number;
	onNavigate: (index: number) => void;
	projectTitle: string;
}

const ImageModal = ({
	isOpen,
	onClose,
	images,
	currentIndex,
	onNavigate,
	projectTitle,
}: ImageModalProps) => {
	const handlePrevious = () => {
		const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
		onNavigate(newIndex);
	};

	const handleNext = () => {
		const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
		onNavigate(newIndex);
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (!isOpen) return;

		switch (e.key) {
			case 'Escape':
				onClose();
				break;
			case 'ArrowLeft':
				handlePrevious();
				break;
			case 'ArrowRight':
				handleNext();
				break;
		}
	};

	React.useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, currentIndex]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
					onClick={onClose}
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{ type: 'spring', damping: 25, stiffness: 300 }}
						className="relative max-w-7xl max-h-[90vh] mx-4"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close Button */}
						<Button
							variant="ghost"
							size="icon"
							onClick={onClose}
							className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
						>
							<X className="h-6 w-6" />
						</Button>

						{/* Navigation Buttons */}
						{images.length > 1 && (
							<>
								<Button
									variant="ghost"
									size="icon"
									onClick={handlePrevious}
									className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
								>
									<ChevronLeft className="h-6 w-6" />
								</Button>
								<Button
									variant="ghost"
									size="icon"
									onClick={handleNext}
									className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
								>
									<ChevronRight className="h-6 w-6" />
								</Button>
							</>
						)}

						{/* Image */}
						<div className="relative">
							<motion.img
								key={currentIndex}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.3 }}
								src={images[currentIndex]}
								alt={`${projectTitle} screenshot ${currentIndex + 1}`}
								className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
							/>
						</div>

						{/* Image Counter */}
						{images.length > 1 && (
							<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
								{currentIndex + 1} / {images.length}
							</div>
						)}

						{/* Thumbnail Strip */}
						{images.length > 1 && (
							<div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto p-2">
								{images.map((image, index) => (
									<button
										key={index}
										onClick={() => onNavigate(index)}
										className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
											index === currentIndex
												? 'border-white scale-110'
												: 'border-white/30 hover:border-white/60'
										}`}
									>
										<img
											src={image}
											alt={`Thumbnail ${index + 1}`}
											className="w-full h-full object-cover"
										/>
									</button>
								))}
							</div>
						)}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ImageModal;
