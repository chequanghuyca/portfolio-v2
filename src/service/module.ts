import { EmailRepository, HealthRepository } from './repositories';

class ApiModule {
	private emailRepository: EmailRepository;
	private healthRepository: HealthRepository;

	constructor() {
		this.emailRepository = new EmailRepository();
		this.healthRepository = new HealthRepository();
	}

	get email() {
		return this.emailRepository;
	}

	get health() {
		return this.healthRepository;
	}
}

export type IApiModule = typeof ApiModule;
export default new ApiModule();
