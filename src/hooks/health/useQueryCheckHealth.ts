import { ApiModule, IApiResponse, IHealthResponse } from '@/service';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export const useQueryCheckHealth = (
	options?: Pick<UseQueryOptions<IApiResponse<IHealthResponse>>, 'enabled'>,
) => {
	const response = useQuery<IApiResponse<IHealthResponse>>({
		...options,
		queryKey: ['check-health'],
		queryFn: async () => {
			try {
				const res = await ApiModule.health.checkHealth();
				return res;
			} catch (error) {
				throw error;
			}
		},
		refetchInterval: 4 * 60 * 1000,
		refetchIntervalInBackground: true,
		refetchOnWindowFocus: true,
		staleTime: 0,
	});

	return response;
};
