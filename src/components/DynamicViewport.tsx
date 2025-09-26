import { Helmet } from 'react-helmet-async';
import { ViewportConfig } from '@/hooks/useViewport';

interface DynamicViewportProps {
	config: ViewportConfig;
	children?: React.ReactNode;
}

const DynamicViewport = ({ config, children }: DynamicViewportProps) => {
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

	const viewportContent = `width=${width}, initial-scale=${initialScale}, maximum-scale=${maximumScale}, minimum-scale=${minimumScale}, user-scalable=${userScalable ? 'yes' : 'no'}, viewport-fit=${viewportFit}`;

	return (
		<>
			<Helmet>
				<meta name="viewport" content={viewportContent} />
				<meta name="theme-color" content={themeColor} />
				<meta name="apple-mobile-web-app-status-bar-style" content={statusBarStyle} />
				<meta name="msapplication-navbutton-color" content={themeColor} />
			</Helmet>
			{children}
		</>
	);
};

export default DynamicViewport;
