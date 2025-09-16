export interface IBaseRepository<T> {
	getById(id: string): Promise<T>;
}

export interface IApiResponse<T> {
	code: number;
	data: T;
	message: string;
}
