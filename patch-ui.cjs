const fs = require('fs');
const path = require('path');

const files = [
    'src/components/home/About.tsx',
    'src/components/home/Skills.tsx',
    'src/components/home/Projects.tsx',
    'src/components/home/Contact.tsx'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add canvas imports
    if (file.includes('About.tsx') && !content.includes('CircuitBoard')) {
        content = content.replace("import { useTranslation } from 'react-i18next';", "import { useTranslation } from 'react-i18next';\nimport CircuitBoard from '@/components/canvas/CircuitBoard';");
        content = content.replace('<section id="about" className="py-16 sm:py-20 bg-surface">', '<section id="about" className="py-16 sm:py-20 relative overflow-hidden bg-surface">\n\t\t\t<CircuitBoard />');
    }
    
    if (file.includes('Skills.tsx') && !content.includes('MatrixRain')) {
        content = content.replace("import { useTranslation } from 'react-i18next';", "import { useTranslation } from 'react-i18next';\nimport MatrixRain from '@/components/canvas/MatrixRain';");
        content = content.replace('<section id="skills" className="py-16 sm:py-20 bg-surface">', '<section id="skills" className="py-16 sm:py-20 relative overflow-hidden bg-surface">\n\t\t\t<MatrixRain />');
        content = content.replace('<section id="skills" className="py-16 sm:py-20">', '<section id="skills" className="py-16 sm:py-20 relative overflow-hidden">\n\t\t\t<MatrixRain />');
    }

    if (file.includes('Contact.tsx') && !content.includes('TypeWriter')) {
        content = content.replace("import { useTranslation } from 'react-i18next';", "import { useTranslation } from 'react-i18next';\nimport TypeWriter from '@/components/canvas/TypeWriter';");
        content = content.replace('<section id="contact" className="py-16 sm:py-20">', '<section id="contact" className="py-16 sm:py-20 relative overflow-hidden">\n\t\t\t<TypeWriter />');
    }

    // Replace basic card styling with glass-card
    content = content.replace(/className="p-6 shadow-lg/g, 'className="glass-card neon-glow-hover p-6 shadow-lg');
    content = content.replace(/className="p-6 h-full/g, 'className="glass-card neon-glow-hover p-6 h-full');
    content = content.replace(/className="bg-card /g, 'className="glass-card neon-glow-hover ');
    content = content.replace(/className="group relative bg-card /g, 'className="group relative glass-card neon-glow-hover ');
    
    // Add neon colors to SVGs and titles
    content = content.replace(/text-primary/g, 'text-primary neon-text');
    
    fs.writeFileSync(file, content);
    console.log('Patched', file);
});
