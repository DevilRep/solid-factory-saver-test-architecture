export interface IUserWithFullNameSaverRawData {
    readonly id: number
    readonly firstName: string
    readonly lastName: string
    readonly phone?: string
}

export interface IUserWithFullNameSaver {
    saveUserWithFullName(user: IUserWithFullNameSaverRawData): Promise<void>
}