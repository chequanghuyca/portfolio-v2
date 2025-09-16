import { IApiResponse } from '../interfaces';
import {
	EmailPortfolioResponse,
	IEmail,
	SendMailResponsePortfolioArgs,
} from '../interfaces/email.interface';
import { BaseRepository } from './base.repository';

export class EmailRepository extends BaseRepository<IEmail> implements IEmail {
	protected endpoint = '/api/email';

	async sendMailResponsePortfolio(
		args: SendMailResponsePortfolioArgs,
	): Promise<IApiResponse<EmailPortfolioResponse>> {
		return this.post(args, 'response-portfolio');
	}
}
