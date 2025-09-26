import { useState, useEffect } from 'react';
import { useQueryCheckHealth } from './useQueryCheckHealth';

interface UseHealthPollingOptions {
	enabled?: boolean;
	interval?: number; // in minutes
}

export const useHealthPolling = (options: UseHealthPollingOptions = {}) => {
	const { enabled = true, interval = 2 } = options;

	const [isPolling, setIsPolling] = useState(enabled);

	const {
		data: healthData,
		isLoading,
		error,
		isError,
		refetch,
	} = useQueryCheckHealth({
		enabled: isPolling,
	});

	// Control polling
	const startPolling = () => setIsPolling(true);
	const stopPolling = () => setIsPolling(false);
	const togglePolling = () => setIsPolling((prev) => !prev);

	// Manual refetch
	const checkHealthNow = () => {
		refetch();
	};

	// Log polling status
	useEffect(() => {
		console.log(
			`Health polling ${isPolling ? 'started' : 'stopped'} - Interval: ${interval} minutes`,
		);
	}, [isPolling, interval]);

	return {
		healthData,
		isLoading,
		error,
		isError,
		isPolling,
		startPolling,
		stopPolling,
		togglePolling,
		checkHealthNow,
		refetch,
	};
};
