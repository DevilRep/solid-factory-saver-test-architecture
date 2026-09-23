export interface IUserRepositoryData {
    readonly id: number;
    readonly email: string;
    readonly name?: string;
}

export interface IUserRepository {
    getById(id: number): Promise<IUserRepositoryData>;
}