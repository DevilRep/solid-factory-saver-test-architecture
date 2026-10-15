export interface IUserSaverRawData {
    readonly id: number
    readonly firstName: string
    readonly lastName: string
}

export interface IUserSaver {
    saveUserData(data: IUserSaverRawData): Promise<void>
}