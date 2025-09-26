import { useEffect } from 'react';

export interface ViewportConfig {
	width?: string;
	initialScale?: number;
	maximumScale?: number;
	minimumScale?: number;
	userScalable?: boolean;
	viewportFit?: 'auto' | 'contain' | 'cover';
	themeColor?: string;
	statusBarStyle?: 'default' | 'light-content' | 'dark-content';
}

export const useViewport = (config: ViewportConfig = {}) => {
	const {
		width = 'device-width',
		initialScale = 1.0,
		maximumScale = 5.0,
		minimumScale = 1.0,
		userScalable = true,
		viewportFit = 'cover',
		themeColor = '#ffffff',
		statusBarStyle = 'light-content',
	} = config;

	useEffect(() => {
		// Update viewport meta tag
		const viewportMeta = document.querySelector('meta[name="viewport"]');
		if (viewportMeta) {
			const content = `width=${width}, initial-scale=${initialScale}, maximum-scale=${maximumScale}, minimum-scale=${minimumScale}, user-scalable=${userScalable ? 'yes' : 'no'}, viewport-fit=${viewportFit}`;
			viewportMeta.setAttribute('content', content);
		}

		// Update theme-color meta tag
		const themeMeta = document.querySelector('meta[name="theme-color"]');
		if (themeMeta) {
			themeMeta.setAttribute('content', themeColor);
		}

		// Update status bar style for iOS
		const statusBarMeta = document.querySelector(
			'meta[name="apple-mobile-web-app-status-bar-style"]',
		);
		if (statusBarMeta) {
			statusBarMeta.setAttribute('content', statusBarStyle);
		}

		// Apply CSS for iOS Safari
		if (
			window.navigator.userAgent.includes('iPhone') ||
			window.navigator.userAgent.includes('iPad')
		) {
			document.documentElement.style.setProperty('--viewport-theme-color', themeColor);
			document.documentElement.style.setProperty('--viewport-fit', viewportFit);
		}
	}, [
		width,
		initialScale,
		maximumScale,
		minimumScale,
		userScalable,
		viewportFit,
		themeColor,
		statusBarStyle,
	]);

	return {
		updateViewport: (newConfig: Partial<ViewportConfig>) => {
			useViewport({ ...config, ...newConfig });
		},
	};
};

// Predefined viewport configurations
export const viewportConfigs = {
	// Standard mobile viewport
	mobile: {
		width: 'device-width',
		initialScale: 1.0,
		maximumScale: 3.0,
		userScalable: true,
		viewportFit: 'cover' as const,
		themeColor: '#ffffff',
		statusBarStyle: 'light-content' as const,
	},

	// Desktop/tablet viewport
	desktop: {
		width: 'device-width',
		initialScale: 1.0,
		maximumScale: 2.0,
		userScalable: true,
		viewportFit: 'contain' as const,
		themeColor: '#ffffff',
		statusBarStyle: 'light-content' as const,
	},

	// Project detail pages - optimized for content
	project: {
		width: 'device-width',
		initialScale: 1.0,
		maximumScale: 3.0,
		userScalable: true,
		viewportFit: 'cover' as const,
		themeColor: '#ffffff',
		statusBarStyle: 'light-content' as const,
	},

	// PWA mode
	pwa: {
		width: 'device-width',
		initialScale: 1.0,
		maximumScale: 1.0,
		userScalable: false,
		viewportFit: 'cover' as const,
		themeColor: '#ffffff',
		statusBarStyle: 'light-content' as const,
	},
};
