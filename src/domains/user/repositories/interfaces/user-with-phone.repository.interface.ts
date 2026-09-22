export interface IUserWithPhoneRepositoryData {
    readonly id: number;
    readonly email: string;
    readonly phone: string;
}

export interface IUserWithPhoneRepository {
    getWithPhoneById(id: number): Promise<IUserWithPhoneRepositoryData>;
}