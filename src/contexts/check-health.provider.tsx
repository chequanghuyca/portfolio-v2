import { useQueryCheckHealth } from '@/hooks/health';
import { useEffect } from 'react';

export function useCheckHealth() {
	const {
		data: healthData,
		isLoading: isLoadingHealth,
		error,
		isError,
	} = useQueryCheckHealth();

	// Log health status for debugging
	useEffect(() => {
		if (healthData) {
			console.log('Health check successful:', {
				status: healthData.data.status,
				timestamp: healthData.data.timestamp,
				time: new Date().toISOString(),
			});
		}
	}, [healthData]);

	useEffect(() => {
		if (isError && error) {
			console.error('Health check failed:', {
				error,
				time: new Date().toISOString(),
			});
		}
	}, [isError, error]);

	return {
		healthData,
		isLoadingHealth,
		error,
		isError,
	};
}

export default function CheckHealthProvider({ children }: { children: React.ReactNode }) {
	const { healthData, isLoadingHealth, error, isError } = useCheckHealth();

	useEffect(() => {
		if (isError) {
			console.warn('Health check is failing. Service might be down.');
		}
	}, [isError]);

	return children;
}
