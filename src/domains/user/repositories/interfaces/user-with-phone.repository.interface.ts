/**
 * @deprecated
 */
export interface IUserWithPhoneRepositoryData {
    readonly id: number;
    readonly email: string;
    readonly phone: string;
    readonly name?: string;
}

/**
 * @deprecated
 */
export interface IUserWithPhoneRepository {
    getWithPhoneById(id: number): Promise<IUserWithPhoneRepositoryData>;
}