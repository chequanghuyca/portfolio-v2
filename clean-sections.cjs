const fs = require('fs');
const path = require('path');

const sections = [
	'src/components/home/Hero.tsx',
	'src/components/home/About.tsx',
	'src/components/home/Skills.tsx',
	'src/components/home/Contact.tsx'
];

sections.forEach(filePath => {
	if (!fs.existsSync(filePath)) return;
	let content = fs.readFileSync(filePath, 'utf8');

	// 1. Remove old Canvas imports
	content = content.replace(/import (ParticleNetwork|CircuitBoard|MatrixRain|TypeWriter) from '[^']+';?\n?/g, '');

	// 2. Remove Canvas components from JSX
	content = content.replace(/<ParticleNetwork \/>\s*/g, '');
	content = content.replace(/<CircuitBoard \/>\s*/g, '');
	content = content.replace(/<MatrixRain \/>\s*/g, '');
	content = content.replace(/<TypeWriter \/>\s*/g, '');

	// 3. Update common classes for Premium feel
	content = content.replace(/neon-glow|neon-glow-hover|neon-pulse|neon-text|hologram-border/g, '');
	content = content.replace(/bg-surface/g, 'bg-background');
	content = content.replace(/glass-card/g, 'glass-card'); // Keeps it but vars are now soft

	// 4. Specifically for Hero: remove the background image style if it's there
	if (filePath.includes('Hero.tsx')) {
		content = content.replace(/backgroundImage: `url\(\${heroImage}\)`,/g, '');
		content = content.replace(/backgroundSize: 'cover',/g, '');
		content = content.replace(/backgroundPosition: 'center',/g, '');
		content = content.replace(/className="h-full flex items-center justify-center relative overflow-hidden"/g, 'className="h-full flex items-center justify-center relative overflow-hidden bg-background/50"');
	}

	fs.writeFileSync(filePath, content);
	console.log(`Cleaned ${filePath}`);
});
