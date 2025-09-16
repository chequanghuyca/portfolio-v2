import { IApiResponse, IBaseRepository } from './base.interface';

export interface IEmail extends IBaseRepository<any> {
	sendMailResponsePortfolio(
		args: SendMailResponsePortfolioArgs,
	): Promise<IApiResponse<EmailPortfolioResponse>>;
}

export interface SendMailResponsePortfolioArgs {
	email: string;
	name: string;
	message: string;
}

export interface EmailPortfolioResponse {
	success: boolean;
	message: string;
	messageId: string;
}
