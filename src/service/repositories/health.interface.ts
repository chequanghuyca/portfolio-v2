import { IApiResponse } from '../interfaces';
import { IHealth, IHealthResponse } from '../interfaces/health.interface';
import { BaseRepository } from './base.repository';

export class HealthRepository extends BaseRepository<IHealth> implements IHealth {
	protected endpoint = '/api';
	async checkHealth(): Promise<IApiResponse<IHealthResponse>> {
		const res = await this.getWithParams({}, 'health');
		return res;
	}
}
