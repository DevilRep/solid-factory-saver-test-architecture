export interface IUserRepositoryData {
    readonly id: number;
    readonly email: string;
}

export interface IUserRepository {
    getById(id: number): Promise<IUserRepositoryData>;
}