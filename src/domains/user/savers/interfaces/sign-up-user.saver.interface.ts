export interface ISignUpUserRawData {
    readonly firstName: string
    readonly lastName: string
    readonly pasword: string
    readonly email: string
}

export interface ISignUpUserResult {
    readonly id: number
    readonly firstName: string
    readonly lastName: string
    readonly email: string
}

export interface ISignUpUserSaver {
    createNewUser(data: ISignUpUserRawData): Promise<ISignUpUserResult>
}