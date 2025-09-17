import { tanstackRouter } from '@tanstack/router-plugin/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	server: {
		host: '::',
		port: 8000,
	},
	plugins: [
		tanstackRouter({
			target: 'react',
			autoCodeSplitting: true,
			routesDirectory: './src/routes',
			generatedRouteTree: './src/routeTree.gen.ts',
			routeFileIgnorePrefix: '-',
			quoteStyle: 'single',
		}),
		react(),
		mode === 'development' && componentTagger(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
}));
