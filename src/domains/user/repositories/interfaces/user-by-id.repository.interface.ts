export interface IAuthenticatedUserRawData {
    readonly id: number
}

export interface IAuthenticatedUserRepository {
    getUserById(id: number): Promise<IAuthenticatedUserRawData>
}