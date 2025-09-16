import { HttpClient, jsonContentTypeMiddleware } from '@/middleware';
import { isNil, omitBy } from 'lodash';
import { IBaseRepository } from '../interfaces/base.interface';

export abstract class BaseRepository<T> implements IBaseRepository<T> {
	protected abstract endpoint: string;
	protected httpClient: HttpClient;

	constructor() {
		this.httpClient = new HttpClient('https://email-service-v2.fly.dev');
		this.httpClient.use(jsonContentTypeMiddleware());
	}

	async getById(id: string): Promise<T> {
		try {
			const res = await this.httpClient.get(`${this.endpoint}/${id}`);
			return res as T;
		} catch (error) {
			throw error;
		}
	}

	protected async getWithParams(
		params: Record<string, any>,
		endpointBonus?: string,
	): Promise<any> {
		try {
			const baseEndpoint = !isNil(endpointBonus)
				? `${this.endpoint}/${endpointBonus}`
				: this.endpoint;

			const res = await this.httpClient.get(baseEndpoint, omitBy(params, isNil));

			return res;
		} catch (error) {
			throw error;
		}
	}

	protected async getDetail(id: string): Promise<any> {
		try {
			const res = await this.httpClient.get(`${this.endpoint}/${id}`);
			return res;
		} catch (error) {
			throw error;
		}
	}

	protected async post(data: any, endpointBonus?: string): Promise<any> {
		try {
			const baseEndpoint = !isNil(endpointBonus)
				? `${this.endpoint}/${endpointBonus}`
				: this.endpoint;

			const res = await this.httpClient.post(baseEndpoint, data);
			return res;
		} catch (error) {
			throw error;
		}
	}

	protected async patch(data: any, endpointBonus?: string): Promise<any> {
		try {
			const baseEndpoint = !isNil(endpointBonus)
				? `${this.endpoint}/${endpointBonus}`
				: this.endpoint;

			const res = await this.httpClient.patch(baseEndpoint, data);
			return res;
		} catch (error) {
			throw error;
		}
	}

	protected async delete(endpointBonus?: string): Promise<any> {
		try {
			const baseEndpoint = !isNil(endpointBonus)
				? `${this.endpoint}/${endpointBonus}`
				: this.endpoint;

			const res = await this.httpClient.delete(baseEndpoint);
			return res;
		} catch (error) {
			throw error;
		}
	}
}
