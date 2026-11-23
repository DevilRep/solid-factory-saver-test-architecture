export interface ISignUpUserRawData {
    readonly firstName: string
    readonly lastName: string
    readonly pasword: string
}

export interface ISignUpUserResult {
    readonly id: number
    readonly firstName: string
    readonly lastName: string
}

export interface ISignUpUserSaver {
    createNewUser(data: ISignUpUserRawData): Promise<ISignUpUserResult>
}