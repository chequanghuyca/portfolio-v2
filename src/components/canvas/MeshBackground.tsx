import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MeshBackground = () => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePos({
				x: (e.clientX / window.innerWidth - 0.5) * 20,
				y: (e.clientY / window.innerHeight - 0.5) * 20,
			});
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<div className="mesh-gradient absolute inset-0 pointer-events-none overflow-hidden">
			<motion.div
				className="mesh-blob mesh-blob-1"
				animate={{
					x: mousePos.x,
					y: mousePos.y,
					scale: [1, 1.1, 1],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>
			<motion.div
				className="mesh-blob mesh-blob-2"
				animate={{
					x: -mousePos.x,
					y: -mousePos.y,
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1
				}}
			/>
			<motion.div
				className="mesh-blob mesh-blob-3"
				animate={{
					x: mousePos.x * 0.5,
					y: -mousePos.y * 0.5,
					scale: [1, 1.15, 1],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2
				}}
			/>
			<div className="absolute inset-0 bg-background/40 backdrop-blur-[100px]" />
		</div>
	);
};

export default MeshBackground;
