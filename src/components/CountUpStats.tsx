import { useCountUp } from '@/hooks/useCountUp';
import { motion } from 'framer-motion';

interface CountUpStatProps {
	number: string;
	label: string;
	delay?: number;
}

const CountUpStat: React.FC<CountUpStatProps> = ({ number, label, delay = 0 }) => {
	const numericValue = parseInt(number.replace(/\D/g, ''));
	const suffix = number.replace(/\d/g, '');
	const { count, ref } = useCountUp({
		end: numericValue,
		duration: 2000,
		delay: delay * 100,
	});

	return (
		<motion.div
			ref={ref}
			className="text-center"
			whileHover={{ scale: 1.1, y: -10 }}
			transition={{ type: 'spring', stiffness: 300 }}
		>
			<motion.div
				className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-2"
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{
					delay: 0.5 + delay * 0.1,
					duration: 0.5,
					type: 'spring',
					stiffness: 200,
				}}
				viewport={{ once: true }}
			>
				{count}
				{suffix}
			</motion.div>
			<motion.p
				className="text-sm sm:text-base text-text-secondary"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.7 + delay * 0.1, duration: 0.5 }}
				viewport={{ once: true }}
			>
				{label}
			</motion.p>
		</motion.div>
	);
};

export default CountUpStat;
