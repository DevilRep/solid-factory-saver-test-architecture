export interface IUserSaverRawData {
    readonly name: string
}

export interface IUserSaver {
    updateUserData(user: IUserSaverRawData): Promise<void>
}