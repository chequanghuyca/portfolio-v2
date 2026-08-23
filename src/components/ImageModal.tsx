import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6"
					onClick={onClose}
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						transition={{ type: 'spring', damping: 25, stiffness: 300 }}
						className="relative max-w-6xl max-h-[92vh] flex flex-col items-center justify-center w-full"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close Button */}
						<button
							type="button"
							onClick={onClose}
							aria-label="Close modal"
							className="absolute -top-12 right-0 sm:top-2 sm:right-2 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/70 text-white/80 backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
						>
							<X className="h-5 w-5" />
						</button>

						{/* Navigation Buttons */}
						{images.length > 1 && (
							<>
								<button
									type="button"
									onClick={handlePrevious}
									aria-label="Previous image"
									className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/70 text-white/80 backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
								>
									<ChevronLeft className="h-6 w-6" />
								</button>
								<button
									type="button"
									onClick={handleNext}
									aria-label="Next image"
									className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/70 text-white/80 backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
								>
									<ChevronRight className="h-6 w-6" />
								</button>
							</>
						)}

						{/* Main Image Container */}
						<div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#160d0a] shadow-[0_30px_90px_rgba(0,0,0,0.8)] max-h-[75vh]">
							<motion.img
								key={currentIndex}
								initial={{ opacity: 0, scale: 0.98 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.98 }}
								transition={{ duration: 0.3 }}
								src={images[currentIndex]}
								alt={`${projectTitle} screenshot ${currentIndex + 1}`}
								className="max-h-[75vh] w-auto object-contain"
							/>
						</div>

						{/* Image Counter */}
						{images.length > 1 && (
							<div className="mt-4 flex items-center gap-3">
								<span className="font-mono-code text-xs uppercase tracking-[0.18em] text-white/70 rounded-full border border-white/15 bg-black/60 px-4 py-1.5 backdrop-blur-md">
									<span className="text-primary font-semibold">#{currentIndex + 1}</span> / {images.length}
								</span>
							</div>
						)}

						{/* Thumbnail Strip */}
						{images.length > 1 && (
							<div className="mt-4 flex gap-2.5 max-w-full overflow-x-auto p-1.5">
								{images.map((image, index) => (
									<button
										key={index}
										onClick={() => onNavigate(index)}
										aria-label={`Jump to screenshot ${index + 1}`}
										className={`flex-shrink-0 w-16 h-12 rounded-xl overflow-hidden border transition-all duration-300 ${
											index === currentIndex
												? 'border-primary scale-105 shadow-[0_0_12px_hsl(var(--primary)/0.6)]'
												: 'border-white/20 opacity-50 hover:opacity-100 hover:border-white/50'
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
