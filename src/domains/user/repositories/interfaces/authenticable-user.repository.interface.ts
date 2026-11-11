export interface IAuthenticableUserRawData {
    id: number
    password: string
}

export interface IAuthenticableUserRepository {
    getUserWithPassword(email: string): Promise<IAuthenticableUserRawData>
}