import { EmailRepository } from './repositories';

class ApiModule {
	private emailRepository: EmailRepository;

	constructor() {
		this.emailRepository = new EmailRepository();
	}

	get email() {
		return this.emailRepository;
	}
}

export type IApiModule = typeof ApiModule;
export default new ApiModule();
