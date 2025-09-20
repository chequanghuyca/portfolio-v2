import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { HelmetProvider } from 'react-helmet-async';
import { routeTree } from './routeTree.gen';

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
			<RouterProvider router={router} />
		</QueryClientProvider>
	</HelmetProvider>
);

export default App;
