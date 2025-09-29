import { createFileRoute, redirect } from '@tanstack/react-router';
import DynamicViewport from '@/components/DynamicViewport';
import { viewportConfigs } from '@/hooks/useViewport';
import ProjectDetail from '@/pages/ProjectDetail';

export const Route = createFileRoute('/projects/$projectId')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<DynamicViewport config={viewportConfigs.project}>
			<ProjectDetail />
		</DynamicViewport>
	);
}
