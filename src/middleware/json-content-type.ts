import type { RequestConfig } from './http-client';

export default () => {
	return (config: RequestConfig) => {
		config.headers = {
			...(config.headers || {}),
			'Content-Type': 'application/json; charset=utf-8',
			Accept: 'application/json',
		};

		return config;
	};
};
