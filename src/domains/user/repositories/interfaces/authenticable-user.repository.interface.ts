export interface IAuthenticableUserRawData {
    id: number
    password: string
}

export interface IAuthenticableUserRepository {
    getUserWithPassword(id: number): Promise<IAuthenticableUserRawData>
}