export interface IAuthentificableUserRawData {
    id: number
    password: string
}

export interface IAuthentificableUserRepository {
    getUserWithPassword(id: number): Promise<IAuthentificableUserRawData>
}