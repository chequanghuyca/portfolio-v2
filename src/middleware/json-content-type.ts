import type { RequestConfig } from './http-client';

export default () => {
	return (config: RequestConfig) => {
		config.headers = {
			...(config.headers || {}),
			'Content-Type': 'application/json; charset=utf-8',
			Accept: 'application/json',
			'x-api-key': import.meta.env.VITE_API_KEY as string | undefined,
		};

		return config;
	};
};
