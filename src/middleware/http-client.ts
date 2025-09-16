import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { isNil, omitBy } from 'lodash';

export type RequestConfig = AxiosRequestConfig;

export type RequestConfigMiddlewareOptions = {
	forHttpMethods?: ('GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE')[];
};

export type RequestConfigMiddlewareHandler = (
	config: RequestConfig,
) => RequestConfig | Promise<RequestConfig>;

export type RequestConfigMiddleware = {
	handler: RequestConfigMiddlewareHandler;
	options?: RequestConfigMiddlewareOptions;
};

export class HttpClient {
	private baseApiUrl: string;

	private configMiddlewares: Array<RequestConfigMiddleware> = [];

	private axiosInstance: AxiosInstance;

	constructor(baseApiUrl: string) {
		this.baseApiUrl = baseApiUrl;
		this.axiosInstance = axios.create({
			timeout: 10000,
			timeoutErrorMessage:
				'Request timeout. Please make sure your internet connection is stable.',
		});
	}

	private async applyMiddlewares(config: RequestConfig) {
		return new Promise<RequestConfig>(async (resolve, reject) => {
			let retConfig: RequestConfig = { ...config };
			let rejected = false;

			await Promise.all(
				this.configMiddlewares.map(async (middleware) => {
					if (rejected) {
						return;
					}

					try {
						if (middleware.options?.forHttpMethods) {
							if (!middleware.options.forHttpMethods.includes(config.method as any)) {
								return;
							}
						}
						retConfig = await middleware.handler(retConfig);
					} catch (e) {
						reject(e);
						rejected = false;
					}
				}),
			);
			resolve(retConfig);
		});
	}

	public getBaseUrl = () => {
		return this.baseApiUrl;
	};

	public use = (
		middlewareHandler: RequestConfigMiddlewareHandler,
		options?: RequestConfigMiddlewareOptions,
	): HttpClient => {
		this.configMiddlewares.push({
			handler: middlewareHandler,
			options,
		});
		return this;
	};

	public get = async <T>(
		path: string,
		params: Record<string, unknown> = {},
		_retryCount = 0,
		_config?: RequestConfig,
	): Promise<T> => {
		try {
			const apiUrl = new URL(`${this.baseApiUrl}${path}`);

			for (const key in params) {
				const value = params[key];
				if (typeof value === 'object' && value !== null) {
					throw new Error(
						`Query param "${key}" must be a primitive value (string, number, boolean), got object.`,
					);
				}
				apiUrl.searchParams.append(key, String(value));
			}

			let config: RequestConfig = {
				method: 'GET',
				url: apiUrl.toString(),
				validateStatus: () => true,
				...(_config || {}),
			};

			config = await this.applyMiddlewares(config);
			const response = await this.axiosInstance(apiUrl.toString(), config);

			const responseData = response.data;
			if (response.status === 200 || response.status === 201) {
				return responseData as T;
			}

			const message = responseData?.message || responseData?.error || response.statusText;

			throw new Error(message);
		} catch (e: any) {
			if (!_retryCount) {
				if (/network request failed/.test(String(e.message).toLowerCase())) {
					return this.get(path, params, 1);
				}
			}
			throw e;
		}
	};

	public post = async <T>(
		path: string,
		data?: Record<string, unknown> | FormData | null,
		initConfig?: RequestConfig,
		_retryCount = 0,
	): Promise<T> => {
		try {
			const apiUrl = new URL(`${this.baseApiUrl}${path}`);

			let config: RequestConfig = omitBy<RequestConfig>(
				{
					method: initConfig?.method || 'POST',
					url: apiUrl.toString(),
				},
				isNil,
			) as RequestConfig;

			config = await this.applyMiddlewares(config);
			const response = await this.axiosInstance(apiUrl.toString(), {
				...config,
				data: !isNil(data) ? data : undefined,
				validateStatus: () => true,
			});

			const responseData = response.data;
			if (response.status === 200 || response.status === 201) {
				return responseData as T;
			}

			const message = responseData?.message || responseData?.error || response.statusText;

			if (message === 'Network request failed' && !_retryCount) {
				return this.post(path, data, initConfig, 1);
			}

			throw new Error(message);
		} catch (e: any) {
			if (!_retryCount) {
				if (/network request failed/.test(String(e.message).toLowerCase())) {
					return this.post(path, data, initConfig, 1);
				}
			}
			throw e;
		}
	};

	public put = async <T>(
		path: string,
		data?: Record<string, unknown>,
		initConfig?: RequestConfig,
	): Promise<T> => {
		return this.post(path, data, { ...initConfig, method: 'PUT' });
	};

	public patch = async <T>(
		path: string,
		data?: Record<string, unknown>,
		initConfig?: RequestConfig,
	): Promise<T> => {
		return this.post(path, data, { ...initConfig, method: 'PATCH' });
	};

	public delete = async <T>(
		path: string,
		data?: Record<string, unknown>,
		initConfig?: RequestConfig,
	): Promise<T> => {
		return this.post(path, data, { ...initConfig, method: 'DELETE' });
	};

	public fetch = async <T>(): Promise<T> => {
		return this.get('', {});
	};
}
