import { SendMailResponsePortfolioArgs, ApiModule } from '@/service';
import { useMutation } from '@tanstack/react-query';

export const useMutationResponsePortfolio = (options?: {
	onSuccess: () => void;
	onError: () => void;
}) => {
	return useMutation<any, unknown, SendMailResponsePortfolioArgs>({
		mutationKey: ['response-portfolio'],
		mutationFn: async (args: SendMailResponsePortfolioArgs) => {
			const res = await ApiModule.email.sendMailResponsePortfolio(args);
			return res;
		},
		onSuccess: async () => {
			if (options?.onSuccess) options.onSuccess();
		},
		onError: options?.onError,
	});
};
