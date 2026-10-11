/**
 * @deprecated
 */
export interface IUserRepositoryData {
    readonly id: number;
    readonly email: string;
    readonly name?: string;
}

/**
 * @deprecated
 */
export interface IUserRepository {
    getById(id: number): Promise<IUserRepositoryData>;
}