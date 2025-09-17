import type { RequestConfig } from './http-client';

export default () => {
	return (config: RequestConfig) => {
		const apiKey = (import.meta as any).env?.VITE_API_KEY as string | undefined;
		config.headers = {
			...(config.headers || {}),
			'Content-Type': 'application/json; charset=utf-8',
			Accept: 'application/json',
			...(apiKey ? { 'x-api-key': apiKey } : {}),
		};

		return config;
	};
};
