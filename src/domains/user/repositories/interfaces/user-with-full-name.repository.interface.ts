export interface IUserWithFullNameRepositoryData {
    readonly id: number;
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
}

export interface IUserWithFullNameRepository {
    getUserWithFullNameById(id: number): Promise<IUserWithFullNameRepositoryData>;
}