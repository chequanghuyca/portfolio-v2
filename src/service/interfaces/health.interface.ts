import { IApiResponse, IBaseRepository } from './base.interface';

export interface IHealth extends IBaseRepository<any> {
	checkHealth(): Promise<IApiResponse<IHealthResponse>>;
}

export interface IHealthResponse {
	status: string;
	timestamp: string;
}
