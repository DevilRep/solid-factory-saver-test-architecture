export interface IUserByIdRawData {
    readonly id: number
}

export interface IUserByIdRepository {
    getUserById(id: number): IUserByIdRawData
}