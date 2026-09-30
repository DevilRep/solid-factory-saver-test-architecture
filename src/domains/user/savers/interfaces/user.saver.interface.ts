export interface IUserSaverRawData {
    readonly id: number
    readonly name: string
    readonly phone?: string
}

export interface IUserSaver {
    updateUserData(user: IUserSaverRawData): Promise<void>
}