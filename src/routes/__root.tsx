import { Toaster } from '@/components/ui/sonner';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/NotFound';

function Layout() {
	return (
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<Outlet />
		</TooltipProvider>
	);
}

/**
 * Docs for file-based routing: https://tanstack.com/router/latest/docs/framework/react/routing/file-based-routing#directory-routes
 */
export const Route = createRootRoute({
	component: Layout,
	notFoundComponent: NotFound,
});
