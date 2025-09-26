import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { HelmetProvider } from 'react-helmet-async';
import { routeTree } from './routeTree.gen';
import './i18n';
import CheckHealthProvider from './contexts/check-health.provider';

const queryClient = new QueryClient();

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const App = () => (
	<HelmetProvider>
		<QueryClientProvider client={queryClient}>
			<CheckHealthProvider>
				<RouterProvider router={router} />
			</CheckHealthProvider>
		</QueryClientProvider>
	</HelmetProvider>
);

export default App;
